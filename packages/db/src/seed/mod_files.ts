import { faker } from "@faker-js/faker";
import { Db } from "mongodb";
import { Mod, ModFile } from "../models";

export async function createModFiles(db: Db) {
  const mods = await db.collection<Mod>("mods").find().toArray();

  const files = [];

  for (const mod of mods) {
    for (let i = 0; i < 10; i++) {
      const name = mod.mod_name.replace(/ /g, "");
      const version = faker.system.semver().split(".").map(Number);
      const mcVersion = faker.helpers
        .arrayElement(["1.18.2", "1.19", "1.19.2"])
        .split(".")
        .map(Number);

      const file: ModFile = {
        changelog: faker.lorem.lines(5),
        curseforge_downloads: faker.datatype.number(10000000),
        curseforge_id: faker.datatype.number(10000),
        file_name: `${name}-${mcVersion.join(".")}-${version.join(".")}`,
        file_size: faker.datatype.number(10000000),
        java_version: 17,
        maven_path: faker.system.filePath(),
        mc_version: mcVersion.join("."),
        mc_version_group: mcVersion.slice(0, 2).join("."),
        mc_version_parts: {
          major: mcVersion[0],
          minor: mcVersion[1],
          patch: mcVersion[2] || 0
        },
        md5_hash: faker.git.commitSha(),
        mod_id: mod.mod_id,
        mod_version: version.join("."),
        mod_version_parts: {
          major: version[0],
          minor: version[1],
          patch: version[2]
        },
        modrinth_downloads: faker.datatype.number(10000000),
        modrinth_id: faker.datatype.string(12),
        site_downloads: faker.datatype.number(10000000),
        upload_date: faker.date.past()
      };

      files.push(file);
    }
  }

  await db.collection("mod_files").deleteMany({});
  await db.collection("mod_files").insertMany(files);

  console.log(`Created ${files.length} mod files`);
}
