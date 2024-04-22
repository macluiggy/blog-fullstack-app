import express from "express";
import { randomBytes } from "crypto";
const app = express();

app.use(express.json());
const posts: { [key: string]: { id: string; title: string; content: string } } = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});
app.post("/posts", (req, res) => {
  console.log("I am in");
  const id = randomBytes(4).toString("hex");
  const { title, content } = req.body;
  posts[id] = {
    id,
    title,
    content,
  };
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});