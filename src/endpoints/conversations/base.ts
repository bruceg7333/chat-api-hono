import { z } from "zod";

export const conversation = z.object({
  id: z.number().int(),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  createdAt: z.string().datetime(),
});

export const ConversationModel = {
  schema: conversation,
};
