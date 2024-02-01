<template>
  <h3 class="mb-4">Documentation</h3>
  <div v-for="category in categories" class="mb-4 last:mb-0">
    <h4>{{ category }}</h4>
    <div class="flex flex-col text-gray-500 dark:text-gray-400">
      <NuxtLink
        v-for="document in documents[category]"
        class="relative pl-4 py-3 md:py-1 text-sm first:mt-2 hover:text-gray-700 dark:hover:text-gray-200 border-l border-gray-300 dark:border-gray-700"
        :class="{
          '!text-primary-500 dark:!text-primary-400 font-semibold':
            document._path === route.path
        }"
        :to="document._path"
      >
        {{ document.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const { data } = await useAsyncData("docs-sidebar-content", () =>
  queryContent("docs").only(["title", "category", "hidden", "_path"]).find()
);

const documents = ref({});

for (const doc of data.value.filter(d => d.category && !d.hidden)) {
  if (!documents.value[doc.category]) {
    documents.value[doc.category] = [];
  }

  documents.value[doc.category].push(doc);
}

const categories = computed(() => Object.keys(documents.value));
</script>
