import { AppContext } from "../../types";

export const TaskRead = async (c: AppContext) => {
  const id = c.req.param("id");
  return c.json({
    success: true,
    data: {
      id: parseInt(id),
      name: `Task ${id}`,
      slug: `task-${id}`,
      description: `This is task ${id}.`,
      completed: false,
      due_date: new Date().toISOString(),
    },
  });
};