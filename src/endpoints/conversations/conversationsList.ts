import { AppContext } from "../../types";
import { getSupabaseClient } from "../../lib/supabase";

export const ConversationsList = async (c: AppContext) => {
  const supabase = getSupabaseClient(c);
  const { data, error } = await supabase.from("conversations").select();

  if (error) {
    return c.json({ success: false, error: error.message }, 500);
  }

  return c.json({ success: true, data });
};
