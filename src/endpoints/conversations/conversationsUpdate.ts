import { AppContext } from "@/types";
import { getSupabaseClient } from "@/lib/supabase";

export const ConversationsUpdate = async (c: AppContext) => {
  const supabase = getSupabaseClient(c);
  const id = c.req.param("id");
  const body = await c.req.json();
  const { data, error } = await supabase
    .from("conversations")
    .update(body)
    .eq("id", id)
    .select();

  if (error) {
    return c.json({ success: false, error: error.message }, 500);
  }

  return c.json({ success: true, data });
};
