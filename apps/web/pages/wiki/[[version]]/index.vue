<template>
  <div class="py-8 space-y-8">
    <h1 class="text-center">Blake's Mods Wiki</h1>
    <Mods />
  </div>
</template>

<script setup>
import Mods from "~/components/wiki/Mods.vue";

definePageMeta({
  layout: "wiki"
});

const mods = getMods();

const title = "Wiki";
const description = `The official wiki for ${mods
  .filter(m => m.has_wiki)
  .map(m => m.name)
  .join(", ")}!`;

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
});
</script>
