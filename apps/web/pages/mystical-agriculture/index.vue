<template>
  <ModPage :mod="mod">
    <div class="container relative flex flex-col my-8 gap-8 z-10">
      <KeyFeatures
        title="Key Features"
        subtitle="Resource Collection Reimagined"
        :features="features"
      />
      <FeatureCarousel
        v-if="false"
        title="Addons"
        subtitle="We're Just Getting Started"
        description="Install these additional addons for more features and functions."
        :features="addons"
      />
      <ScreenshotCarousel
        v-if="false"
        title="Screenshots"
        subtitle="Take A Closer Look"
        :screenshots="screenshots"
      />
    </div>
  </ModPage>
</template>

<script setup>
import ModPage from "~/components/pages/ModPage.vue";
import KeyFeatures from "~/components/mods/KeyFeatures.vue";
import FeatureCarousel from "~/components/mods/FeatureCarousel.vue";
import ScreenshotCarousel from "~/components/mods/ScreenshotCarousel.vue";

definePageMeta({
  layout: "mods"
});

const mod = useMod("mysticalagriculture");

const features = ref([
  {
    title: "Grow Your Resources",
    description: [
      "Mystical Agriculture adds more then 130+ resource unique crops to Minecraft; such as Coal, Iron, Diamond, Skeleton and so many more!"
    ],
    images: [
      "/assets/mysticalagriculture/items/diamond_essence.png",
      "/assets/mysticalagriculture/items/diamond_seeds.png"
    ],
    link: "/wiki/mysticalagriculture/items/resource-seeds"
  },
  {
    title: "Tools & Armor",
    description: [
      "Create more powerful tools and armor using Essences. Upgrade your gear with greater abilities using Augments."
    ],
    images: [
      "/assets/mysticalagriculture/items/inferium_pickaxe.png",
      "/assets/mysticalagriculture/items/inferium_helmet.png"
    ],
    link: "/wiki/mysticalagriculture/items/essence-armor"
  },
  {
    title: "Growth Speed",
    description: [
      "Water your crops manually with a Watering Can to substantially increase crop growth rates.",
      "Stack Growth Accelerators underneath your crops to passively increase their growth rate."
    ],
    images: [
      "/assets/mysticalagriculture/items/watering_can.png",
      "/assets/mysticalagriculture/blocks/inferium_growth_accelerator.png"
    ],
    link: "/wiki/mysticalagriculture/blocks/growth-accelerators"
  },
  {
    title: "Farming Improvements",
    description: [
      "Harvest large areas of crops in one fell swoop using a Scythe.",
      "Automatically harvest a field of crops using a Harvester."
    ],
    images: [
      "/assets/mysticalagriculture/items/diamond_scythe.png",
      "/assets/mysticalagriculture/blocks/harvester.png"
    ],
    link: "/wiki/mysticalagriculture/blocks/harvester"
  },
  {
    title: "Improved Processing",
    description: [
      "Create upgradable Furnaces and Seed Reprocessors for increased speed and fuel efficiency."
    ],
    images: [
      "/assets/mysticalagriculture/blocks/furnace.png",
      "/assets/mysticalagriculture/blocks/seed_reprocessor.png"
    ],
    link: "/wiki/mysticalagriculture/blocks/furnace"
  },
  {
    title: "Enchanter",
    description: [
      "Enchant your tools, armor or books with crafting materials and Experience Essence."
    ],
    images: ["/assets/mysticalagriculture/blocks/enchanter.png"],
    link: "/wiki/mysticalagriculture/blocks/enchanter"
  }
]);

const addons = ref([
  {
    title: "Mystical Agradditions",
    description: [
      "Mystical Agradditions adds tier 6 crops, Paxels, and Tinkers' construct integration."
    ]
  },
  {
    title: "Mystical Customization",
    description: [
      "Make use of Mystical Customization to add new crops as well as modify existing crops."
    ]
  }
]);

const screenshots = ref([
  {
    title: "Test Screenshot",
    description: ["Test Description"],
    image: "/img/hero/mysticalagriculture-hero.png"
  },
  {
    title: "Test Screenshot",
    description: ["Test Description"],
    image: "/img/hero/mysticalagriculture-hero.png"
  },
  {
    title: "Test Screenshot",
    description: ["Test Description"],
    image: "/img/hero/mysticalagriculture-hero.png"
  }
]);
</script>
