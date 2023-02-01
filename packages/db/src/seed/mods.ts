import { Db, ObjectId } from "mongodb";
import { Mod } from "../models";

export async function createMods(db: Db) {
  const mods: Mod[] = [
    {
      _id: new ObjectId("61d8c93df6e987795c513b3f"),
      curseforge_downloads: 68855556,
      curseforge_id: 246640,
      curseforge_slug: "mystical-agriculture",
      mod_id: "mysticalagriculture",
      mod_name: "Mystical Agriculture",
      modrinth_downloads: 512,
      modrinth_id: "C95ReXie",
      modrinth_slug: "mystical-agriculture",
      site_downloads: 1055
    },
    {
      _id: new ObjectId("61d8c9d4f6e987795c513b40"),
      curseforge_downloads: 51286609,
      curseforge_id: 256247,
      curseforge_slug: "mystical-agradditions",
      mod_id: "mysticalagradditions",
      mod_name: "Mystical Agradditions",
      modrinth_downloads: 326,
      modrinth_id: "pl0jGXIx",
      modrinth_slug: "mystical-agradditions",
      site_downloads: 50
    },
    {
      _id: new ObjectId("61d8ca30f6e987795c513b41"),
      curseforge_downloads: 11232451,
      curseforge_id: 280441,
      curseforge_slug: "mystical-customization",
      mod_id: "mysticalcustomization",
      mod_name: "Mystical Customization",
      modrinth_downloads: 83,
      modrinth_id: "lNK9A4rh",
      modrinth_slug: "mystical-customization",
      site_downloads: 10
    },
    {
      _id: new ObjectId("61d8ca30f6e987795c513b42"),
      curseforge_downloads: 27458292,
      curseforge_id: 284497,
      curseforge_slug: "iron-jetpacks",
      mod_id: "ironjetpacks",
      mod_name: "Iron Jetpacks",
      modrinth_downloads: 172,
      modrinth_id: "DWIEOniQ",
      modrinth_slug: "iron-jetpacks",
      site_downloads: 21
    },
    {
      _id: new ObjectId("61d8ca30f6e987795c513b43"),
      curseforge_downloads: 22404777,
      curseforge_id: 238761,
      curseforge_slug: "pickle-tweaks",
      mod_id: "pickletweaks",
      mod_name: "Pickle Tweaks",
      modrinth_downloads: 224,
      modrinth_id: "J868sgbE",
      modrinth_slug: "pickle-tweaks",
      site_downloads: 12
    },
    {
      _id: new ObjectId("61d8ca31f6e987795c513b44"),
      curseforge_downloads: 24488048,
      curseforge_id: 268387,
      curseforge_slug: "extended-crafting",
      mod_id: "extendedcrafting",
      mod_name: "Extended Crafting",
      modrinth_downloads: 214,
      modrinth_id: "5JMG1gql",
      modrinth_slug: "extended-crafting",
      site_downloads: 37
    },
    {
      _id: new ObjectId("61d8ca31f6e987795c513b45"),
      curseforge_downloads: 6540547,
      curseforge_id: 298760,
      curseforge_slug: "more-buckets",
      mod_id: "morebuckets",
      mod_name: "More Buckets",
      modrinth_downloads: 46,
      modrinth_id: "WFpYC7WJ",
      modrinth_slug: "more-buckets",
      site_downloads: 17
    },
    {
      _id: new ObjectId("61d8ca31f6e987795c513b46"),
      curseforge_downloads: 71793960,
      curseforge_id: 272335,
      curseforge_slug: "cucumber",
      mod_id: "cucumber",
      mod_name: "Cucumber Library",
      modrinth_downloads: 500,
      modrinth_id: "Rw1NrDzF",
      modrinth_slug: "cucumber",
      site_downloads: 212
    }
  ];

  await db.collection("mods").deleteMany({});
  await db.collection("mods").insertMany(mods);

  console.log(`Created ${mods.length} mods`);
}
