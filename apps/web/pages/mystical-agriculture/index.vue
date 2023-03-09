<template>
  <ModPage :mod="mod">
    <div class="container relative flex flex-col my-8 gap-8 z-10">
      <KeyFeatures
        title="Key Features"
        subtitle="Resource Collection Reimagined"
        :features="features"
      />
      <FeatureCarousel
        v-if="isDev"
        title="Addons"
        subtitle="We're Just Getting Started"
        description="Install these additional addons for more features and functions."
        :features="addons"
      />
      <ScreenshotCarousel
        v-if="isDev"
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

const addons = ref([
  {
    title: "Mystical Agradditions",
    description: [
      "Mystical Agradditions adds tier 6 crops, paxels, and Tinkers' construct integration."
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
