import { faker } from "@faker-js/faker";
import { Db } from "mongodb";
import { Mod, ModFile } from "../models";

export async function createModFiles(db: Db) {
  const mods = await db.collection<Mod>("mods").find().toArray();

  const files = [];

  for (const mod of mods) {
    for (let i = 0; i < 16; i++) {
      const name = mod.mod_name.replace(/ /g, "");
      const version = faker.system.semver().split(".").map(Number);
      const mcVersions = faker.helpers.arrayElements(
        ["1.18.2", "1.19", "1.19.2", "1.20", "1.20.1"],
        { min: 1, max: 3 }
      );
      const mcVersion = mcVersions[0].split(".").map(Number);

      const file: Partial<ModFile> = {
        changelog: faker.lorem.lines(5),
        curseforge_downloads: faker.number.int(10000000),
        curseforge_id: faker.number.int(10000),
        file_name: `${name}-${mcVersion.join(".")}-${version.join(".")}`,
        file_size: faker.number.int(10000000),
        java_version: 17,
        maven_path: faker.system.filePath(),
        mc_version: mcVersion.join("."),
        mc_version_group: mcVersion.slice(0, 2).join("."),
        mc_version_parts: {
          major: mcVersion[0],
          minor: mcVersion[1],
          patch: mcVersion[2] || 0
        },
        mc_versions: mcVersions,
        md5_hash: faker.git.commitSha().slice(0, 32),
        mod_id: mod.mod_id,
        mod_version: version.join("."),
        mod_version_parts: {
          major: version[0],
          minor: version[1],
          patch: version[2]
        },
        mod_loader: faker.helpers.arrayElement(["Forge", "NeoForge"]),
        modrinth_downloads: faker.number.int(10000000),
        modrinth_id: faker.string.nanoid(12),
        released: faker.helpers.arrayElement([true, true, true, false]),
        site_downloads: faker.number.int(10000000),
        upload_date: faker.date.past()
      };

      files.push(file);
    }
  }

  await db.collection("mod_files").deleteMany({});
  await db.collection("mod_files").insertMany(files);

  console.log(`Created ${files.length} mod files`);
}
