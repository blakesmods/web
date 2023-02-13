<template>
  <div ref="el" class="flex flex md:w-[288px] relative">
    <div
      class="flex justify-center items-center absolute -top-1 md:top-0 right-0 w-8 h-8 z-10 bg-surface-card border border-surface-border cursor-pointer md:pointer-events-none"
      @click="show = !show"
    >
      <i class="pi pi-search"></i>
    </div>
    <div
      class="absolute md:static md:flex flex-1 top-12 right-0 w-[300px] p-4 md:p-0 bg-surface-hover md:bg-none border border-surface-border md:border-none rounded"
      :class="{ hidden: !show }"
    >
      <div
        v-if="!search"
        class="hidden md:block flex justify-center items-center absolute top-[5px] px-1.5 right-9 z-10 text-sm border border-surface-border rounded pointer-events-none opacity-50"
      >
        /
      </div>
      <input
        id="search"
        class="flex w-full h-8 pl-2 pr-8 bg-surface-card border border-surface-border placeholder-surface-text/50"
        type="text"
        placeholder="Search the docs..."
        v-model="search"
      />
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
    apiKey: "0496fe2d1171a00e2e101fa1ba2e5f0cb9e46351e9f9cf811d19aaca24bb947f",
    indexUid: "docs",
    inputSelector: "#search",
    enableDarkMode: true,
    debug: process.env.NODE_ENV === "development"
  });
});
</script>
