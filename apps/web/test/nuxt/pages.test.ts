import { setup, fetch } from "@nuxt/test-utils";
import { describe, expect, test } from "vitest";

describe("pages", async () => {
  await setup({
    host: "http://localhost:3000"
  });

  describe("basic", () => {
    testURL("/");
    testURL("/cookie-policy");
    testURL("/privacy-policy");
    testURL("/terms-of-service");
  });

  const mods = getMods().toSorted((a, b) => a.url.localeCompare(b.url));

  describe("landing", () => {
    for (const mod of mods) {
      testURL(mod.url);
    }
  });

  describe("download", () => {
    for (const mod of mods) {
      testURL(`${mod.url}/download`);
    }
  });

  describe("wiki", () => {
    testURL("/wiki");
  });
});

function testURL(url: string) {
  test(`${url} renders`, async () => {
    const { status } = await fetch(url);
    expect(status).toBe(200);
  });
}
