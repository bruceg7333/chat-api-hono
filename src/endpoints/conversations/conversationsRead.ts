import { AppContext } from "../../types";
import { getSupabaseClient } from "../../lib/supabase";

export const ConversationsRead = async (c: AppContext) => {
  const supabase = getSupabaseClient(c);
  const id = c.req.param("id");
  const { data, error } = await supabase
    .from("conversations")
    .select()
    .eq("id", id)
    .single();

  if (error) {
    return c.json({ success: false, error: error.message }, 500);
  }

  return c.json({ success: true, data });
};
