import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { app } from "../src/app";

beforeAll(async () => await app.ready());
afterAll(async () => await app.close());

describe("GET /v2/badges/:mod_id/downloads", () => {
  test("valid request", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/v2/badges/mysticalagriculture/downloads"
    });

    expect(response.statusCode).toBe(200);

    const body = response.json();

    expect(body).toHaveProperty("label", "downloads");
  });

  test("invalid mod_id", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/v2/badges/invalid/downloads"
    });

    expect(response.statusCode).toBe(200);

    const body = response.json();

    expect(body).toHaveProperty("message", "invalid mod provided");
    expect(body).toHaveProperty("isError", true);
  });
});

describe("GET /v2/badges/:mod_id/version", () => {
  test("valid request", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/v2/badges/mysticalagriculture/version"
    });

    expect(response.statusCode).toBe(200);

    const body = response.json();

    expect(body).toHaveProperty("label", "version");
  });

  test("invalid mod_id", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/v2/badges/invalid/version"
    });

    expect(response.statusCode).toBe(200);

    const body = response.json();

    expect(body).toHaveProperty("message", "invalid mod provided");
    expect(body).toHaveProperty("isError", true);
  });
});

describe("GET /v2/badges/:mod_id/mc_version", () => {
  test("valid request", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/v2/badges/mysticalagriculture/mc_version"
    });

    expect(response.statusCode).toBe(200);

    const body = response.json();

    expect(body).toHaveProperty("label", "minecraft");
  });

  test("invalid mod_id", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/v2/badges/invalid/mc_version"
    });

    expect(response.statusCode).toBe(200);

    const body = response.json();

    expect(body).toHaveProperty("message", "invalid mod provided");
    expect(body).toHaveProperty("isError", true);
  });
});
