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

const mod = useMod("mysticalagradditions");

const features = ref([
  {
    title: "Insanium Essence",
    description: [
      "Insanium Essence is an additional tier above Supremium that can be used to craft higher end items such as Nether Star seeds."
    ]
  },
  {
    title: "Paxels",
    description: [
      "Paxels are a 3-in-1 tool made from a Pickaxe, Axe and Shovel. Create Paxels using the materials from Mystical Agriculture and gain additional efficiency.",
      "Pickaxe, Axe, and Shovel augments can be applied to Paxels."
    ]
  },
  {
    title: "Tinkers' Construct Integration",
    description: [
      "Mystical Agradditions adds support to Tinkers' Construct for Mystical Agriculture materials. Melt down Supremium Ingots in a Smeltery and pour out your new Pickaxe head."
    ]
  },
  {
    title: "Essence Coal",
    description: [
      "Make use of your extra essences to create coal with a longer burn time."
    ]
  }
]);
</script>
