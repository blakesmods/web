import { Collections, PageViews } from "@blakesmods/db";
import dayjs from "dayjs";
import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { app } from "../src/app";

beforeAll(async () => await app.ready());
afterAll(async () => await app.close());

describe("GET /banners/:mod_id", () => {
  test("valid request", async () => {
    const db = app.mongo.db!;
    let views = await db.collection<PageViews>(Collections.PageViews).findOne({
      mod_id: "mysticalagriculture"
    });

    const date = dayjs();
    const day = date.date();
    const month = date.month() + 1;
    const year = date.year();

    const oldViews = views?.["curseforge"]?.[year]?.[month]?.[day] ?? 0;

    const response = await app.inject({
      method: "GET",
      url: "/banners/mysticalagriculture?source=curseforge"
    });

    views = await db.collection<PageViews>(Collections.PageViews).findOne({
      mod_id: "mysticalagriculture"
    });

    const currentViews = views!["curseforge"][year][month][day];

    expect(response.statusCode).toBe(301);
    expect(currentViews).toBe(oldViews + 1);
  });

  test("missing mod_id", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/banners"
    });

    expect(response.statusCode).toBe(404);
  });

  test("missing source", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/banners/mysticalagriculture"
    });

    expect(response.statusCode).toBe(400);
    expect(response.body).toContain("Missing `source` query parameter.");
  });

  test("invalid mod_id", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/banners/invalid?source=curseforge"
    });

    expect(response.statusCode).toBe(404);
    expect(response.body).toContain("not found");
  });

  test("invalid source", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/banners/mysticalagriculture?source=invalid"
    });

    expect(response.statusCode).toBe(400);
    expect(response.body).toContain(
      "The `source` query parameter must be one of `curseforge` or `modrinth`"
    );
  });
});
