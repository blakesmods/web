import { MongoClient } from "mongodb";
import { createModFiles } from "./mod_files";
import { createModStats } from "./mod_stats";
import { createMods } from "./mods";

async function main() {
  const client = new MongoClient("mongodb://root:example@localhost:27017");
  const mongo = await client.connect();
  const db = mongo.db("blakesmods");

  console.log("Running database seeder...");

  await createMods(db);
  await createModFiles(db);
  await createModStats(db);

  await client.close();

  console.log("Database seeder complete");
}

main()
  .catch(console.error)
  .finally(() => process.exit());
