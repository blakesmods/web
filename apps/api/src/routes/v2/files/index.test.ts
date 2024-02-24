import { unstable_dev, UnstableDevWorker } from "wrangler";
import { describe, expect, it, beforeAll, afterAll } from "vitest";

describe("files", () => {
  let worker: UnstableDevWorker;

  beforeAll(async () => {
    worker = await unstable_dev("src/index.ts", {
      experimental: { disableExperimentalWarning: true }
    });
  });

  afterAll(async () => {
    await worker.stop();
  });

  it("should return /files/:file_id response", async () => {
    const file = await fetchFirstFile(worker);

    const resp = await worker.fetch(`/v2/files/${file._id}`);
    const json: any = await resp.json();

    expect(resp.status).toBe(200);
    expect(json.success).toBe(true);
    expect(json.data.url).toBeTruthy();
  });
});

async function fetchFirstFile(worker: UnstableDevWorker) {
  const resp = await worker.fetch("/v2/mods/mysticalagriculture/files");
  const json: any = await resp.json();

  return json.data.files[0];
}
