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
      "Iron Jetpacks is a Minecraft mod focused entirely on adding simple and easy to use Jetpacks."
    ],
    images: ["/img/landing/ironjetpacks/jetpack_icon.svg"],
    link: "/wiki/ironjetpacks/items/jetpacks"
  },
  {
    title: "Fully Customizable",
    description: [
      "All Jetpack values can be tweaked to your liking using the Jetpack JSON files. You can even add entirely new jetpacks, or remove the ones you don't need."
    ],
    images: ["/img/landing/ironjetpacks/code_icon.svg"],
    link: "/docs/ironjetpacks"
  },
  {
    title: "Throttle Controls",
    description: [
      "You can change the flight speed of your jetpack on the fly! Use the Increase/Decrease Throttle keybindings to change your Jetpack's movement speed."
    ],
    images: ["/img/landing/ironjetpacks/adjustments_icon.svg"],
    link: "/wiki/ironjetpacks/items/jetpacks"
  },
  {
    title: "Intuitive Display",
    description: [
      "View your Jetpacks energy, throttle, engine and hover status quickly using the in-game HUD."
    ],
    images: ["/img/landing/ironjetpacks/chart_icon.svg"],
    link: "/wiki/ironjetpacks/features/hud"
  },
  {
    title: "Curios Integration",
    description: [
      "With Curios installed, your Jetpack can be equipped as a Curio."
    ],
    images: ["/img/landing/ironjetpacks/curios_icon.svg"],
    link: "/wiki/ironjetpacks/items/jetpacks#curios-integration"
  },
  {
    title: "Powered by Forge Energy",
    description: [
      "Jetpacks are fueled using Forge Energy (FE). This means that Jetpacks can be charged using other mods chargers."
    ],
    images: ["/img/landing/ironjetpacks/forge_icon.svg"],
    link: "/wiki/ironjetpacks/items/jetpacks"
  }
]);
</script>
