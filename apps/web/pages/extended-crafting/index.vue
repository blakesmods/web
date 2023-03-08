<template>
  <ModPage :mod="mod">
    <div class="container relative flex flex-col my-8 gap-8 z-10">
      <KeyFeatures
        title="Key Features"
        subtitle="Pride and Accomplishment"
        :features="features"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <template #title>Singularities</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                Singularities are a high-tier crafting item created using the
                Quantum Compressor. Singularities are usually created by
                compressing thousands of a given item.
              </p>
              <img
                class="mx-auto"
                src="/img/landing/extendedcrafting-singularities.png"
              />
            </div>
          </template>
        </Card>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <template #title>Recipe Maker</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                The mod comes with an item called the Recipe Maker. This item
                allows you to very easily create the CraftTweaker script or
                Datapack json file for a table recipe.
              </p>
              <img
                class="mx-auto h-[150px]"
                src="/img/landing/extendedcrafting-recipe_maker.png"
              />
            </div>
          </template>
        </Card>
        <Card>
          <template #title>Handheld Crafting Table</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>A crafting table on a stick. Used for crafting on the go!</p>
              <img
                class="mx-auto h-[150px]"
                src="/img/landing/extendedcrafting-handheld_table.png"
              />
            </div>
          </template>
        </Card>
        <Card>
          <template #title>Guidebook</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                Extended Crafting adds a guide book using
                <a
                  href="https://www.curseforge.com/minecraft/mc-mods/patchouli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Patchouli.
                </a>
                This guide book explains how to use each of the crafting
                mechanisms from a players perspective.
              </p>
              <img
                class="mx-auto h-[150px]"
                src="/img/landing/extendedcrafting-guide.png"
              />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </ModPage>
</template>

<script setup>
import ModPage from "~/components/pages/ModPage.vue";
import KeyFeatures from "~/components/mods/KeyFeatures.vue";

definePageMeta({
  layout: "mods"
});

const mod = useMod("extendedcrafting");

const features = ref([
  {
    title: "Crafting Tables",
    description: [
      "Extended Crafting adds 4 tiers of crafting tables. 3x3, 5x5, 7x7, 9x9"
    ]
  },
  {
    title: "Combination Crafting",
    description: [
      "The Combination Crafting setup is a shapeless in-world crafting mechanism. Using a Crafting Core and up to 49 pedestals, you can make creating key-items more exciting."
    ]
  },
  {
    title: "Ender Crafting",
    description: [
      "The Ender Crafter is a 3x3 crafting table that takes time to craft. The amount of time required depends on the recipe and can be decreased by placing Ender Alternators."
    ]
  },
  {
    title: "Quantum Compressor",
    description: [
      "The Quantum Compressor is a high-tier FE-powered machine that can compress large amounts of a single item into a new item."
    ]
  }
]);
</script>
