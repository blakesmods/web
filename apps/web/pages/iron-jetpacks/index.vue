<template>
  <ModPage :mod="mod">
    <div class="container relative flex flex-col my-8 gap-8 z-10">
      <KeyFeatures
        title="Key Features"
        subtitle="Fly To New Heights"
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

const mod = useMod("ironjetpacks");

const features = ref([
  {
    title: "Jetpacks Redefined",
    description: [
      "Iron Jetpacks is a Minecraft mod focused entirely on adding simple and easy to use jetpacks."
    ]
  },
  {
    title: "Fully Customizable",
    description: [
      "All jetpack values can be tweaked to your liking using the jetpack JSON files. You can even add entirely new jetpacks, or remove the ones you don't need."
    ]
  },
  {
    title: "Throttle Controls",
    description: [
      "You can change the flight speed of your jetpack on the fly! Use the Increase/Decrease throttle keybind to change your jetpack's movement speed."
    ]
  },
  {
    title: "Intuitive Display",
    description: [
      "View your jetpacks energy, throttle, engine and hover status quickly using the in-game HUD."
    ]
  },
  {
    title: "Curios Integration",
    description: [
      "With Curios installed, your jetpack can be equipped as a Curio."
    ]
  },
  {
    title: "Powered by Forge Energy",
    description: [
      "Jetpacks are fueled using Forge Energy (FE). This means that jetpacks can be charged using other mods chargers."
    ]
  }
]);
</script>
