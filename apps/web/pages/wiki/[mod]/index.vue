<template>
  <div class="w-full py-4">
    <UBreadcrumb :links="breadcrumbs" />
    <div class="py-8 text-center">
      <h1>{{ mod.name }} Wiki</h1>
    </div>

    <div class="flex flex-wrap md:flex-nowrap gap-8">
      <div class="flex flex-col w-full md:w-1/2 lg:w-1/3 gap-4">
        <Callout
          v-if="mod.has_docs"
          title="Modpack Developers!"
          icon="i-heroicons-information-circle-solid"
        >
          <span class="flex flex-col gap-4">
            This wiki is for gameplay documentation. For advanced configuration,
            check out the docs.
            <UButton
              class="inline-flex mr-auto"
              color="gray"
              :to="`/docs/${mod.mod_id}`"
            >
              View Docs
            </UButton>
          </span>
        </Callout>
        <UCard>
          <template #header>
            <h2 class="text-2xl text-center">Latest Articles</h2>
          </template>
          <div class="flex flex-col gap-3 md:gap-1">
            <div v-for="article in recent" class="flex items-center gap-1">
              <ArticleLink :article="article" />
              <small class="capitalize opacity-80">- {{ article._dir }}</small>
            </div>
          </div>
        </UCard>
      </div>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-4 gap-8 w-full md:w-1/2 lg:w-2/3"
      >
        <div
          v-for="category in categories"
          class="flex flex-col gap-4"
          :class="{
            // this is a special case for desktop so that the enchantments section isn't off in no-mans land;
            // hopefully I can remember to update this if I add new guides
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
import categoriesJSON from "~/content/wiki/.categories.json";

import ArticleLink from "~/components/wiki/ArticleLink.vue";
import { coerce, rcompare } from "semver";

definePageMeta({
  layout: "wiki"
});

const route = useRoute();

const mod = getMod(route.params.mod);
if (!mod) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const title = mod.name + " Wiki";
const description = `View wiki articles about ${mod.name}.`;

useHead({
  title: title,
  meta: [
    {
      hid: "description",
      name: "description",
      content: description
    },
    // Open Graph
    { hid: "og:title", property: "og:title", content: title },
    {
      hid: "og:description",
      property: "og:description",
      content: description
    },
    // Twitter Card
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: title
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description
    }
  ]
});

const { data } = await useAsyncData("wiki-" + route.params.mod, () =>
  queryContent("wiki", route.params.mod)
    .sort({ sort: 1, $numeric: true })
    .find()
);

if (data.value.length === 0) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const articles = ref(
  Object.keys(categoriesJSON).reduce((a, b) => {
    a[b] = [];
    return a;
  }, {})
);

for (const article of data.value) {
  if (!articles.value[article._dir]) {
    articles.value[article._dir] = [];
  }

  articles.value[article._dir].push(article);
}

const recent = [...data.value]
  .sort((a, b) =>
    rcompare(coerce(a.version) ?? "1.0.0", coerce(b.version) ?? "1.0.0")
  )
  .slice(0, 8);

const breadcrumbs = computed(() => [
  {
    label: "Wiki",
    to: "/wiki"
  },
  {
    label: mod.name
  }
]);

const categories = computed(() =>
  Object.keys(articles.value).filter(c => articles.value[c].length > 0)
);
</script>
