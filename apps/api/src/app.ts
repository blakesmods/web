import FastifyAutoload from "@fastify/autoload";
import FastifyCookie from "@fastify/cookie";
import FastifyCors from "@fastify/cors";
import FastifyMongoDB from "@fastify/mongodb";
import { fastify } from "fastify";
import FastifyBlipp from "fastify-blipp";
import { join } from "path";

const app = fastify();

app.register(FastifyBlipp);
app.register(FastifyCookie);
app.register(FastifyCors);
app.register(FastifyMongoDB, {
  forceClose: true,
  url:
    process.env.MONGODB_URL ||
    "mongodb://root:example@localhost:27017/blakesmods?authSource=admin"
});
app.register(FastifyAutoload, {
  dir: join(__dirname, "plugins"),
  encapsulate: false
});
app.register(FastifyAutoload, {
  autoHooks: true,
  dir: join(__dirname, "routes")
});

app.get("/", async (request, reply) => {
  return "Blake's Mods API server is running!";
});

export { app };
