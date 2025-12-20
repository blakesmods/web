<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <UButton v-for="mod in mods" color="neutral" :to="mod.link">
      <div class="flex gap-2">
        <NuxtImg
          class="w-16 h-16"
          width="64"
          height="64"
          :src="mod.icon"
          alt=""
        />
        <div class="flex flex-col justify-center gap-1 mx-2">
          <h2 class="text-xl!">
            {{ mod.title }}
          </h2>
          <span v-if="!articles[mod.path]" class="opacity-80">
            No articles available
          </span>
          <span v-else class="opacity-80">
            Click to view {{ articles[mod.path] }}
            {{ articles[mod.path] === 1 ? "article" : "articles" }}
          </span>
        </div>
      </div>
    </UButton>
  </div>
</template>

<script setup>
const { version, isLatestVersion } = useWikiMetadata();

const articles = await useWikiModDirectoryCounts();

const mods = computed(() =>
  getMods().map(mod => ({
    title: mod.name,
    path: mod.mod_id,
    link: createLink(mod.mod_id),
    icon: mod.logo
  }))
);

function createLink(path) {
  if (articles.value[path] > 0) {
    return isLatestVersion.value
      ? `/wiki/${path}`
      : `/wiki/${version.value}/${path}`;
  }

  return isLatestVersion.value ? "/wiki" : `/wiki/${version.value}`;
}
</script>
