import { unstable_dev, UnstableDevWorker } from "wrangler";
import { describe, expect, it, beforeAll, afterAll } from "vitest";

describe("mods", () => {
  let worker: UnstableDevWorker;

  beforeAll(async () => {
    worker = await unstable_dev("src/index.ts", {
      experimental: { disableExperimentalWarning: true }
    });
  });

  afterAll(async () => {
    await worker.stop();
  });

  it("should return /mods response", async () => {
    const resp = await worker.fetch("/v2/mods");
    const json: any = await resp.json();

    expect(resp.status).toBe(200);
    expect(json.success).toBe(true);
    expect(json.data.mods).toBeTruthy();
  });

  it("should return /mods/:mod_id response", async () => {
    const resp = await worker.fetch("/v2/mods/mysticalagriculture");
    const json: any = await resp.json();

    expect(resp.status).toBe(200);
    expect(json.success).toBe(true);
    expect(json.data.mod_id).toBe("mysticalagriculture");
    expect(json.data.versions).toBeTruthy();
    expect(json.data.latest_release).toBeDefined();
  });

  it("should return /mods/:mod_id/files response", async () => {
    const resp = await worker.fetch("/v2/mods/mysticalagriculture/files");
    const json: any = await resp.json();

    expect(resp.status).toBe(200);
    expect(json.success).toBe(true);
    expect(json.data.files).toBeTruthy();
    expect(json.data.count).toBeGreaterThanOrEqual(0);
    expect(json.data.mc_versions).toBeTruthy();
    expect(json.data.mod_loaders).toBeTruthy();
  });
});
