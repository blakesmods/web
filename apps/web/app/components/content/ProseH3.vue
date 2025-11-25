<template>
  <h3 :id="id">
    <a v-if="id && generate" class="relative group" :href="`#${id}`">
      <UIcon
        name="i-heroicons-hashtag"
        class="absolute hidden w-5 h-5 -left-6 top-1 text-primary-500 group-hover:block"
      />
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>

<script setup>
const props = defineProps({
  id: String
});

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h3);
</script>
