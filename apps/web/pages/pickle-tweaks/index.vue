<template>
  <ModPage :mod="mod">
    <div class="container relative flex flex-col my-8 gap-8 z-10">
      <KeyFeatures
        title="Key Features"
        subtitle="Vanilla++"
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

const mod = useMod("pickletweaks");

const features = ref([
  {
    title: "Tool Enhancements",
    description: [
      "With Pickle Tweaks, you can repair your tools using their corresponding repair materials right from the crafting grid!",
      "To coincide with this method of simple repair, your tools will now become ineffective right before breaking. This makes it so you don't have to worry about breaking your tools before repairing them.",
      "Tools also show their mining level and mining speed in their tooltips. Bows show the amount of valid ammo in the players inventory."
    ]
  },
  {
    title: "New Tools",
    description: [
      "Paxels are a 3-in-1 tool made from a Pickaxe, Axe and Shovel. Create Paxels using the materials from Mystical Agriculture and gain additional efficiency.",
      "Sickles allow you to harvest plant-material blocks in an AOE.",
      "Scythes are an AOE weapon and can be used to right-click harvest crops in an area."
    ]
  },
  {
    title: "Watering Cans",
    description: [
      "Watering Cans increase crop growth speed.",
      "Pickle Tweaks comes with a regular watering can (3x3) and a reinforced watering can (7x7)."
    ]
  },
  {
    title: "Utility Baubles",
    description: [
      "Use the Magnet to automatically pick up items and experience orbs around you. You can toggle the magnet on and off by right clicking it in your hand or in your inventory.",
      "Equip Night Vision Goggles to gain night vision."
    ]
  },
  {
    title: "Right Click Harvest",
    description: ["Right click crops to harvest them."]
  },
  {
    title: "And More!",
    description: [
      "Use excess Diamonds and Emeralds to craft different Apples to gain buffs.",
      "Split your Coal and Charcoal into pieces for increased efficiency."
    ]
  }
]);
</script>
