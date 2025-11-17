import { Collections, Mod, ModFile, ModStats } from "@blakesmods/db";
import { ObjectId } from "bson";
import dayjs from "dayjs";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";

export const plugin: FastifyPluginAsyncZod = async fastify => {
  const db = fastify.mongo.db!;

  fastify.get(
    "/:file_id",
    {
      schema: {
        params: z.object({
          file_id: z.string()
        })
      }
    },
    async (request, reply) => {
      const { file_id } = request.params;

      if (!ObjectId.isValid(file_id)) {
        reply.status(404);

        return {
          success: false
        };
      }

      const file = await db
        .collection<ModFile>(Collections.ModFiles)
        .findOne({ _id: new ObjectId(file_id) });

      if (!file || !file.released) {
        reply.status(404);

        return {
          success: false
        };
      }

      await db
        .collection<Mod>(Collections.Mods)
        .updateOne({ mod_id: file.mod_id }, { $inc: { site_downloads: 1 } });

      await db
        .collection<ModFile>(Collections.ModFiles)
        .updateOne({ _id: file._id! }, { $inc: { site_downloads: 1 } });

      await db
        .collection<ModStats>(Collections.ModStats)
        .updateOne(
          { mod_id: file.mod_id },
          { $inc: { [`downloads.${dayjs().format("YYYY.M.D")}`]: 1 } }
        );

      const fileURL = "https://maven.blakesmods.com" + file.maven_path;

      return {
        success: true,
        data: {
          url: fileURL
        }
      };
    }
  );

  fastify.get(
    "/:file_id/info",
    {
      schema: {
        params: z.object({
          file_id: z.string()
        })
      }
    },
    async (request, reply) => {
      const { file_id } = request.params;

      if (!ObjectId.isValid(file_id)) {
        reply.status(404);

        return {
          success: false
        };
      }

      const file = await db
        .collection<ModFile>(Collections.ModFiles)
        .findOne({ _id: new ObjectId(file_id) });

      if (!file || !file.released) {
        reply.status(404);

        return {
          success: false
        };
      }

      return {
        success: true,
        data: file
      };
    }
  );
};

export default plugin;
