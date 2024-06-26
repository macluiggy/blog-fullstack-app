// import { Router } from "express";
// import type { Request, Response } from "express";
// import { randomBytes } from "crypto";

// const router = Router();

// const posts: { [key: string]: { id: string; title: string; content: string } } = {
//   "1": {
//     id: "1",
//     title: "Hello",
//     content: "World",
//   },
//   "2": {
//     id: "2",
//     title: "Foo",
//     content: "Bar",
//   },
// };

// router.get("/posts", (req: Request, res: Response) => {
//   res.send(posts);
// });

// router.post("/posts", (req: Request, res: Response) => {
//   console.log("I am in");
//   const id = randomBytes(4).toString("hex");
//   const { title, content } = req.body;
//   posts[id] = {
//     id,
//     title,
//     content,
//   };
//   res.status(201).send(posts[id]);
// });

// export default router;

import { Hono, type Context } from "hono";
import { randomBytes } from "crypto";
const router = new Hono();

const posts: { [key: string]: { id: string; title: string; content: string } } =
  {
    "1": {
      id: "1",
      title: "Hello",
      content: "World",
    },
    "2": {
      id: "2",
      title: "Foo",
      content: "Bar",
    },
  };

router.get("/posts", (c) => {
  return c.json(posts);
});

router.post("/posts", async (c) => {
  const id = randomBytes(4).toString("hex");
  const body = await c.req.json();
  const { title, content } = body;
  posts[id] = {
    id,
    title,
    content,
  };
  return c.json(posts[id]);
});

export default router;
