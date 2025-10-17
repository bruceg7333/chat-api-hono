import { AppContext } from "@/types";
import { getSupabaseClient } from "@/lib/supabase";

export const TtsSpeak = async (c: AppContext) => {
  try {
    const { text } = await c.req.json();
    
    if (!text) {
      return c.json({
        success: false,
        error: "Text is required"
      }, 400);
    }

    const googleApiKey = c.env.GOOGLE_API_KEY;
    if (!googleApiKey) {
      return c.json({
        success: false,
        error: "Google API key not configured"
      }, 500);
    }

    const apiEndpoint = "https://texttospeech.googleapis.com/v1/text:synthesize";
    
    // Generate hash using Web Crypto API for Cloudflare Workers
    const encoder = new TextEncoder();
    const textData = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('MD5', textData);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    const filePath = `tts/${hash}.mp3`;
    const supabase = getSupabaseClient(c);
    // Check if file already exists
    try {
      const { data } = await supabase
        .storage
        .from("jpabook")
        .download(filePath);
      if (data) {
        const { data: { publicUrl } } = supabase
          .storage
          .from("jpabook")
          .getPublicUrl(filePath);

        return c.json({
          success: true,
          data: { url: publicUrl }
        });
      }

    } catch (e) {
      console.log(e)
      // File doesn't exist, continue to generate new file
    }

    console.log("Generating new speech file", googleApiKey,text)
    // Generate new speech file
    const response = await fetch(
      `${apiEndpoint}?key=${googleApiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: { text },
          voice: {
            languageCode: "ja-JP",
            name: "ja-JP-Neural2-B",
          },
          audioConfig: {
            audioEncoding: "MP3",
            speakingRate: 1.0,
            pitch: 0,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(JSON.stringify(errorData));
    }

    const data = await response.json() as { audioContent: string };
    
    // Convert base64 to Uint8Array for Cloudflare Workers (Buffer not available)
    const binaryString = atob(data.audioContent);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    // Upload to Supabase
    await supabase
      .storage
      .from("jpabook")
      .upload(filePath, bytes, {
        contentType: "audio/mpeg",
        cacheControl: "3600",
        upsert: true,
      });

    // Get public URL
    const { data: { publicUrl } } = supabase
      .storage
      .from("jpabook")
      .getPublicUrl(filePath);

    return c.json({
      success: true,
      data: { url: publicUrl }
    });

  } catch (error) {
    console.error("TTS error:", error);
    return c.json({
      success: false,
      error: "Failed to convert text to speech"
    }, 500);
  }
};