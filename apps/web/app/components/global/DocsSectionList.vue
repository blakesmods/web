<template>
  <h2>In This Section</h2>
  <div class="flex flex-col gap-3 md:gap-1">
    <NuxtLink
      v-for="page in pages"
      class="flex pl-2 py-0.5 md:py-0.5 text-sm border-l border-neutral-300 dark:border-neutral-700"
      :to="page._path"
    >
      {{ page.title }}
    </NuxtLink>
  </div>
</template>

<script setup>
const { version, mod, isLatestVersion } = useDocsMetadata();

const { data } = await useAsyncData(
  `${mod.value}-${version.value}-docs-listing`,
  () =>
    queryContent("docs", version.value, mod.value)
      .only(["title", "_path"])
      .find()
);

const pages = computed(() =>
  data.value.slice(1).map(doc => {
    if (isLatestVersion.value && doc._path) {
      doc._path = removeDocsVersionFromPath(doc._path, version.value);
    }

    return doc;
  })
);
</script>
