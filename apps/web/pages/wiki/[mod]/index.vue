<template>
  <div class="w-full py-4">
    <div class="py-4 text-center">
      <h1>{{ mod.name }} Wiki</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-4 gap-4">
      <Card v-for="category in categories">
        <template #title>
          <h3 class="capitalize">{{ category }}</h3>
        </template>
        <template #content>
          <div class="flex flex-col gap-1">
            <NuxtLink
              v-for="article in articles[category]"
              class="flex pl-2 first:mt-2 border-l border-surface-border"
              :to="article._path"
            >
              <img
                v-if="article.icon"
                class="my-auto pr-1 w-5 h-4"
                :src="article.icon"
                :alt="article.title"
                v-tooltip.top="{
                  value: `<img src='${article.icon}' class='w-16 h-16 pixelated' alt='${article.title}' />`,
                  escape: true
                }"
              />
              {{ article.title }}
            </NuxtLink>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import categoriesJSON from "~/content/wiki/categories.json";

definePageMeta({
  layout: "wiki"
});

const route = useRoute();

const mod = useMod(route.params.mod);

if (!mod.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const title = mod.value.name + " Wiki";
const description = `View wiki articles about ${mod.value.name}.`;

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

const categories = computed(() =>
  Object.keys(articles.value).filter(c => articles.value[c].length > 0)
);
</script>
