<template>
  <div class="hero flex gap-8">
    <div
      class="flex flex-col xl:flex-row w-full items-center xl:justify-between gap-8"
    >
      <div
        class="flex flex-col justify-center items-center xl:items-start gap-4"
      >
        <h1 class="text-center xl:text-left text-[52px] uppercase">
          {{ mod.name }}
        </h1>
        <h2 class="text-center text-2xl">{{ mod.tagline }}</h2>
        <a href="#features">
          <Button class="p-button-mod flex gap-4">
            Learn More
            <i class="pi pi-arrow-right"></i>
          </Button>
        </a>
      </div>
      <div class="right">
        <div
          class="card bg-surface-800"
          :style="{
            border: `1px solid ${mod.primary_color}`,
            'box-shadow': `0 0 8px ${mod.primary_color}`
          }"
        >
          <img :src="`/img/hero/${mod.mod_id}-hero.png`" />
        </div>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row justify-between w-full p-[2px] rounded-lg gap-8 shadow"
      :style="{
        'background-image': `linear-gradient(270deg, ${mod.secondary_color} -12.17%, ${mod.primary_color} 114.78%)`
      }"
    >
      <div
        class="flex flex-wrap justify-around w-full p-10 gap-2 md:gap-4 bg-surface-ground rounded-lg"
      >
        <div class="flex flex-col items-center">
          <h2 :style="{ color: mod.primary_color }">{{ downloads }}+</h2>
          <span class="text-xl">Downloads</span>
        </div>
        <div class="flex flex-col items-center">
          <h2 :style="{ color: mod.primary_color }">10k+</h2>
          <span class="text-xl">Modpacks</span>
        </div>
        <div class="flex flex-col items-center">
          <h2 v-if="!pending" :style="{ color: mod.primary_color }">
            {{ data.data.latest_release.mod_version }}
          </h2>
          <span class="text-xl">Latest Release</span>
        </div>
        <div class="flex flex-col items-center">
          <h2 v-if="!pending" :style="{ color: mod.primary_color }">
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
        .format("0a")
    : 0
);
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  min-height: 500px;
  flex-direction: column;
  align-items: center;

  .left {
    width: 50%;

    h1 {
      font-size: 52px;
    }
  }

  .right {
    width: 640px;

    .card {
      width: 100%;
      height: 400px;
      border-radius: theme("borderRadius.xl");
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;

    .left {
      display: flex;
      width: 100%;
      margin-bottom: 40px;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }

    .right {
      width: 100%;
      max-width: 640px;
    }
  }
}
</style>
