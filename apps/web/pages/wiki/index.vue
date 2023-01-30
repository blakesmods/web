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

const mods = useMods();

const title = "Wiki";
const description = `The official wiki for ${mods.value
  .filter(m => m.has_wiki)
  .join(", ")}!`;

useHead({
  title: title,
  meta: [
    {
      hid: "description",
      name: "description",
      content: description
    },
    // Open Graph
    { hid: "og:title", property: "og:title", content: title },
    {
      hid: "og:description",
      property: "og:description",
      content: description
    },
    // Twitter Card
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: title
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description
    }
  ]
});
</script>
