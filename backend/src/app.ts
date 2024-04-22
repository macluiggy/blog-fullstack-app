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

app.listen(4000, () => {
  console.log("Listening on 4000");
});