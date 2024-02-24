import { IRequestStrict } from "itty-router";

declare global {
  import MongoDBDatabase = Realm.Services.MongoDBDatabase;

  type Env = {
    BLAKESMODS_MAVEN_URL: string;
    REALM_APP_ID: string;
    REALM_API_KEY: string;
  };

  type CustomRequest = {
    content?: any;
    db: MongoDBDatabase;
  } & IRequestStrict;
}
