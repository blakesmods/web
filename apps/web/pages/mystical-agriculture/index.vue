<template>
  <ModPage :mod="mod">
    <div class="container relative flex flex-col my-8 gap-8 z-10">
      <div class="text-center">
        <span
          class="text-[24px] font-semibold"
          :style="{ color: mod.primary_color }"
        >
          Key Features
        </span>
        <h2>Resource Collection Reimagined</h2>
      </div>

      <KeyFeatures id="features" class="scroll-mt-60" :features="features" />
      <FeatureCarousel />
    </div>
  </ModPage>
</template>

<script setup>
import ModPage from "~/components/pages/ModPage.vue";
import KeyFeatures from "~/components/mods/KeyFeatures.vue";
import FeatureCarousel from "~/components/mods/FeatureCarousel.vue";

definePageMeta({
  layout: "mods"
});

const mod = useMod("mysticalagriculture");

const features = ref([
  {
    image: null,
    title: "Grow Your Resources",
    description: [
      "The main purpose of Mystical Agriculture is to provide an alternative form of resource collection.",
      "Mystical Agriculture adds more then 150+ unique crops to Minecraft; such as Coal, Iron, Diamond, Creeper and so many more!"
    ]
  },
  {
    title: "Tools & Armor",
    description: [
      "Essences can be used to create better tools and armor. They can also be upgraded with additional abilities like jump boost, strength, flight and wither resistance using Augments!",
      "Upgrade your gear even further to Awakened Supremium tier! Enjoy benefits like even greater stats and additional Augment slots."
    ]
  },
  {
    title: "Growth Speed",
    description: [
      "Water your crops manually with a Watering Can to substantially increase crop growth rates.",
      "Stack Growth Accelerators underneath your crops to increase their growth rate."
    ]
  },
  {
    title: "Farming Improvements",
    description: [
      "Harvest large areas of crops in one fell swoop using a Scythe.",
      "Automatically harvest a field of crops using a Harvester."
    ]
  },
  {
    title: "Essence Furnaces",
    description: [
      "Use your extra essences to create furnaces with increased speed and fuel efficiency."
    ]
  },
  {
    title: "Enchanter",
    description: ["Coming Soon!"]
  }
]);
</script>
