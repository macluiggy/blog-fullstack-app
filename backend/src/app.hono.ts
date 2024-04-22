import createCommentRouter from "./comments/routes/createComment.hono";
import { Hono } from "hono";
const app = new Hono();

app.route('/', createCommentRouter);

export default app;
 