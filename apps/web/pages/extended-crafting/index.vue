<template>
  <ModPage :mod="mod">
    <div class="container relative flex flex-col my-8 gap-8 z-10">
      <KeyFeatures
        title="Key Features"
        subtitle="Pride and Accomplishment"
        :features="features"
      />
    </div>
  </ModPage>
</template>

<script setup>
import ModPage from "~/components/pages/ModPage.vue";
import KeyFeatures from "~/components/mods/KeyFeatures.vue";

definePageMeta({
  layout: "mods"
});

const mod = getMod("extendedcrafting");

const features = ref([
  {
    title: "Crafting Tables",
    description: [
      "Extended Crafting adds 4 tiers of crafting tables. 3x3, 5x5, 7x7, 9x9"
    ],
    images: ["/assets/extendedcrafting/v2/blocks/ultimate_table.png"],
    link: "/wiki/extendedcrafting/blocks/crafting-tables"
  },
  {
    title: "Combination Crafting",
    description: [
      "The Combination Crafting setup is a shapeless in-world crafting mechanism. Using a Crafting Core and up to 49 Pedestals, you can make creating important items more exciting."
    ],
    images: ["/assets/extendedcrafting/v2/blocks/crafting_core.png"],
    link: "/wiki/extendedcrafting/blocks/crafting-core"
  },
  {
    title: "Ender Crafting",
    description: [
      "The Ender Crafter is a 3x3 crafting table that takes time to craft. Increase the crafting speed by placing Ender Alternators around it."
    ],
    images: ["/assets/extendedcrafting/v2/blocks/ender_crafter.png"],
    link: "/wiki/extendedcrafting/blocks/ender-crafter"
  },
  {
    title: "Quantum Compressor",
    description: [
      "The Quantum Compressor is a high-tier FE-powered machine that can compress large amounts of a single item into a new item."
    ],
    images: ["/assets/extendedcrafting/v2/blocks/compressor.png"],
    link: "/wiki/extendedcrafting/blocks/quantum-compressor"
  },
  {
    title: "Singularities",
    description: [
      "Singularities are a high-tier crafting item created using the Quantum Compressor. Singularities are usually created by compressing thousands of a given item."
    ],
    images: ["/assets/extendedcrafting/v2/items/emerald_singularity.png"],
    link: "/wiki/extendedcrafting/items/singularity"
  },
  {
    title: "Modpack Utilities",
    description: [
      "Use the Recipe Maker to very create the CraftTweaker script or Datapack json file for a table recipe in one click."
    ],
    images: ["/assets/extendedcrafting/v2/items/recipe_maker.png"],
    link: "/wiki/extendedcrafting/items/recipe-maker"
  }
]);
</script>
