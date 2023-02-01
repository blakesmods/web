import { DownloadStats, Mod, ModFile } from "@blakesmods/db";
import dayjs from "dayjs";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ObjectId } from "mongodb";

export default async function (fastify: FastifyInstance) {
  const db = fastify.mongo.db!;
  const sentry = fastify.sentry;

  fastify.get(
    "/:file_id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { file_id } = request.params as any;

      const file = await db
        .collection<ModFile>("mod_files")
        .findOne({ _id: new ObjectId(file_id) });

      if (!file) {
        reply.status(404);

        return {
          success: false
        };
      }

      const session = fastify.mongo.client.startSession();
      let succeeded = true;

      try {
        await session.withTransaction(async () => {
          await db
            .collection<Mod>("mods")
            .updateOne(
              { mod_id: file.mod_id },
              { $inc: { site_downloads: 1 } },
              { session }
            );

          await db
            .collection<ModFile>("mod_files")
            .updateOne(
              { _id: file._id },
              { $inc: { site_downloads: 1 } },
              { session }
            );

          await db
            .collection<DownloadStats>("download_stats")
            .updateOne(
              { mod_id: file.mod_id },
              { $inc: { [`downloads.${dayjs().format("YYYY.M.D")}`]: 1 } },
              { session }
            );
        });
      } catch (e) {
        sentry.captureException(e);
        succeeded = false;
      } finally {
        await session.endSession();
      }

      if (succeeded) {
        const fileURL = "https://maven.blakesmods.com" + file.maven_path;

        return {
          success: true,
          data: {
            url: fileURL
          }
        };
      } else {
        reply.status(500);

        return {
          success: false
        };
      }
    }
  );
}
