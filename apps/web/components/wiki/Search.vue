<template>
  <div ref="el" class="flex relative">
    <UButton
      class="lg:hidden"
      color="gray"
      icon="i-heroicons-magnifying-glass"
      aria-label="Search wiki button"
      @click="show = !show"
    />

    <div
      class="absolute min-w-[300px] lg:min-w-0 lg:static lg:flex flex-1 top-10 -right-32 p-2 lg:p-0 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 lg:border-none rounded"
      :class="{ hidden: !show }"
    >
      <UInput
        id="search"
        icon="i-heroicons-magnifying-glass"
        placeholder="Search..."
        v-model="search"
      >
        <template #trailing>
          <UKbd>/</UKbd>
        </template>
      </UInput>
    </div>
  </div>
</template>

<script setup>
import "docs-searchbar.js/dist/cdn/docs-searchbar.css";
import "~/assets/css/docs-searchbar.scss";

const el = ref(null);
const show = ref(false);
const search = ref("");

onClickOutside(el, () => {
  show.value = false;
});

onMounted(async () => {
  window.global = window;
  const DocsSearchBar = await import("docs-searchbar.js");

  DocsSearchBar.default({
    hostUrl: "https://meilisearch.blakesmods.com",
    apiKey: "e4af2394f83a96959449936bf870e7ae8ae82475b6e2bf90877d5c94de33ce6a",
    indexUid: "wiki",
    inputSelector: "#search",
    enableDarkMode: true,
    debug: process.env.NODE_ENV === "development"
  });
});
</script>
