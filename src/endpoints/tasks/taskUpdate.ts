import { AppContext } from "../../types";

export const TaskUpdate = async (c: AppContext) => {
  const id = c.req.param("id");
  const body = await c.req.json();
  return c.json({
    success: true,
    data: {
      id: parseInt(id),
      ...body,
    },
  });
};