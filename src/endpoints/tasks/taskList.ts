import { AppContext } from "../../types";

export const TaskList = async (c: AppContext) => {
  return c.json({
    success: true,
    data: [
      {
        id: 1,
        name: "Task 1",
        slug: "task-1",
        description: "This is the first task.",
        completed: false,
        due_date: new Date().toISOString(),
      },
    ],
  });
};