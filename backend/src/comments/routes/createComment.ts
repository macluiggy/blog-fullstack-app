import { Router } from "express";
import type { Request, Response } from "express";
import { randomBytes } from "crypto";

const router = Router();

const commentsByPostId: { [key: string]: { id: string; content: string }[] } = {};

router.get("/posts/:id/comments", (req: Request, res: Response) => {
  res.send(commentsByPostId[req.params.id] || []);
});

router.post("/posts/:id/comments", (req: Request, res: Response) => {
  const id = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id, content });
  commentsByPostId[req.params.id] = comments;
  res.status(201).send(comments);
});

export default router;