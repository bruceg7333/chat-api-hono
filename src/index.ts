import { Hono } from "hono";
import { tasksRouter } from "@/endpoints/tasks/router";
import { conversationsRouter } from "@/endpoints/conversations/router";

// Start a Hono app
const app = new Hono<{ Bindings: Env }>();

app.onError((err, c) => {
  console.error("Global error handler caught:", err); // Log the error

  // For all errors, return a generic 500 response
  return c.json(
    {
      success: false,
      errors: [{ code: 7000, message: "Internal Server Error" }],
    },
    500,
  );
});

// Register Tasks Sub router
app.route("/tasks", tasksRouter);

// Register Conversations Sub router
app.route("/conversations", conversationsRouter);

// Export the Hono app
export default app;
