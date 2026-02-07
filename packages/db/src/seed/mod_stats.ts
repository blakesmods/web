import { Db } from "mongodb";
import { Mod, ModFile, ModStats } from "../models";
import { Collections } from "../collections";
import dayjs from "dayjs";
import { faker } from "@faker-js/faker";

export async function createModStats(db: Db) {
  const mods = await db.collection<Mod>(Collections.Mods).find().toArray();
  const versions = await db
    .collection<ModFile>(Collections.ModFiles)
    .distinct("mc_version_group");

  const stats = [];

  for (const mod of mods) {
    const downloads = {};
    const launches = {};
    const unique_launches = {};

    for (let i = -500; i < 500; i++) {
      const date = dayjs().add(i, "days").format("YYYY.M.D");

      setStat(downloads, date, faker.number.int({ min: 100, max: 500 }));

      for (const version of versions) {
        setStat(
          launches,
          `${version}.${date}`,
          faker.number.int({ min: 20000, max: 60000 })
        );

        setStat(
          unique_launches,
          `${version}.${date}`,
          faker.number.int({ min: 10000, max: 50000 })
        );
      }
    }

    const stat: Partial<ModStats> = {
      mod_id: mod.mod_id,
      downloads,
      launches,
      unique_launches
    };

    stats.push(stat);
  }

  await db.collection(Collections.ModStats).deleteMany({});
  await db.collection(Collections.ModStats).insertMany(stats);

  console.log(`Created ${mods.length} mod stats`);
}

function setStat(obj: any, path: string, value: number) {
  const keys = path.split(".");
  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current)) {
      current[key] = {};
    }

    current = current[key];
  }

  current[keys[keys.length - 1]] = value;
}
