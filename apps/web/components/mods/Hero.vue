<template>
  <div class="hero flex gap-8">
    <div
      class="flex flex-col xl:flex-row w-full items-center xl:justify-between gap-8"
    >
      <div class="flex flex-col justify-center items-center xl:items-start">
        <h1 class="text-center text-[52px]">{{ mod.name }}</h1>
        <h2 class="text-center text-2xl mb-4">{{ mod.tagline }}</h2>
        <GithubButton
          :href="mod.github_link"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star buttons/github-buttons on GitHub"
        >
          Star
        </GithubButton>
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
      class="flex flex-col md:flex-row justify-between w-full p-8 bg-surface-card/40 rounded-lg gap-8"
      :style="{
        border: `1px solid ${mod.primary_color}`,
        'box-shadow': `0 0 8px ${mod.primary_color}`
      }"
    >
      <div class="flex flex-col gap-2 md:gap-4">
        <h2>Downloads</h2>
        <div class="flex flex-col sm:flex-row gap-2 md:gap-4">
          <NuxtLink class="flex items-center gap-2" :to="`${mod.url}/download`">
            <i class="pi pi-download"></i>
            Download
            <div class="line"></div>
          </NuxtLink>
          <a
            class="flex items-center fill-surface-text hover:fill-surface-text/80 gap-2"
            :href="mod.curseforge_link"
            target="_blank"
          >
            <CurseForgeLogo width="16px" />
            CurseForge
            <div class="line"></div>
          </a>
          <a
            class="flex items-center fill-surface-text hover:fill-surface-text/80 gap-2"
            :href="mod.modrinth_link"
            target="_blank"
          >
            <ModrinthLogo width="16px" />
            Modrinth
            <div class="line"></div>
          </a>
        </div>
      </div>
      <div class="flex flex-col gap-2 md:gap-4">
        <h2>GitHub</h2>
        <div class="flex flex-col sm:flex-row gap-2 md:gap-4">
          <a class="flex items-center gap-2" :href="mod.github_link">
            <i class="pi pi-github"></i>
            View Source
            <div class="line"></div>
          </a>
          <a
            class="flex items-center gap-2"
            :href="`${mod.github_link}/issues`"
          >
            <i class="pi pi-exclamation-triangle"></i>
            Report Issues
            <div class="line"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import GithubButton from "vue-github-button";

import CurseForgeLogo from "~/components/CurseForgeLogo.vue";
import ModrinthLogo from "~/components/ModrinthLogo.vue";

defineProps({
  mod: Object
});
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
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
