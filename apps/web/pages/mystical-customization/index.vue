<template>
  <ModPage :mod="mod">
    <div class="container relative flex flex-col my-8 gap-8 z-10">
      <KeyFeatures
        title="Key Features"
        subtitle="Make It Yours"
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

const mod = getMod("mysticalcustomization");

const features = ref([
  {
    title: "Grow Custom Resources",
    description: [
      "Use Mystical Customization to add new Crops, Crop Tiers, Crop Types or Mob Soul Types to the game!"
    ],
    images: ["/assets/mysticalagriculture/v2/items/mystical_seeds.png"]
  },
  {
    title: "Make It Your Own",
    description: [
      "Mystical Customization can also be used to edit Crops, Crop Tiers, Crop Types or Mob Soul Types."
    ],
    images: ["/assets/mysticalagriculture/v2/items/essence_dust.png"]
  }
]);
</script>
