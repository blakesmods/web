<template>
  <div>
    <h2 class="pb-4">
      <NuxtLink class="font-bold" to="/wiki">Wiki</NuxtLink>
    </h2>
    <div
      v-for="category in categories"
      class="mb-4 last:mb-0"
      :key="category.slug"
    >
      <div
        class="flex justify-between items-center -mx-2 px-2 py-1 cursor-pointer"
        @click="onClickCategory(category.slug)"
      >
        <h4 class="capitalize">{{ category.name }}</h4>
        <UIcon
          class="text-2xl"
          :name="
            category.active
              ? 'i-heroicons-chevron-down'
              : 'i-heroicons-chevron-right'
          "
        />
      </div>
      <div
        class="flex flex-col overflow-hidden"
        :class="[category.active ? 'h-full' : 'h-0']"
      >
        <NuxtLink
          v-for="article in articles[route.params.mod][category.slug]"
          class="flex relative pl-2 py-1 text-sm first:mt-2 border-l border-gray-300 dark:border-gray-700"
          :class="{
            'text-primary-500 hover:text-primary-500 !border-primary-500 font-semibold':
              article._path === route.path
          }"
          :to="article._path"
        >
          <UPopover
            v-if="article.icon"
            class="my-auto pr-1 w-5 h-4"
            mode="hover"
            :popper="{ placement: 'top' }"
          >
            <img :src="article.icon" :alt="article.title" />

            <template #panel>
              <img
                class="w-16 h-16 pixelated"
                :alt="article.title"
                :src="article.icon"
              />
            </template>
          </UPopover>
          {{ article.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import categoriesJSON from "~/content/wiki/.categories.json";

const route = useRoute();

const articles = ref({});

const { data } = await useAsyncData("wiki-sidebar-content", () =>
  queryContent("wiki")
    .only(["title", "category", "icon", "_path", "_dir"])
    .sort({ sort: 1, $numeric: true })
    .find()
);

for (const doc of data.value) {
  const parts = doc._path.split("/").slice(1);

  if (parts.length > 2) {
    if (!articles.value[parts[1]]) {
      articles.value[parts[1]] = Object.keys(categoriesJSON).reduce((a, b) => {
        a[b] = [];
        return a;
      }, {});
    }

    if (!articles.value[parts[1]][parts[2]]) {
      articles.value[parts[1]][parts[2]] = [];
    }

    articles.value[parts[1]][parts[2]].push(doc);
  }
}

const opened = ref([]);
const categories = computed(() =>
  Object.keys(articles.value[route.params.mod])
    .filter(
      c =>
        articles.value[route.params.mod][c] &&
        articles.value[route.params.mod][c].length > 0
    )
    .map(c => ({
      slug: c,
      name: categoriesJSON[c] || c,
      active: opened.value.includes(c) || isCurrentCategory(c)
    }))
);

function isCurrentCategory(category) {
  return articles.value[route.params.mod][category]?.some(
    d => d._path === route.path
  );
}

function onClickCategory(category) {
  const index = opened.value.indexOf(category);

  if (index > -1) {
    opened.value.splice(index, 1);
  } else {
    opened.value.push(category);
  }
}
</script>
