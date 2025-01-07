import { PageViews } from "@blakesmods/db";
import dayjs from "dayjs";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export default async function (fastify: FastifyInstance) {
  const db = fastify.mongo.db!;

  fastify.get(
    "/:mod_id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { source } = request.query as any;
      if (!source) {
        reply.status(400);
        return "Missing `source` query parameter.";
      }

      if (source !== "curseforge" && source !== "modrinth") {
        reply.status(400);
        return "`source` must be one of `curseforge` or `modrinth`";
      }

      const { mod_id } = request.params as any;

      await db.collection<PageViews>("page_views").updateOne(
        { mod_id },
        {
          $inc: {
            [`${source}.${dayjs().format("YYYY.M.D")}`]: 1
          }
        },
        { upsert: true }
      );

      reply.redirect(
        `https://blakesmods.com/img/banner/${mod_id}_title.png`,
        301
      );
    }
  );
}
