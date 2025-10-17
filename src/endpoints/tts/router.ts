import { Hono } from "hono";
import { TtsSpeak } from "@/endpoints/tts/speak";

export const ttsRouter = new Hono();

// POST /tts/speak - Convert text to speech
ttsRouter.post("/speak", TtsSpeak);