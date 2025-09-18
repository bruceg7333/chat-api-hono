import { AppContext } from "@/types";

export const TaskDelete = async (c: AppContext) => {
  const id = c.req.param("id");
  return c.json({
    success: true,
    message: `Task ${id} deleted.`,
  });
};