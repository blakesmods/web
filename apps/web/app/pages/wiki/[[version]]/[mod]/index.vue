<template>
  <div class="w-full py-4 col-span-12 lg:col-span-9">
    <div class="flex items-center gap-4">
      <UButton
        class="!inline-flex lg:!hidden"
        ref="sidebarToggle"
        icon="i-heroicons-bars-3-solid"
        aria-label="View navigation button"
        @click="onToggleSidebar"
      />
      <UBreadcrumb :items="breadcrumbs" />
    </div>
    <h1 class="py-4">{{ mod.name }} Wiki</h1>
    <div class="flex flex-wrap md:flex-nowrap gap-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full pt-4 gap-8"
      >
        <div
          v-for="category in categories"
          class="flex flex-col gap-4"
          :class="{
            // this is a special case for desktop so that the enchantments section isn't off in no-man's land;
            // hopefully, I can remember to update this if I add new guides
            'xl:relative xl:-top-[448px]':
              mod.mod_id === 'mysticalagriculture' &&
              category === 'enchantments'
          }"
        >
          <h2 class="capitalize text-2xl">
            {{ category }}
          </h2>
          <div class="flex flex-col gap-3 md:gap-1">
            <ArticleLink
              v-for="article in articles[category]"
              :article="article"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArticleLink from "~/components/wiki/ArticleLink.vue";

definePageMeta({
  layout: "wiki"
});

const toggleSidebar = useEventBus("wiki:toggleSidebar");

const { version, mod: modID, isLatestVersion } = useWikiMetadata();

const mod = getMod(modID.value);
if (!mod) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const title = mod.name + " Wiki";
const description = `View wiki articles about ${mod.name}.`;

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
});

const data = await useWikiModArticles();

if (data.value.length === 0) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const articles = ref(
  Object.keys(getWikiCategories()).reduce((a, b) => {
    a[b] = [];
    return a;
  }, {})
);

for (const article of data.value) {
  if (!articles.value[article._dir]) {
    articles.value[article._dir] = [];
  }

  // the latest version doesn't have the version in the url
  if (article._path && isLatestVersion.value) {
    article._path = removeWikiVersionFromPath(article._path, version.value);
  }

  articles.value[article._dir].push(article);
}

const breadcrumbs = computed(() => [
  {
    label: "Wiki",
    to: isLatestVersion.value ? "/wiki" : `/wiki/${version.value}`
  },
  {
    label: version.value
  },
  {
    label: mod.name
  }
]);

const categories = computed(() =>
  Object.keys(articles.value).filter(c => articles.value[c].length > 0)
);

function onToggleSidebar() {
  toggleSidebar.emit();
}
</script>
