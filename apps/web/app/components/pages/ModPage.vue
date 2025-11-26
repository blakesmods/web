<template>
  <div
    class="page overflow-x-clip relative"
    :style="{
      '--primary-color': mod.primary_color,
      '--secondary-color': mod.secondary_color
    }"
  >
    <GradientBackground />

    <Header :download-link="mod.url + '/download'">
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
        class="container flex flex-col w-full h-full pt-28 md:pt-40 pb-12 pr-4 justify-between"
      >
        <div class="flex h-full my-auto items-center">
          <Hero :mod="mod" @learn-more="onClickLearnMore" />
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
import GradientBackground from "~/components/GradientBackground.vue";

const props = defineProps({
  mod: Object
});

const title = props.mod.name;
const description = `The official home of ${props.mod.name}! ${props.mod.tagline}`;

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
});

function onClickLearnMore() {
  const featuresEl = document.querySelector("#features");

  if (featuresEl) {
    featuresEl.scrollIntoView({ behavior: "smooth" });
  }
}
</script>
