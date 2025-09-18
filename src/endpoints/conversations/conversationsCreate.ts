import { AppContext } from "../../types";
import { getSupabaseClient } from "../../lib/supabase";

export const ConversationsCreate = async (c: AppContext) => {
  const supabase = getSupabaseClient(c);
  const body = await c.req.json();
  const { data, error } = await supabase.from("conversations").insert(body).select();

  if (error) {
    return c.json({ success: false, error: error.message }, 500);
  }

  return c.json({ success: true, data });
};
