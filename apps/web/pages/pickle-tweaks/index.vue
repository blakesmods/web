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
      "Repair your tools directly in your crafting grid.",
      "Your tools will become ineffective right before breaking, allowing for quick repairs."
    ],
    images: ["/assets/pickletweaks/items/emerald_pickaxe.png"],
    link: "/wiki/pickletweaks/features/crafting-grid-tool-repair"
  },
  {
    title: "New Tools",
    description: [
      "Paxels are a 3-in-1 tool made from a Pickaxe, Axe and Shovel.",
      "Sickles allow you to harvest plant-material blocks in an AOE, and Scythes are an AOE weapon that can harvest crops in an area."
    ],
    images: [
      "/assets/pickletweaks/items/diamond_paxel.png",
      "/assets/pickletweaks/items/diamond_sickle.png",
      "/assets/pickletweaks/items/diamond_scythe.png"
    ],
    link: "/wiki/pickletweaks/items/paxels"
  },
  {
    title: "Watering Cans",
    description: [
      "Watering Cans increase crop growth speed.",
      "Pickle Tweaks comes with a basic Watering Can (3x3) as well as a Reinforced Watering Can (7x7)."
    ],
    images: [
      "/assets/pickletweaks/items/watering_can.png",
      "/assets/pickletweaks/items/reinforced_watering_can.png"
    ],
    link: "/wiki/pickletweaks/items/watering-cans"
  },
  {
    title: "Utility Baubles",
    description: [
      "Use the Magnet to automatically pick up items and Experience Orbs around you.",
      "Equip Night Vision Goggles to gain night vision."
    ],
    images: [
      "/assets/pickletweaks/items/magnet.png",
      "/assets/pickletweaks/items/night_vision_goggles.png"
    ],
    link: "/wiki/pickletweaks/items/magnet"
  },
  {
    title: "Right Click Harvest",
    description: ["Right click crops to harvest them."],
    images: ["/assets/pickletweaks/items/emerald_hoe.png"],
    link: "/wiki/pickletweaks/features/right-click-harvest"
  },
  {
    title: "And More!",
    description: [
      "Use excess Diamonds and Emeralds to craft different Apples to gain buffs.",
      "Split your Coal and Charcoal into pieces for increased efficiency."
    ],
    images: [
      "/assets/pickletweaks/items/diamond_apple.png",
      "/assets/pickletweaks/items/coal_piece.png"
    ],
    link: "/wiki/pickletweaks"
  }
]);
</script>
