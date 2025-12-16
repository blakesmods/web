<template>
  <div class="flex flex-col py-4 gap-y-8 col-span-12 lg:col-span-9">
    <UButton
      class="lg:hidden! mr-auto"
      ref="sidebarToggle"
      icon="i-heroicons-bars-3-solid"
      aria-label="View navigation button"
      @click="onToggleSidebar"
    />
    <h1>Blake's Mods Wiki</h1>
    <Mods />
  </div>
</template>

<script setup>
import Mods from "~/components/wiki/Mods.vue";

definePageMeta({
  layout: "wiki",
  middleware: "ignore-js-map"
});

const toggleSidebar = useEventBus("wiki:toggleSidebar");

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

function onToggleSidebar() {
  toggleSidebar.emit();
}
</script>
