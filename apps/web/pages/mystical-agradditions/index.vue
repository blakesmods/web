<template>
  <ModPage :mod="mod">
    <div class="container relative flex flex-col my-8 gap-8 z-10">
      <KeyFeatures
        title="Key Features"
        subtitle="Resource Collection Re-reimagined"
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

const mod = getMod("mysticalagradditions");

const features = ref([
  {
    title: "Insanium Essence",
    description: [
      "Insanium Essence is an additional tier above Supremium that can be used to craft higher tier items such as Nether Star seeds."
    ],
    images: ["/assets/mysticalagradditions/v2/items/insanium_essence.png"],
    link: "/wiki/mysticalagradditions/items/insanium-essence"
  },
  {
    title: "Essence Paxels",
    description: [
      "Paxels are a 3-in-1 tool made from a Pickaxe, Axe and Shovel.",
      "Pickaxe, Axe, and Shovel Augments can be applied to Paxels."
    ],
    images: ["/assets/mysticalagradditions/v2/items/inferium_paxel.png"],
    link: "/wiki/mysticalagradditions/items/essence-paxels"
  },
  {
    title: "Tinkers' Construct Integration",
    description: [
      "Mystical Agradditions adds support to Tinkers' Construct for Mystical Agriculture materials. Melt down Supremium Ingots in a Smeltery and pour out your new Pickaxe head!"
    ],
    images: [
      "/assets/mysticalagradditions/v2/items/supremium_tinkers_pickaxe.png"
    ],
    link: "/wiki/mysticalagradditions/features/tinkers-construct-integration"
  }
]);
</script>
