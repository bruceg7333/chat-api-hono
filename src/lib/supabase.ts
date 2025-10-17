import { createClient } from "@supabase/supabase-js";
import { AppContext } from "@/types";

export const getSupabaseClient = (c: AppContext) => {
  const supabaseUrl = c.env.SUPABASE_URL;
  const supabaseKey = c.env.SUPABASE_ANON_KEY;
  return createClient(supabaseUrl, supabaseKey);
};
