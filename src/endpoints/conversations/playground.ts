import { AppContext } from "@/types";

export const ConversationsPlayground = async (c: AppContext) => {
  const page = c.req.query("page");
  const limit = c.req.query("limit");

  return c.json({
    success: true,
    message: "Welcome to the conversations playground!",
    page: page ? parseInt(page) : 1,
    limit: limit ? parseInt(limit) : 10,
    data: [],
  });
};
