<template>
  <div class="flex flex-col">
    <h4 class="mb-2">Table of Contents</h4>
    <a
      v-for="item in links"
      class="flex w-full mb-1 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
      :class="{
        'pl-4': item.depth === 3
      }"
      :key="item.id"
      :href="`#${item.id}`"
    >
      {{ item.text }}
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  page: Object
});

const links = computed(() =>
  props.page.body.toc.links.flatMap(l => [l, ...(l.children || [])])
);
</script>
