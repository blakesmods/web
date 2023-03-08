<template>
  <div ref="el" class="flex flex lg:w-[288px] relative">
    <div
      class="lg:hidden flex justify-center items-center absolute -top-1 right-0 w-8 h-8 z-10 bg-surface-card border border-surface-border cursor-pointer lg:pointer-events-none rounded-lg"
      @click="show = !show"
    >
      <i class="pi pi-search"></i>
    </div>
    <div
      class="absolute lg:static lg:flex flex-1 top-12 right-0 w-[300px] p-4 lg:p-0 bg-surface-hover lg:bg-none border border-surface-border lg:border-none rounded"
      :class="{ hidden: !show }"
    >
      <div
        v-if="!search"
        class="hidden lg:block flex justify-center items-center absolute top-[5px] px-1.5 right-2 z-10 text-sm border border-surface-border rounded pointer-events-none opacity-50"
      >
        /
      </div>
      <i
        class="pi pi-search absolute top-6 left-6 lg:top-2 lg:left-2 z-20 text-surface-text/50"
      ></i>
      <input
        id="search"
        class="flex w-full h-8 pl-7 pr-2 bg-surface-card border border-surface-border placeholder-surface-text/50 rounded-lg"
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
    apiKey: "caf654bfef1b27774276330bcc9cabd2a654844655e540a4c24253b800e69f2e",
    indexUid: "docs",
    inputSelector: "#search",
    enableDarkMode: true,
    debug: process.env.NODE_ENV === "development"
  });
});
</script>
