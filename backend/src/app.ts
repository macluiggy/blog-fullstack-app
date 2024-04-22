import express from "express";
// import routes
import createPostRouter from "./posts/routes/createPost";
import createCommentRouter from "./comments/routes/createComment";
const app = express();

app.use(express.json());

// posts
app.use(createPostRouter);
// comments
app.use(createCommentRouter);

export default app;