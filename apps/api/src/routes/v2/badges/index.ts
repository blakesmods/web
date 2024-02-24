import { Mod, ModFile } from "@blakesmods/db";
import { Router } from "itty-router";
import numeral from "numeral";

export const router = Router<CustomRequest, [Env]>({ base: "/v2/badges" });

router.get("/:mod_id/downloads", async ({ db, params }) => {
  const { mod_id } = params;

  const mod = await db.collection<Mod>("mods").findOne({ mod_id });

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
});

router.get("/:mod_id/version", async ({ db, params }) => {
  const { mod_id } = params;

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
});

router.get("/:mod_id/mc_version", async ({ db, params }) => {
  const { mod_id } = params;

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
});

export default router.handle;
