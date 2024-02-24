import { Mod, ModFile } from "@blakesmods/db";
import { error, Router } from "itty-router";
import { coerce, rcompare } from "semver";

export const router = Router<CustomRequest, [Env]>({ base: "/v2/mods" });

router.get("/", async ({ db }) => {
  const mods = await db.collection<Mod>("mods").find();

  return {
    success: true,
    data: {
      mods
    }
  };
});

router.get("/:mod_id", async ({ db, params }) => {
  const { mod_id } = params;

  const mod = await db.collection<Mod>("mods").findOne({ mod_id });

  if (!mod) {
    return error(404, "Mod not found: " + mod_id);
  }

  const files = await db.collection<ModFile>("mod_files").find({ mod_id });

  // get a sorted list of all the unique mc versions
  const versions = files
    .map(f => f.mc_version_group)
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort((a, b) => rcompare(coerce(b)!, coerce(a)!));

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
});

router.get("/:mod_id/files", async ({ db, params, query }) => {
  const { mod_id } = params;
  const { page = 1, mc_version, mod_loader } = query;

  const skip = (Number(page) - 1) * 10;
  const limit = Number(page) * 10;

  const filter = {
    mod_id
  } as any;

  if (mc_version) {
    filter.mc_versions = mc_version;
  }

  if (mod_loader) {
    filter.mod_loader = mod_loader;
  }

  const files = await db.collection<ModFile>("mod_files").aggregate([
    { $match: filter },
    {
      $sort: {
        "mod_version_parts.major": -1,
        "mod_version_parts.minor": -1,
        "mod_version_parts.patch": -1
      }
    },
    { $skip: skip },
    { $limit: limit }
  ]);

  const count = await db.collection<ModFile>("mod_files").count(filter);

  const allFiles = await db.collection<ModFile>("mod_files").find({ mod_id });

  // get a sorted list of all the unique mc versions
  const mc_versions_list = allFiles
    .flatMap(f => f.mc_versions)
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort((a, b) => rcompare(coerce(b)!, coerce(a)!));

  const mod_loaders = allFiles
    .flatMap(f => f.mod_loader)
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort();

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
});

export default router.handle;
