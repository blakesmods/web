<template>
  <Card>
    <template #title>In This Section</template>
    <template #content>
      <div class="flex flex-col gap-1">
        <NuxtLink
          v-for="page in pages"
          class="flex pl-2 first:mt-2 border-l border-surface-border"
          :to="page._path"
        >
          {{ page.title }}
        </NuxtLink>
      </div>
    </template>
  </Card>
</template>

<script setup>
const props = defineProps({
  mod: String
});

const pages = ref([]);

const { data } = await useAsyncData(props.mod + "-docs-listing", () =>
  queryContent("docs", props.mod).only(["title", "_path"]).find()
);

pages.value = data.value.slice(1);
</script>
