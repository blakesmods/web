import { Collections, Mod, ModFile, ModStats } from "@blakesmods/db";
import dayjs from "dayjs";
import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { app } from "../src/app";

beforeAll(async () => app.ready());
afterAll(async () => app.close());

describe("GET /v2/files/:file_id", () => {
  test("valid request", async () => {
    const db = app.mongo.db!;
    let file = await db.collection<ModFile>(Collections.ModFiles).findOne();
    let mod = await db.collection<Mod>(Collections.Mods).findOne({
      mod_id: file!.mod_id
    });
    let stats = await db.collection<ModStats>(Collections.ModStats).findOne({
      mod_id: file!.mod_id
    });

    const date = dayjs();
    const year = date.year();
    const month = date.month() + 1;
    const day = date.date();

    const oldModSiteDownloads = mod!.site_downloads;
    const oldFileSiteDownloads = file!.site_downloads;
    const oldStatsDownloads = stats!.downloads?.[year]?.[month]?.[day] ?? 0;

    const response = await app.inject({
      method: "GET",
      url: `/v2/files/${file!._id}`
    });

    file = await db.collection<ModFile>(Collections.ModFiles).findOne({
      _id: file!._id
    });
    mod = await db.collection<Mod>(Collections.Mods).findOne({
      mod_id: file!.mod_id
    });
    stats = await db.collection<ModStats>(Collections.ModStats).findOne({
      mod_id: file!.mod_id
    });

    const newStatsDownloads = stats!.downloads[year][month][day];

    expect(response.statusCode).toBe(200);
    expect(file!.site_downloads).toBe(oldFileSiteDownloads + 1);
    expect(mod!.site_downloads).toBe(oldModSiteDownloads + 1);
    expect(newStatsDownloads).toBe(oldStatsDownloads + 1);

    const body = response.json();

    expect(body).toHaveProperty("data.url");
  });

  test("missing file_id", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/v2/files"
    });

    expect(response.statusCode).toBe(404);
  });

  test("invalid file_id", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/v2/files/invalid"
    });

    expect(response.statusCode).toBe(404);
  });
});

describe("GET /v2/files/:file_id/info", () => {
  test("valid request", async () => {
    const db = app.mongo.db!;
    const file = await db.collection<ModFile>(Collections.ModFiles).findOne();

    const response = await app.inject({
      method: "GET",
      url: `/v2/files/${file!._id}/info`
    });

    expect(response.statusCode).toBe(200);

    const body = response.json();

    expect(body).toHaveProperty("data._id", file!._id.toString());
  });

  test("invalid file_id", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/v2/files/invalid/info"
    });

    expect(response.statusCode).toBe(404);
  });
});
