import * as Sentry from "@sentry/node";
import { FastifyInstance } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    sentry: typeof Sentry;
  }
}

export default async function (fastify: FastifyInstance) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    enabled: process.env.NODE_ENV !== "development",
    environment: process.env.NODE_ENV
  });

  fastify.decorate("sentry", Sentry);

  fastify.addHook("onError", async (request, _reply, error) => {
    if (
      // ignore 400 bad request
      error.statusCode === 400 ||
      // ignore 401 unauthorized
      error.statusCode === 401
    ) {
      return;
    }

    console.error(request.routeOptions.url, error);

    Sentry.captureException(error);
  });
}
