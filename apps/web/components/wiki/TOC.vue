<template>
  <div>
    <h3 class="pb-4">On This Page</h3>
    <a
      v-for="item in links"
      class="flex w-full mb-1 text-sm"
      :class="{ 'pl-4': item.depth === 3 }"
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
