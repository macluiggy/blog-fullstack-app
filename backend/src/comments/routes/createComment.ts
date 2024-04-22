

import { Hono, type Context } from "hono";
import { randomBytes } from "crypto";
const router = new Hono();

router.get("/api/hello", (c) => {
  return c.json({
    ok: true,
    message: "Hello Hono!",
  });
});

const commentsByPostId: { [key: string]: { id: string; content: string }[] } =
  {};

router.get("/posts/:id/comments", (c) => {
  return c.json(commentsByPostId[c.req.param("id")] || []);
});

router.post("/posts/:id/comments", async (c) => {
  const id = randomBytes(4).toString("hex");
  const body = await c.req.json();
  const { content } = body;
  const comments = commentsByPostId[c.req.param("id")] || [];
  comments.push({ id, content });
  commentsByPostId[c.req.param("id")] = comments;
  return c.json(comments);
});

export default router;
