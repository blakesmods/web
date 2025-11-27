<template>
  <div class="flex flex-col items-center w-full gap-16">
    <div
      class="flex flex-col xl:flex-row w-full items-center xl:justify-between gap-8"
    >
      <div
        class="flex flex-col justify-center items-center xl:items-start gap-4"
      >
        <h1
          class="text-center xl:text-left xl:whitespace-nowrap text-4xl md:text-[52px] uppercase"
        >
          {{ mod.name }}
        </h1>
        <h2 class="text-center text-2xl font-montserrat">{{ mod.tagline }}</h2>
        <div class="flex gap-4 mt-4 font-bold">
          <UButton
            size="xl"
            color="mod"
            trailing-icon="i-heroicons-arrow-down"
            @click="$emit('learn-more')"
          >
            <strong>Learn More</strong>
          </UButton>
          <UButton
            :to="`${mod.url}/download`"
            size="xl"
            color="mod"
            variant="outline"
            trailing-icon="i-heroicons-arrow-down-tray"
          >
            Download
          </UButton>
        </div>
      </div>
      <UCarousel
        ref="carouselRef"
        class="flex w-full xl:max-w-[40%] xl:h-[550px] xl:items-center"
        :items="mod.hero_images"
        :ui="{
          item: 'basis-full border border-neutral-300 dark:border-neutral-700 rounded-xl overflow-hidden'
        }"
        v-slot="{ item }"
      >
        <NuxtImg
          class="w-full"
          width="1920"
          height="1080"
          :src="item"
          :alt="`${mod.name} hero image`"
        />
      </UCarousel>
    </div>

    <div
      class="flex flex-col md:flex-row justify-between w-full p-[2px] rounded-lg shadow"
      :style="{
        'background-image': `linear-gradient(270deg, ${mod.secondary_color} -12.17%, ${mod.primary_color} 114.78%)`
      }"
    >
      <div
        class="flex flex-wrap justify-around w-full p-6 md:p-10 gap-4 bg-neutral-200 dark:bg-neutral-800 rounded-lg"
      >
        <div class="flex flex-col items-center w-full sm:w-2/5 md:w-auto">
          <USkeleton
            v-if="pending"
            class="w-[100px] h-[48px]"
            :ui="{ background: 'dark:bg-neutral-700' }"
          />
          <h2 v-else :style="{ color: mod.primary_color }">{{ downloads }}+</h2>
          <span class="text-xl">Downloads</span>
        </div>
        <div class="flex flex-col items-center w-full sm:w-2/5 md:w-auto">
          <USkeleton
            v-if="pending"
            class="w-[100px] h-[48px]"
            :ui="{ background: 'dark:bg-neutral-700' }"
          />
          <h2 v-else :style="{ color: mod.primary_color }">{{ relations }}+</h2>
          <span class="text-xl">Modpacks</span>
        </div>
        <div class="flex flex-col items-center w-full sm:w-2/5 md:w-auto">
          <USkeleton
            v-if="pending"
            class="w-[100px] h-[48px]"
            :ui="{ background: 'dark:bg-neutral-700' }"
          />
          <h2 v-else :style="{ color: mod.primary_color }">
            {{ modVersion }}
          </h2>
          <span class="text-xl">Latest Release</span>
        </div>
        <div class="flex flex-col items-center w-full sm:w-2/5 md:w-auto">
          <USkeleton
            v-if="pending"
            class="w-[100px] h-[48px]"
            :ui="{ background: 'dark:bg-neutral-700' }"
          />
          <h2 v-else :style="{ color: mod.primary_color }">
            {{ mcVersion }}
          </h2>
          <span class="text-xl">Minecraft Version</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import numeral from "numeral";

const props = defineProps({
  mod: Object
});

const carouselRef = ref();

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

const modVersion = computed(() =>
  data.value.data && data.value.data.latest_release
    ? data.value.data.latest_release.mod_version
    : "N/A"
);

const mcVersion = computed(() =>
  data.value.data && data.value.data.latest_release
    ? data.value.data.latest_release.mc_version
    : "N/A"
);

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 5000);
});
</script>
