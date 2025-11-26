<template>
  <div
    class="flex flex-col pt-24"
    :style="{
      '--primary-color': modInfo.primary_color,
      '--secondary-color': modInfo.secondary_color
    }"
  >
    <GradientBackground />

    <Header filled download-link="#">
      <NuxtLink v-if="modInfo.has_docs" :to="`/docs/${modInfo.mod_id}`">
        Docs
      </NuxtLink>
      <NuxtLink v-if="modInfo.has_wiki" :to="`/wiki/${modInfo.mod_id}`">
        Wiki
      </NuxtLink>

      <a :href="modInfo.github_link" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a
        :href="modInfo.curseforge_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        CurseForge
      </a>
      <a
        :href="modInfo.modrinth_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Modrinth
      </a>
    </Header>

    <div class="container relative mx-auto px-4 z-20">
      <h1 class="mt-8 mb-8 text-center">Download {{ mod.mod_name }}</h1>
    </div>
    <div
      class="container relative flex flex-col lg:flex-row w-full m-auto px-4 pb-8 gap-8 z-20"
    >
      <div class="flex flex-col gap-8">
        <ModInformation :mod="mod" />
      </div>
      <div class="flex flex-col w-full gap-8">
        <FileList :mod="mod.mod_id" />
        <BisectHostingBanner />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "~/components/default/Footer.vue";
import Header from "~/components/mods/Header.vue";
import FileList from "~/components/mods/FileList.vue";
import ModInformation from "~/components/mods/ModInformation.vue";
import GradientBackground from "~/components/GradientBackground.vue";

const props = defineProps({
  modId: String
});

const modInfo = getMod(props.modId);

const mod = ref({});

const { data } = await useAPI(`/v2/mods/${props.modId}`);

mod.value = data.value.data;

const title = `Download ${mod.value.mod_name}`;
const description = `
      The official download source of ${mod.value.mod_name} for Minecraft
      ${mod.value.versions.join(", ")}
    `;

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
});
</script>
