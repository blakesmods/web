import { RouteHandler } from "itty-router";
import { App as RealmApp, Credentials, User as RealmUser } from "realm-web";

let Realm: RealmApp;

export const DatabaseMiddleware: RouteHandler<CustomRequest> = async (
  request,
  env
) => {
  Realm = Realm || new RealmApp({ id: env.REALM_APP_ID });

  let user: RealmUser;

  if (!Realm.currentUser?.isLoggedIn) {
    const credentials = Credentials.apiKey(env.REALM_API_KEY);

    user = await Realm.logIn(credentials);
  } else {
    user = Realm.currentUser;
  }

  const client = user.mongoClient("mongodb-atlas");

  request.db = client.db("blakesmods");
};
