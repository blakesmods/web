<template>
  <NuxtLink
    class="flex relative py-0.5 pl-2 text-sm border-l border-gray-300 dark:border-gray-700"
    :to="article._path"
  >
    <UPopover
      v-if="article.icon"
      class="my-auto pr-1 w-5 h-4"
      mode="hover"
      :popper="{ placement: 'top' }"
    >
      <NuxtImg :src="article.icon" :alt="article.title" />

      <template #panel>
        <NuxtImg
          class="w-16 h-16 pixelated"
          :alt="article.title"
          :src="article.icon"
        />
      </template>
    </UPopover>
    {{ article.title }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  article: Object
});
</script>
