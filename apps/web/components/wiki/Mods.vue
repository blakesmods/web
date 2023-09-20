<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <NuxtLink
      v-for="mod in mods"
      class="group"
      :to="mod.disabled ? '/wiki' : `/wiki/${mod.path}`"
      :key="mod.path"
    >
      <UCard class="transition hover:scale-105 active:scale-100">
        <div class="flex gap-4 mr-4">
          <img :src="mod.icon" class="w-16 h-16" alt="" />
          <div class="flex flex-col justify-center gap-2">
            <h2
              class="text-lg sm:text-2xl group-hover:underline underline-offset-4"
            >
              {{ mod.title }}
            </h2>
            <span v-if="mod.disabled" class="opacity-80">Coming soon™</span>
            <span v-else class="opacity-80">Click to view articles</span>
          </div>
        </div>
      </UCard>
    </NuxtLink>
  </div>
</template>

<script setup>
const mods = ref([
  {
    title: "Mystical Agriculture",
    path: "mysticalagriculture",
    icon: "/img/logo/mysticalagriculture_logo.png"
  },
  {
    title: "Iron Jetpacks",
    path: "ironjetpacks",
    icon: "/img/logo/ironjetpacks_logo.png"
  },
  {
    title: "Pickle Tweaks",
    path: "pickletweaks",
    icon: "/img/logo/pickletweaks_logo.png"
  },
  {
    title: "Mystical Agradditions",
    path: "mysticalagradditions",
    icon: "/img/logo/mysticalagradditions_logo.png"
  },
  {
    title: "Extended Crafting",
    path: "extendedcrafting",
    icon: "/img/logo/extendedcrafting_logo.png"
  },
  {
    title: "More Buckets",
    path: "morebuckets",
    icon: "/img/logo/morebuckets_logo.png"
  },
  {
    title: "Mystical Customization",
    path: "mysticalcustomization",
    icon: "/img/logo/mysticalcustomization_logo.png",
    disabled: true
  },
  {
    title: "Cucumber Library",
    path: "cucumber",
    icon: "/img/logo/cucumber_logo.png"
  }
]);
</script>
