<template>
  <div
    class="page overflow-x-clip relative"
    :style="{
      '--primary-color': mod.primary_color,
      '--secondary-color': mod.secondary_color
    }"
  >
    <div class="background"></div>
    <BackgroundAccent />
    <Header
      :background="`/img/svg/${mod.url.slice(1)}-gradient.svg`"
      :download-link="mod.url + '/download'"
    >
      <NuxtLink v-if="mod.has_docs" :to="`/docs/${mod.mod_id}`">Docs</NuxtLink>
      <NuxtLink v-if="mod.has_wiki" :to="`/wiki/${mod.mod_id}`">Wiki</NuxtLink>

      <a :href="mod.github_link" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a :href="mod.curseforge_link" target="_blank" rel="noopener noreferrer">
        CurseForge
      </a>
      <a :href="mod.modrinth_link" target="_blank" rel="noopener noreferrer">
        Modrinth
      </a>
    </Header>

    <div class="h-full z-10 relative">
      <div
        class="container flex flex-col w-full h-full pt-40 pb-12 pr-4 justify-between"
      >
        <div class="flex h-full my-auto items-center">
          <Hero :mod="mod" />
        </div>
      </div>
    </div>

    <slot />

    <DownloadCTA :mod="mod" />
    <Footer />
  </div>
</template>

<script setup>
import Footer from "~/components/default/Footer.vue";
import DownloadCTA from "~/components/mods/DownloadCTA.vue";
import Hero from "~/components/mods/Hero.vue";
import Header from "~/components/mods/Header.vue";
import BackgroundAccent from "~/components/BackgroundAccent.vue";

const props = defineProps({
  mod: Object
});

useHead({
  title: props.mod.name
});
</script>

<style lang="scss" scoped>
.background {
  position: absolute;
  width: 100vw;
  max-width: 1440px;
  height: 1272px;
  left: 0;
  right: 0;
  top: -550px;
  background: linear-gradient(270deg, #a4003c -12.17%, #c200ed 114.78%);
  mix-blend-mode: normal;
  opacity: 0.5;
  filter: blur(250px);
}
</style>
