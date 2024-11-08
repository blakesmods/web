import FastifyAutoload from "@fastify/autoload";
import FastifyCookie from "@fastify/cookie";
import FastifyCors from "@fastify/cors";
import FastifyMongoDB from "@fastify/mongodb";
import { fastify } from "fastify";
import FastifyBlipp from "fastify-blipp";
import { join } from "path";

const port = process.env.PORT || 5000;
const server = fastify();

const start = async () => {
  try {
    server.register(FastifyBlipp);
    server.register(FastifyCookie);
    server.register(FastifyCors);
    server.register(FastifyMongoDB, {
      forceClose: true,
      url:
        process.env.MONGODB_URL ||
        "mongodb://root:example@localhost:27017/blakesmods?authSource=admin"
    });
    server.register(FastifyAutoload, {
      dir: join(__dirname, "plugins"),
      encapsulate: false
    });
    server.register(FastifyAutoload, {
      autoHooks: true,
      dir: join(__dirname, "routes")
    });

    server.get("/", async (request, reply) => {
      return "Blake's Mods API server is running!";
    });

    await server.listen({ host: "0.0.0.0", port: +port });

    server.blipp();
    console.log(`🚀 Server is running on port ${port}!`);
  } catch (err) {
    server.log.error(err);
    console.log(err);
    process.exit(1);
  }
};

start();
