import { Hono } from 'hono';
import { ConversationsList } from './conversationsList';
import { ConversationsCreate } from './conversationsCreate';
import { ConversationsRead } from './conversationsRead';
import { ConversationsUpdate } from './conversationsUpdate';
import { ConversationsDelete } from './conversationsDelete';

export const conversationsRouter = new Hono();

conversationsRouter.get('/', ConversationsList);
conversationsRouter.post('/', ConversationsCreate);
conversationsRouter.get('/:id', ConversationsRead);
conversationsRouter.put('/:id', ConversationsUpdate);
conversationsRouter.delete('/:id', ConversationsDelete);