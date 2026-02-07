import { Db } from "mongodb";
import { Collections } from "../collections";
import { Mod, PageViews } from "../models";
import dayjs from "dayjs";
import { faker } from "@faker-js/faker";

export async function createPageViews(db: Db) {
  const mods = await db.collection<Mod>(Collections.Mods).find().toArray();

  const views = [];

  for (const mod of mods) {
    const curseforge = {};
    const modrinth = {};

    for (let i = -500; i < 500; i++) {
      const date = dayjs().add(i, "days").format("YYYY.M.D");

      setViews(curseforge, date, faker.number.int({ min: 1000, max: 5000 }));
      setViews(modrinth, date, faker.number.int({ min: 100, max: 500 }));
    }

    const view: Partial<PageViews> = {
      mod_id: mod.mod_id,
      curseforge,
      modrinth
    };

    views.push(view);
  }

  await db.collection(Collections.PageViews).deleteMany({});
  await db.collection(Collections.PageViews).insertMany(views);

  console.log(`Created ${mods.length} mod page views`);
}

function setViews(obj: any, path: string, value: number) {
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
