<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <NuxtLink
      v-for="mod in mods"
      class="group"
      :to="mod.disabled ? '/wiki' : `/wiki/${mod.path}`"
      :key="mod.path"
    >
      <Card class="transition hover:scale-105 active:scale-100">
        <template #content>
          <div class="flex gap-4 mr-4">
            <img :src="mod.icon" class="w-16 h-16" />
            <div class="flex flex-col justify-center">
              <h2
                class="text-lg sm:text-2xl group-hover:underline underline-offset-4"
              >
                {{ mod.title }}
              </h2>
              <span v-if="mod.disabled" class="text-surface-text/80">
                Coming soon
              </span>
              <span v-else class="text-surface-text/80">
                Click to view articles
              </span>
            </div>
          </div>
        </template>
      </Card>
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
    icon: "/img/logo/ironjetpacks_logo.png",
    disabled: true
  },
  {
    title: "Pickle Tweaks",
    path: "pickletweaks",
    icon: "/img/logo/pickletweaks_logo.png",
    disabled: true
  },
  {
    title: "Mystical Agradditions",
    path: "mysticalagradditions",
    icon: "/img/logo/mysticalagradditions_logo.png",
    disabled: true
  },
  {
    title: "Extended Crafting",
    path: "extendedcrafting",
    icon: "/img/logo/extendedcrafting_logo.png",
    disabled: true
  },
  {
    title: "More Buckets",
    path: "morebuckets",
    icon: "/img/logo/morebuckets_logo.png",
    disabled: true
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
    icon: "/img/logo/cucumber_logo.png",
    disabled: true
  }
]);
</script>
