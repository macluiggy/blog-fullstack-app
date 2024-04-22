// import { Router } from "express";
// import type { Request, Response } from "express";
// import { randomBytes } from "crypto";

// const router = Router();

// const commentsByPostId: { [key: string]: { id: string; content: string }[] } = {};

// router.get("/posts/:id/comments", (req: Request, res: Response) => {
//   res.send(commentsByPostId[req.params.id] || []);
// });

// router.post("/posts/:id/comments", (req: Request, res: Response) => {
//   const id = randomBytes(4).toString("hex");
//   const { content } = req.body;
//   const comments = commentsByPostId[req.params.id] || [];
//   comments.push({ id, content });
//   commentsByPostId[req.params.id] = comments;
//   res.status(201).send(comments);
// });

// export default router;

import { Hono, type Context } from "hono";
import { randomBytes } from "crypto";
const comment = new Hono();

comment.get("/api/hello", (c) => {
  return c.json({
    ok: true,
    message: "Hello Hono!",
  });
});

const commentsByPostId: { [key: string]: { id: string; content: string }[] } =
  {};

comment.get("/posts/:id/comments", (c) => {
  return c.json(commentsByPostId[c.req.param("id")] || []);
});

// app.post("/posts/:id/comments", (c) => {
//   const id = randomBytes(4).toString("hex");
//   const { content } = c.req.json();
//   const comments = commentsByPostId[c.req.param("id")] || [];
//   comments.push({ id, content });
//   commentsByPostId[c.req.param("id")] = comments;
//   return c.json(comments);
// });
comment.post("/posts/:id/comments", async (c) => {
  const id = randomBytes(4).toString("hex");
  const body = await c.req.json();
  const { content } = body;
  const comments = commentsByPostId[c.req.param("id")] || [];
  comments.push({ id, content });
  commentsByPostId[c.req.param("id")] = comments;
  return c.json(comments);
});

export default comment;
