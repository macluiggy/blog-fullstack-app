import createCommentRouter from "./comments/routes/createComment";
import createPostRouter from "./posts/routes/createPost";
import { Hono } from "hono";
const app = new Hono();

app.route('/', createCommentRouter);
app.route('/', createPostRouter);

export default app;
 