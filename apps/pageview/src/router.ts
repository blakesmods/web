import { PageViews } from "@blakesmods/db";
import dayjs from "dayjs";
import { error, Router } from "itty-router";
import { App as RealmApp, Credentials } from "realm-web";
import { Env } from ".";

const router = Router();

let Realm: RealmApp;

router.get("/banners/:mod_id", async ({ params, query }, env: Env) => {
  const source = query.source;
  if (!source) {
    return error(400, "Missing `source` query parameter.");
  }

  if (source !== "curseforge" && source !== "modrinth") {
    return error(400, "`source` must be one of `curseforge` or `modrinth`");
  }

  const mod_id = params.mod_id;

  Realm = Realm || new RealmApp(env.REALM_APP_ID);

  try {
    const user = await getRealmUser(env);
    const client = user.mongoClient("mongodb-atlas");

    await client
      .db("blakesmods")
      .collection<PageViews>("page_views")
      .updateOne(
        { mod_id },
        {
          $inc: {
            [`${source}.${dayjs().format("YYYY.M.D")}`]: 1
          }
        },
        { upsert: true }
      );
  } catch (e) {
    console.error(e);
  }

  return Response.redirect(
    `https://blakesmods.com/img/banner/${mod_id}_title.png`,
    301
  );
});

router.all("*", () => error(404));

async function getRealmUser(env: Env) {
  if (!Realm.currentUser?.isLoggedIn) {
    const credentials = Credentials.apiKey(env.REALM_API_KEY);
    return await Realm.logIn(credentials);
  }

  return Realm.currentUser;
}

export default router;
