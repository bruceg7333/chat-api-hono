import type { Context } from "hono";

export type Env = {
  SUPABASE_ANON_KEY: any;
  SUPABASE_URL: string;
  JWT_SECRET: string;
  GOOGLE_API_KEY: string;
};

export type AppContext = Context<{ Bindings: Env }>;
export type HandleArgs = [AppContext];
