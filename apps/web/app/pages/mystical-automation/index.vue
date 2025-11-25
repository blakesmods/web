<template>
  <ModPage :mod="mod">
    <div class="container relative flex flex-col my-8 gap-8 z-10">
      <KeyFeatures
        title="Key Features"
        subtitle="Resource Collection Automated"
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

const mod = getMod("mysticalautomation");

const features = ref([
  {
    title: "Infuser",
    description: [
      "Automatically infuse Essences together and select a tier to output."
    ],
    images: ["/assets/mysticalautomation/v1/blocks/infuser.png"],
    link: "/wiki/mysticalautomation/blocks/infuser"
  },
  {
    title: "Crafter",
    description: ["Automatically craft any crafting recipe using the Crafter."],
    images: ["/assets/mysticalautomation/v1/blocks/crafter.png"],
    link: "/wiki/mysticalautomation/blocks/crafter"
  },
  {
    title: "Farmer",
    description: ["Automatically plant, grow and harvest crops."],
    images: ["/assets/mysticalautomation/v1/blocks/farmer.png"],
    link: "/wiki/mysticalautomation/blocks/farmer"
  },
  {
    title: "Fertilizer",
    description: [
      "Automatically fertilize plants with fertilizers in an area."
    ],
    images: ["/assets/mysticalautomation/v1/blocks/fertilizer.png"],
    link: "/wiki/mysticalautomation/blocks/fertilizer"
  },
  {
    title: "Altarnators",
    description: [
      "Automatically craft Infusion and Awakening recipes with their respective Altarnator."
    ],
    images: ["/assets/mysticalautomation/v1/blocks/infusion_altarnator.png"],
    link: "/wiki/mysticalautomation/blocks/infusion-altarnator"
  },
  {
    title: "Enchanternator",
    description: [
      "Automatically craft Enchanter recipes using the Enchanternator."
    ],
    images: ["/assets/mysticalautomation/v1/blocks/enchanternator.png"],
    link: "/wiki/mysticalautomation/blocks/enchanternator"
  }
]);
</script>
