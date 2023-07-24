<template>
  <div class="flex flex-col items-center w-full gap-8">
    <div
      class="flex flex-col xl:flex-row w-full items-center xl:justify-between gap-8"
    >
      <div
        class="flex flex-col justify-center items-center xl:items-start gap-4"
      >
        <h1
          class="text-center xl:text-left xl:whitespace-nowrap text-[52px] uppercase"
        >
          {{ mod.name }}
        </h1>
        <h2 class="text-center text-2xl">{{ mod.tagline }}</h2>
        <UButton
          class="flex font-bold mt-4"
          size="xl"
          color="gray"
          trailing-icon="i-heroicons-arrow-right-solid"
          @click="$emit('learn-more')"
        >
          <strong>Learn More</strong>
        </UButton>
      </div>
      <div class="flex xl:max-w-[40%] xl:h-[550px] xl:items-center">
        <img :src="mod.hero_img" :alt="`${mod.name} hero image`" />
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row justify-between w-full p-[2px] rounded-lg gap-8 shadow"
      :style="{
        'background-image': `linear-gradient(270deg, ${mod.secondary_color} -12.17%, ${mod.primary_color} 114.78%)`
      }"
    >
      <div
        class="flex flex-wrap justify-around w-full p-10 gap-2 md:gap-4 bg-gray-200 dark:bg-gray-800 rounded-lg"
      >
        <div class="flex flex-col items-center">
          <Skeleton v-if="pending" width="100px" height="48px" />
          <h2 v-else :style="{ color: mod.primary_color }">{{ downloads }}+</h2>
          <span class="text-xl">Downloads</span>
        </div>
        <div class="flex flex-col items-center">
          <Skeleton v-if="pending" width="100px" height="48px" />
          <h2 v-else :style="{ color: mod.primary_color }">{{ relations }}+</h2>
          <span class="text-xl">Modpacks</span>
        </div>
        <div class="flex flex-col items-center">
          <Skeleton v-if="pending" width="100px" height="48px" />
          <h2 v-else :style="{ color: mod.primary_color }">
            {{ data.data.latest_release.mod_version }}
          </h2>
          <span class="text-xl">Latest Release</span>
        </div>
        <div class="flex flex-col items-center">
          <Skeleton v-if="pending" width="100px" height="48px" />
          <h2 v-else :style="{ color: mod.primary_color }">
            {{ data.data.latest_release.mc_version }}
          </h2>
          <span class="text-xl">Minecraft Version</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import numeral from "numeral";
import { isDevelopment } from "std-env";

const props = defineProps({
  mod: Object
});

const { data, pending } = await useAPI(`/v2/mods/${props.mod.mod_id}`);

const downloads = computed(() =>
  data.value.data
    ? numeral()
        .add(data.value.data.curseforge_downloads)
        .add(data.value.data.modrinth_downloads)
        .add(data.value.data.site_downloads)
        .format("0a", Math.floor)
    : 0
);

const relations = computed(() =>
  data.value.data
    ? numeral()
        .add(data.value.data.curseforge_relations)
        .add(data.value.data.modrinth_relations)
        .format("0a", Math.floor)
    : 0
);
</script>
