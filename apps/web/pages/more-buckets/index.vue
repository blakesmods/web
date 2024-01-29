<template>
  <ModPage :mod="mod">
    <div class="container relative flex flex-col my-8 gap-8 z-10">
      <KeyFeatures
        title="Key Features"
        subtitle="Unbelievably Deep Buckets"
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

const mod = useMod("morebuckets");

const features = ref([
  {
    title: "More Buckets",
    description: [
      "More Buckets adds more Buckets to Minecraft made of different materials with different capacities.",
      "While a regular Bucket can hold 1 bucket worth of fluid, the Diamond Bucket can hold 8!"
    ],
    images: ["/assets/morebuckets/items/diamond_bucket.png"],
    link: "/wiki/morebuckets/items/buckets"
  },
  {
    title: "Usable in Recipes",
    description: [
      "The Buckets added by this mod can be used in crafting recipes in place of regular Buckets. With the added capacity, crafting using fluids is now much easier."
    ],
    images: ["/assets/morebuckets/crafting_grid.png"],
    link: "/wiki/morebuckets/items/buckets"
  },
  {
    title: "Universal Fluid Container",
    description: [
      "The buckets in this mod can be used as a fluid tank and are compatible with any Forge fluid handlers."
    ],
    images: ["/assets/morebuckets/items/diamond_bucket_filled.png"],
    link: "/wiki/morebuckets/items/buckets"
  }
]);
</script>
