import { PageViews } from "@blakesmods/db";
import dayjs from "dayjs";
import { Router } from "itty-router";
import { App as RealmApp, Credentials } from "realm-web";
import { Env } from ".";

const router = Router();

let Realm: RealmApp;

router.get("/banners/:mod_id", async ({ params, query }, env: Env) => {
  const source = query.source;
  if (!source) {
    return new Response("Missing `source` query parameter.", { status: 400 });
  }

  if (source !== "curseforge" && source !== "modrinth") {
    return new Response("`source` must be one of `curseforge` or `modrinth`", {
      status: 400
    });
  }

  const mod_id = params.mod_id;

  Realm = Realm || new RealmApp(env.REALM_APP_ID);

  try {
    const credentials = Credentials.apiKey(env.REALM_API_KEY);
    const user = await Realm.logIn(credentials);
    const client = user.mongoClient("mongodb-atlas");

    await client
      .db("blakesmods")
      .collection<PageViews>("page_views")
      .updateOne(
        { mod_id: mod_id },
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

router.all("*", () => new Response("Not Found.", { status: 404 }));

export default router;