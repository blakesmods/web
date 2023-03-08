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
      "More buckets adds more buckets to Minecraft made of different materials with different capacities. While a regular bucket can hold 1 bucket worth of fluid, the Diamond bucket can hold 8. The how is unknown at this time."
    ]
  },
  {
    title: "Usable in Recipes",
    description: [
      "The buckets added by this mod can be used in crafting recipes in place of regular buckets. With the added capacity, crafting using fluids is now much easier."
    ]
  },
  {
    title: "Universal Fluid Container",
    description: [
      "The buckets in this mod can be used as a fluid tank and are compatible with any Forge fluid handlers."
    ]
  }
]);
</script>
