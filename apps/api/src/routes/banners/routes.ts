import { Collections, Mod, PageViews } from "@blakesmods/db";
import dayjs from "dayjs";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";

export const plugin: FastifyPluginAsyncZod = async fastify => {
  const db = fastify.mongo.db!;

  fastify.get(
    "/:mod_id",
    {
      schema: {
        params: z.object({
          mod_id: z.string()
        }),
        querystring: z.object({
          source: z.string().optional()
        })
      }
    },
    async (request, reply) => {
      const { source } = request.query;
      if (!source) {
        reply.status(400);
        return "Missing `source` query parameter.";
      }

      if (source !== "curseforge" && source !== "modrinth") {
        reply.status(400);
        return "The `source` query parameter must be one of `curseforge` or `modrinth`.";
      }

      const { mod_id } = request.params;

      const mod = await db.collection<Mod>(Collections.Mods).findOne({
        mod_id
      });

      if (!mod) {
        reply.status(404);
        return `Banner ${mod_id} not found.`;
      }

      await db.collection<PageViews>(Collections.PageViews).updateOne(
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
};

export default plugin;
