<template>
  <div
    v-if="previous || next"
    class="flex justify-between items-center py-4 lg:mx-4 border-t border-gray-200 dark:border-gray-800"
  >
    <UButton
      v-if="previous"
      :to="previous._path"
      color="gray"
      size="lg"
      icon="i-heroicons-arrow-left"
    >
      {{ previous.title }}
    </UButton>
    <UButton
      v-if="next"
      :to="next._path"
      class="ml-auto"
      color="gray"
      size="lg"
      icon="i-heroicons-arrow-right"
      trailing
    >
      {{ next.title }}
    </UButton>
  </div>
</template>

<script setup>
const props = defineProps({
  current: Object
});

const parts = props.current._path.split("/").slice(1);

const [previous, next] = await queryContent(parts[0], parts[1]).findSurround(
  props.current._path
);
</script>
