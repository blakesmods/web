<template>
  <h2>In This Section</h2>
  <div class="flex flex-col">
    <NuxtLink
      v-for="page in pages"
      class="flex pl-2 py-1.5 md:py-0.5 border-l border-gray-300 dark:border-gray-700"
      :to="page._path"
    >
      {{ page.title }}
    </NuxtLink>
  </div>
</template>

<script setup>
const { version, mod } = useDocsMetadata();

const pages = ref([]);

const { data } = await useAsyncData(mod.value + "-docs-listing", () =>
  queryContent("docs", version.value, mod.value).only(["title", "_path"]).find()
);

pages.value = data.value.slice(1);
</script>
