import { Hono } from 'hono';
import createPostRouter from './routes/createPost';

const app = new Hono();

app.route('/', createPostRouter);

export default {
  port: 3001,
  fetch: app.fetch.bind(app),
}