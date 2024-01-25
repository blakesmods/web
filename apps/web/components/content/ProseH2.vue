<template>
  <h2 :id="id">
    <a v-if="id && generate" class="relative group" :href="`#${id}`">
      <UIcon
        name="i-heroicons-hashtag"
        class="absolute hidden w-6 h-6 -left-7 top-2 text-primary-500 group-hover:block"
      />
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup>
const props = defineProps({
  id: String
});

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h3);
</script>
