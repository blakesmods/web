<template>
  <h2>In This Section</h2>
  <div class="flex flex-col gap-3 md:gap-1">
    <NuxtLink
      v-for="page in pages"
      class="flex pl-2 py-0.5 md:py-0.5 text-sm border-l border-neutral-300 dark:border-neutral-700"
      :to="page.path"
    >
      {{ page.title }}
    </NuxtLink>
  </div>
</template>

<script setup>
const pages = await useDocsSectionArticles();
</script>
