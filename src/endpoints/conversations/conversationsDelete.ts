import { AppContext } from "@/types";
import { getSupabaseClient } from "@/lib/supabase";

export const ConversationsDelete = async (c: AppContext) => {
  const supabase = getSupabaseClient(c);
  const id = c.req.param("id");
  const { error } = await supabase.from("conversations").delete().eq("id", id);

  if (error) {
    return c.json({ success: false, error: error.message }, 500);
  }

  return c.json({ success: true, message: `Conversation ${id} deleted.` });
};
