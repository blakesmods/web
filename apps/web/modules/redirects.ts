import { defineNuxtModule, extendRouteRules } from "nuxt/kit";

const redirects = {
  "/mods": "/",

  "/docs/mysticalagriculture/crafttweaker/infusion-recipes":
    "/docs/mysticalagriculture/infusion-recipes",
  "/docs/mysticalagriculture/crafttweaker/reprocessor-recipes":
    "/docs/mysticalagriculture/reprocessor-recipes",
  "/docs/extendedcrafting/crafttweaker/combination-recipes":
    "/docs/extendedcrafting/combination-recipes",
  "/docs/extendedcrafting/crafttweaker/table-recipes":
    "/docs/extendedcrafting/table-recipes",
  "/docs/extendedcrafting/crafttweaker/compression-recipes":
    "/docs/extendedcrafting/compression-recipes",
  "/docs/extendedcrafting/crafttweaker/ender-crafting-recipes":
    "/docs/extendedcrafting/ender-crafting-recipes",
  "/docs/extendedcrafting/adding-singularities":
    "/docs/extendedcrafting/singularities",
  "/docs/extendedcrafting/removing-singularities":
    "/docs/extendedcrafting/singularities",
  "/docs/extendedcrafting/singularities-in-recipes":
    "/docs/extendedcrafting/singularities",

  "/guides": "/wiki",
  "/guides/mysticalagriculture": "/wiki/mysticalagriculture",
  "/guides/mysticalagriculture/gameplay/getting-started":
    "/wiki/mysticalagriculture/guides/getting-started",
  "/guides/mysticalagriculture/gameplay/creating-seeds":
    "/wiki/mysticalagriculture/guides/creating-seeds",
  "/guides/mysticalagriculture/gameplay/collecting-mob-souls":
    "/wiki/mysticalagriculture/guides/collecting-mob-souls",
  "/guides/mysticalagriculture/gameplay/speeding-up-crop-growth":
    "/wiki/mysticalagriculture/guides/speeding-up-crop-growth",
  "/guides/mysticalagriculture/gameplay/upgrading-essence-gear":
    "/wiki/mysticalagriculture/guides/upgrading-essence-gear",

  "/wiki/mysticalagriculture/items/watering-can":
    "/wiki/mysticalagriculture/items/watering-cans"
};

export default defineNuxtModule({
  meta: {
    name: "Redirects"
  },
  setup() {
    for (const redirect of Object.entries(redirects)) {
      extendRouteRules(redirect[0], {
        redirect: {
          to: redirect[1],
          statusCode: 301
        }
      });
    }
  }
});
