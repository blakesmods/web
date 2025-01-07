import { Db } from "mongodb";
import { Mod, ModStats } from "../models";

export async function createModStats(db: Db) {
  const mods = await db.collection<Mod>("mods").find().toArray();

  const stats = [];

  for (const mod of mods) {
    const stat: Partial<ModStats> = {
      mod_id: mod.mod_id,
      downloads: {},
      launches: {}
    };

    stats.push(stat);
  }

  await db.collection("mod_stats").deleteMany({});
  await db.collection("mod_stats").insertMany(stats);

  console.log(`Created ${mods.length} mod stats`);
}
