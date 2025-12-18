<template>
  <NuxtLink
    class="flex relative py-0.5 pl-2 text-sm border-l border-neutral-300 dark:border-neutral-700"
    :to="article.path"
  >
    <UPopover
      v-if="article.icon"
      class="my-auto pr-1 w-5 h-4"
      mode="hover"
      :open-delay="200"
      :close-delay="200"
      :content="{ align: 'center', side: 'top' }"
    >
      <NuxtImg
        class="w-4 h-4"
        width="64"
        height="64"
        :src="article.icon"
        :alt="article.title"
      />

      <template #content>
        <NuxtImg
          class="w-16 h-16 pixelated"
          width="64"
          height="64"
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
