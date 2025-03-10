import { Mod, ModFile, ModStats } from "@blakesmods/db";
import { ObjectId } from "bson";
import dayjs from "dayjs";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export default async function (fastify: FastifyInstance) {
  const db = fastify.mongo.db!;

  fastify.get(
    "/:file_id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { file_id } = request.params as any;

      const file = await db
        .collection<ModFile>("mod_files")
        .findOne({ _id: new ObjectId(file_id as string) });

      if (!file) {
        reply.status(404);

        return {
          success: false
        };
      }

      await db
        .collection<Mod>("mods")
        .updateOne({ mod_id: file.mod_id }, { $inc: { site_downloads: 1 } });

      await db
        .collection<ModFile>("mod_files")
        .updateOne({ _id: file._id! }, { $inc: { site_downloads: 1 } });

      await db
        .collection<ModStats>("mod_stats")
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
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { file_id } = request.params as any;

      const file = await db
        .collection<ModFile>("mod_files")
        .findOne({ _id: new ObjectId(file_id as string) });

      if (!file) {
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
}
