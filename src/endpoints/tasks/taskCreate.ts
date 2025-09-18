import { AppContext } from "@/types";

export const TaskCreate = async (c: AppContext) => {
  const body = await c.req.json();
  return c.json({
    success: true,
    data: {
      id: 2,
      ...body,
    },
  });
};