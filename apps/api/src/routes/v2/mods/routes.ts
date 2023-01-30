import { Mod, ModFile } from "@blakesmods/db";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { rcompare } from "semver";

export default async function (fastify: FastifyInstance) {
  const db = fastify.mongo.db!;

  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    const mods = await db.collection<Mod>("mods").find().toArray();

    return {
      success: true,
      data: {
        mods
      }
    };
  });

  fastify.get(
    "/:mod_id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { mod_id } = request.params as any;

      const mod = await db.collection<Mod>("mods").findOne({ mod_id });

      if (!mod) {
        reply.status(404);

        return {
          success: false
        };
      }

      const versions = await db
        .collection<ModFile>("mod_files")
        .distinct("mc_version_group", { mod_id });

      versions.sort((a, b) => rcompare(a + ".0", b + ".0"));

      const latest_release = await db.collection<ModFile>("mod_files").findOne(
        {
          mod_id,
          modrinth_id: { $ne: null },
          curseforge_id: { $ne: null }
        },
        {
          sort: {
            "mod_version_parts.major": -1,
            "mod_version_parts.minor": -1,
            "mod_version_parts.patch": -1
          }
        }
      );

      return {
        success: true,
        data: {
          ...mod,
          versions,
          latest_release
        }
      };
    }
  );

  fastify.get(
    "/:mod_id/:mc_version_group",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { mod_id, mc_version_group } = request.params as any;
      const { page = 1 } = request.query as any;

      const skip = (Number(page) - 1) * 10;
      const limit = Number(page) * 10;

      const files = await db
        .collection<ModFile>("mod_files")
        .find({
          mod_id,
          mc_version_group
        })
        .sort({
          "mod_version_parts.major": -1,
          "mod_version_parts.minor": -1,
          "mod_version_parts.patch": -1
        })
        .skip(skip)
        .limit(limit)
        .toArray();

      const count = await db
        .collection<ModFile>("mod_files")
        .countDocuments({ mod_id, mc_version_group });

      return {
        success: true,
        data: {
          files,
          count
        }
      };
    }
  );
}
