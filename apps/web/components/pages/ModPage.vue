<template>
  <div
    class="page overflow-x-clip"
    :style="{
      '--primary-color': mod.primary_color + '20',
      '--secondary-color': mod.secondary_color + '20'
    }"
  >
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

    <div class="background h-full min-h-screen border-b border-surface-border">
      <div
        class="container flex flex-col w-full h-full min-h-screen pt-20 pb-8 pr-4 justify-between"
      >
        <div class="flex h-full my-auto items-center">
          <Hero :mod="mod" />
        </div>
        <div
          class="hidden md:flex h-[75px] -mb-8 justify-center items-center gap-4 font-bold text-2xl"
          style="animation: 5s item-hover infinite 0s"
        >
          <i class="pi pi-chevron-down" style="font-size: 24px"></i>
          Scroll down for more information
          <i class="pi pi-chevron-down" style="font-size: 24px"></i>
        </div>
      </div>
    </div>

    <slot />

    <DownloadCTA class="border-t border-surface-border" :mod="mod" />
    <Footer />
  </div>
</template>

<script setup>
import Footer from "~/components/default/Footer.vue";
import DownloadCTA from "~/components/mods/DownloadCTA.vue";
import Hero from "~/components/mods/Hero.vue";
import Header from "~/components/mods/Header.vue";

const props = defineProps({
  mod: Object
});

useHead({
  title: props.mod.name
});
</script>

<style lang="scss" scoped>
.background {
  background-image: linear-gradient(
    135deg,
    var(--primary-color),
    var(--secondary-color)
  );
}
</style>
