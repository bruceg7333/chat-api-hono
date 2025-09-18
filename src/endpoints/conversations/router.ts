import { Hono } from "hono";
import { ConversationsList } from "@/endpoints/conversations/conversationsList";
import { ConversationsCreate } from "@/endpoints/conversations/conversationsCreate";
import { ConversationsRead } from "@/endpoints/conversations/conversationsRead";
import { ConversationsUpdate } from "@/endpoints/conversations/conversationsUpdate";
import { ConversationsDelete } from "@/endpoints/conversations/conversationsDelete";

export const conversationsRouter = new Hono();

conversationsRouter.get('/', ConversationsList);
conversationsRouter.post('/', ConversationsCreate);
conversationsRouter.get('/:id', ConversationsRead);
conversationsRouter.put('/:id', ConversationsUpdate);
conversationsRouter.delete('/:id', ConversationsDelete);