<template>
  <div ref="el" class="flex relative">
    <UButton
      class="lg:hidden"
      color="gray"
      icon="i-heroicons-magnifying-glass"
      aria-label="Search docs button"
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
    apiKey: "a1f6fbac3da1cb45072fa17f124322b445b25a59f7d33f0a4f56eb97a754c96c",
    indexUid: "docs",
    inputSelector: "#search",
    enableDarkMode: true,
    debug: process.env.NODE_ENV === "development"
  });
});
</script>
