import { Mod, ModFile, ModStats } from "@blakesmods/db";
import { ObjectId } from "bson";
import dayjs from "dayjs";
import { error, Router } from "itty-router";

export const router = Router<CustomRequest, [Env]>({ base: "/v2/files" });

router.get("/:file_id", async ({ db, params }, env) => {
  const { file_id } = params;

  const file = await db
    .collection<ModFile>("mod_files")
    .findOne({ _id: new ObjectId(file_id) });

  if (!file) {
    return error(404, "File not found");
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

  const fileURL = env.BLAKESMODS_MAVEN_URL + file.maven_path;

  return {
    success: true,
    data: {
      url: fileURL
    }
  };
});

export default router.handle;
