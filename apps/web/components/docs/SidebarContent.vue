<template>
  <h3 class="mb-4 pb-4 text-center border-b border-surface-border">
    <NuxtLink class="font-bold" to="/docs">Documentation</NuxtLink>
  </h3>
  <div v-for="category in categories" class="mb-2 last:mb-0">
    <div
      class="flex justify-between items-center -mx-2 px-2 py-1 cursor-pointer hover:bg-surface-hover rounded"
      :class="{ '!bg-surface-ground': isCurrentCategory(category.name) }"
      @click="onClickCategory(category.name)"
    >
      <h4 class="font-bold">{{ category.name }}</h4>
      <i
        :class="[
          'pi',
          category.active ? 'pi-chevron-down' : 'pi-chevron-right'
        ]"
      ></i>
    </div>
    <div
      class="flex flex-col overflow-hidden"
      :class="[category.active ? 'h-full' : 'h-0']"
    >
      <NuxtLink
        v-for="document in documents[category.name].filter(d => !d.hidden)"
        class="link relative mb-1 pl-2 text-sm first:mt-2 border-l border-surface-border"
        :class="{
          'text-surface-text/80 border-primary': document._path === route.path
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

const { data } = await useAsyncData("docs", () =>
  queryContent("docs").only(["title", "category", "hidden", "_path"]).find()
);

const documents = ref({});

for (const doc of data.value.filter(d => d.category)) {
  if (!documents.value[doc.category]) {
    documents.value[doc.category] = [];
  }

  documents.value[doc.category].push(doc);
}

const opened = ref([]);
const categories = computed(() =>
  Object.keys(documents.value).map(c => ({
    name: c,
    active: opened.value.includes(c) || isCurrentCategory(c)
  }))
);

function isCurrentCategory(category) {
  return documents.value[category]?.some(d => d._path === route.path);
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
