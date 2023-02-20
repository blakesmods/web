<template>
  <div>
    <h3 class="mb-4 pb-4 text-center border-b border-surface-border">
      On This Page
    </h3>
    <a
      v-for="item in links"
      class="flex w-full mb-1 text-sm"
      :class="{ 'pl-2': item.depth === 3 }"
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
