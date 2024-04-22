import express from "express";
import { randomBytes } from "crypto";
import createPostRouter from "./posts/routes/createPost";
const app = express();

app.use(express.json());

app.use(createPostRouter);

app.listen(4000, () => {
  console.log("Listening on 4000");
});