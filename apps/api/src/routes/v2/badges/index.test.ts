import { unstable_dev, UnstableDevWorker } from "wrangler";
import { describe, expect, it, beforeAll, afterAll } from "vitest";

describe("badges", () => {
  let worker: UnstableDevWorker;

  beforeAll(async () => {
    worker = await unstable_dev("src/index.ts", {
      experimental: { disableExperimentalWarning: true }
    });
  });

  afterAll(async () => {
    await worker.stop();
  });

  it("should return /badges/:mod_id/downloads response", async () => {
    const resp = await worker.fetch("/v2/badges/mysticalagriculture/downloads");
    const json: any = await resp.json();

    expect(resp.status).toBe(200);
    expect(json.schemaVersion).toBe(1);
    expect(json.label).toBe("downloads");
    expect(json.message).toBeTruthy();
  });

  it("should return /badges/:mod_id/version response", async () => {
    const resp = await worker.fetch("/v2/badges/mysticalagriculture/version");
    const json: any = await resp.json();

    expect(resp.status).toBe(200);
    expect(json.schemaVersion).toBe(1);
    expect(json.label).toBe("version");
    expect(json.message).toBeTruthy();
  });

  it("should return /badges/:mod_id/mc_version response", async () => {
    const resp = await worker.fetch(
      "/v2/badges/mysticalagriculture/mc_version"
    );
    const json: any = await resp.json();

    expect(resp.status).toBe(200);
    expect(json.schemaVersion).toBe(1);
    expect(json.label).toBe("version");
    expect(json.message).toBeTruthy();
  });
});
