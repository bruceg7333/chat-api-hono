import { Hono } from "hono";
import { ConversationsList } from "@/endpoints/conversations/conversationsList";
import { ConversationsCreate } from "@/endpoints/conversations/conversationsCreate";
import { ConversationsRead } from "@/endpoints/conversations/conversationsRead";
import { ConversationsUpdate } from "@/endpoints/conversations/conversationsUpdate";
import { ConversationsDelete } from "@/endpoints/conversations/conversationsDelete";
import { ConversationsPlayground } from "@/endpoints/conversations/playground";

export const conversationsRouter = new Hono();

conversationsRouter.get("/", ConversationsList);
conversationsRouter.post("/", ConversationsCreate);
conversationsRouter.put("/:id", ConversationsUpdate);
conversationsRouter.delete("/:id", ConversationsDelete);
conversationsRouter.get("/playground", ConversationsPlayground);
conversationsRouter.get("/single/:id", ConversationsRead);

