import { Mod, ModFile, ModStats } from "@blakesmods/db";
import dayjs from "dayjs";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { coerce, rcompare } from "semver";

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
    "/:mod_id/files",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { mod_id } = request.params as any;
      const { page = 1, mc_version, mod_loader } = request.query as any;

      const skip = (Number(page) - 1) * 10;
      const limit = 10;

      const filter = {
        mod_id
      } as any;

      if (mc_version) {
        filter.mc_versions = mc_version;
      }

      if (mod_loader) {
        filter.mod_loader = mod_loader;
      }

      const files = await db
        .collection<ModFile>("mod_files")
        .find(filter)
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
        .countDocuments(filter);

      const mc_versions_list = await db
        .collection<ModFile>("mod_files")
        .distinct("mc_versions", { mod_id });

      const mod_loaders = await db
        .collection<ModFile>("mod_files")
        .distinct("mod_loader", { mod_id });

      return {
        success: true,
        data: {
          files,
          count,
          mc_versions: mc_versions_list.sort((a, b) =>
            rcompare(coerce(a)!, coerce(b)!)
          ),
          mod_loaders: mod_loaders.sort()
        }
      };
    }
  );

  fastify.get(
    "/:mod_id/:mc_version_group/updates",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { mod_id, mc_version_group } = request.params as any;

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
        .toArray();

      const mod = await db.collection<Mod>("mods").findOne({
        mod_id
      });

      const versions = {} as any;

      for (const file of files) {
        for (const version of file.mc_versions) {
          if (!versions[version]) {
            versions[version] = {
              mc_version: version,
              latest: file.mod_version,
              recommended: file.mod_version,
              files: []
            };
          }

          versions[version].files.push(file);
        }
      }

      await db.collection<ModStats>("mod_stats").updateOne(
        {
          mod_id
        },
        {
          $inc: {
            [`launches.${mc_version_group}.${dayjs().format("YYYY.M.D")}`]: 1
          }
        }
      );

      return {
        // NOTE: the website uses the same slug format (includes dashes)
        homepage: `https://blakesmods.com/${mod!.curseforge_slug}`,
        promos: Object.values(versions).reduce((a: any, b: any) => {
          a[`${b.mc_version}-recommended`] = b.recommended;
          a[`${b.mc_version}-latest`] = b.latest;
          return a;
        }, {}),
        ...(Object.values(versions).reduce((a: any, b: any) => {
          a[b.mc_version] = b.files.reduce((c: any, d: any) => {
            c[d.mod_version] =
              `https://blakesmods.com/${mod!.curseforge_slug}/download/${d._id}`;
            return c;
          }, {});
          return a;
        }, {}) as any)
      };
    }
  );
}
