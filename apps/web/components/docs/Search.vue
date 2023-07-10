<template>
  <div ref="el" class="flex relative">
    <UButton
      class="lg:hidden"
      color="gray"
      icon="i-heroicons-magnifying-glass"
      @click="show = !show"
    />

    <div
      class="absolute min-w-[300px] lg:min-w-0 lg:static lg:flex flex-1 top-12 right-0 p-4 lg:p-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 lg:border-none rounded"
      :class="{ hidden: !show }"
    >
      <UInput
        id="search"
        icon="i-heroicons-magnifying-glass"
        placeholder="Search"
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
    apiKey: "caf654bfef1b27774276330bcc9cabd2a654844655e540a4c24253b800e69f2e",
    indexUid: "docs",
    inputSelector: "#search",
    enableDarkMode: true,
    debug: process.env.NODE_ENV === "development"
  });
});
</script>
