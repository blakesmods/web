import { Collections, Mod, ModFile } from "@blakesmods/db";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import numeral from "numeral";
import { z } from "zod";

export const plugin: FastifyPluginAsyncZod = async fastify => {
  const db = fastify.mongo.db!;

  fastify.get(
    "/:mod_id/downloads",
    {
      schema: {
        params: z.object({
          mod_id: z.string()
        })
      }
    },
    async (request, reply) => {
      const params = request.params;

      const mod = await db
        .collection<Mod>(Collections.Mods)
        .findOne({ mod_id: params.mod_id });

      if (!mod) {
        return {
          schemaVersion: 1,
          label: "downloads",
          message: "invalid mod provided",
          isError: true
        };
      }

      const downloads =
        mod.site_downloads + mod.curseforge_downloads + mod.modrinth_downloads;

      return {
        schemaVersion: 1,
        label: "downloads",
        message: numeral(downloads).format(),
        color: "brightgreen"
      };
    }
  );

  fastify.get(
    "/:mod_id/version",
    {
      schema: {
        params: z.object({
          mod_id: z.string()
        })
      }
    },
    async (request, reply) => {
      const params = request.params;

      const latest_release = await db
        .collection<ModFile>(Collections.ModFiles)
        .findOne(
          {
            mod_id: params.mod_id,
            released: true
          },
          {
            sort: {
              "mod_version_parts.major": -1,
              "mod_version_parts.minor": -1,
              "mod_version_parts.patch": -1
            }
          }
        );

      if (!latest_release) {
        return {
          schemaVersion: 1,
          label: "version",
          message: "invalid mod provided",
          isError: true
        };
      }

      return {
        schemaVersion: 1,
        label: "version",
        message: latest_release.mod_version,
        color: "brightgreen"
      };
    }
  );

  fastify.get(
    "/:mod_id/mc_version",
    {
      schema: {
        params: z.object({
          mod_id: z.string()
        })
      }
    },
    async (request, reply) => {
      const params = request.params;

      const latest_release = await db
        .collection<ModFile>(Collections.ModFiles)
        .findOne(
          {
            mod_id: params.mod_id,
            released: true
          },
          {
            sort: {
              "mod_version_parts.major": -1,
              "mod_version_parts.minor": -1,
              "mod_version_parts.patch": -1
            }
          }
        );

      if (!latest_release) {
        return {
          schemaVersion: 1,
          label: "minecraft",
          message: "invalid mod provided",
          isError: true
        };
      }

      return {
        schemaVersion: 1,
        label: "minecraft",
        message: latest_release.mc_version,
        color: "brightgreen"
      };
    }
  );
};

export default plugin;
