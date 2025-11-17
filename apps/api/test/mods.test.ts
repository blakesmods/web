import { Collections, Mod, ModFile } from "@blakesmods/db";
import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { app } from "../src/app";

beforeAll(async () => app.ready());
afterAll(async () => app.close());

describe("GET /v2/mods", () => {
  test("valid request", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/v2/mods"
    });

    expect(response.statusCode).toBe(200);

    const body = response.json();

    expect(body).toHaveProperty("data");
  });
});

describe("GET /v2/mods/:mod_id", () => {
  test("valid request", async () => {
    const db = app.mongo.db!;
    const mod = await db.collection<Mod>(Collections.Mods).findOne();

    const response = await app.inject({
      method: "GET",
      url: `/v2/mods/${mod!.mod_id}`
    });

    expect(response.statusCode).toBe(200);

    const body = response.json();

    expect(body).toHaveProperty("data.mod_id", mod!.mod_id);
  });

  test("invalid mod_id", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/v2/mods/invalid"
    });

    expect(response.statusCode).toBe(404);
  });
});

describe("GET /v2/mods/:mod_id/files", () => {
  test("valid request", async () => {
    const db = app.mongo.db!;
    const mod = await db.collection<Mod>(Collections.Mods).findOne();

    const response = await app.inject({
      method: "GET",
      url: `/v2/mods/${mod!.mod_id}/files`
    });

    expect(response.statusCode).toBe(200);

    const body = response.json();

    expect(body).toHaveProperty("data");
  });

  test("invalid mod_id", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/v2/mods/invalid/files"
    });

    expect(response.statusCode).toBe(404);
  });
});

describe("GET /v2/mods/:mod_id/:mc_version_group/updates", () => {
  test("valid request", async () => {
    const db = app.mongo.db!;
    const mod = await db.collection<Mod>(Collections.Mods).findOne();
    const file = await db.collection<ModFile>(Collections.ModFiles).findOne({
      mod_id: mod!.mod_id
    });

    const response = await app.inject({
      method: "GET",
      url: `/v2/mods/${mod!.mod_id}/${file!.mc_version_group}/updates`
    });

    expect(response.statusCode).toBe(200);

    const body = response.json();

    expect(body).toHaveProperty("homepage");
    expect(body).toHaveProperty("promos");
    expect(body).toHaveProperty(file!.mc_version);
    expect(body).toHaveProperty(file!.mc_version_group);
  });

  test("invalid mod_id", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/v2/mods/invalid/1.18/updates"
    });

    expect(response.statusCode).toBe(404);
  });
});
