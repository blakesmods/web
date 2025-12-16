<template>
  <div class="w-full py-4 col-span-12 lg:col-span-9">
    <div class="flex items-center gap-4">
      <UButton
        class="inline-flex! lg:hidden!"
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
              category === 'Enchantments'
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
  layout: "wiki",
  middleware: "ignore-js-map"
});

const toggleSidebar = useEventBus("wiki:toggleSidebar");

const { version, mod, isLatestVersion } = useWikiMetadata();

if (!mod) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const title = mod.value.name + " Wiki";
const description = `View wiki articles about ${mod.value.name}.`;

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
  if (!articles.value[article.category]) {
    articles.value[article.category] = [];
  }

  // the latest version doesn't have the version in the url
  if (article.path && isLatestVersion.value) {
    article.path = removeWikiVersionFromPath(article.path, version.value);
  }

  articles.value[article.category].push(article);
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
    label: mod.value.name
  }
]);

const categories = computed(() =>
  Object.values(getWikiCategories()).filter(
    c => articles.value[c] && articles.value[c].length > 0
  )
);

function onToggleSidebar() {
  toggleSidebar.emit();
}
</script>
