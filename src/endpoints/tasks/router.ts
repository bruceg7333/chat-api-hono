import { Hono } from "hono";
import { TaskList } from "@/endpoints/tasks/taskList";
import { TaskCreate } from "@/endpoints/tasks/taskCreate";
import { TaskRead } from "@/endpoints/tasks/taskRead";
import { TaskUpdate } from "@/endpoints/tasks/taskUpdate";
import { TaskDelete } from "@/endpoints/tasks/taskDelete";

export const tasksRouter = new Hono();

tasksRouter.get("/", TaskList);
tasksRouter.post("/", TaskCreate);
tasksRouter.get("/:id", TaskRead);
tasksRouter.put("/:id", TaskUpdate);
tasksRouter.delete("/:id", TaskDelete);