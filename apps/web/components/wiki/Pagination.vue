<template>
  <div
    v-if="previous || next"
    class="flex justify-between items-center mx-4 border-t border-gray-200 dark:border-gray-800"
  >
    <NuxtLink
      v-if="previous"
      class="flex w-full py-4 items-center gap-4"
      :to="previous._path"
    >
      <i class="pi pi-arrow-left"></i>
      {{ previous.title }}
    </NuxtLink>
    <NuxtLink
      v-if="next"
      class="flex w-full py-4 justify-end items-center gap-4"
      :to="next._path"
    >
      {{ next.title }}
      <i class="pi pi-arrow-right"></i>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  current: Object
});

const parts = props.current._path.split("/").slice(1);

const [previous, next] = await queryContent(parts[0], parts[1], parts[2])
  .sort({ sort: 1, $numeric: true })
  .findSurround(props.current._path);
</script>
