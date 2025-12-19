<template>
  <USeparator>
    <div class="flex items-center text-muted gap-2">
      <NuxtLink
        class="flex items-center text-sm gap-2"
        :to="editURL"
        target="_blank"
      >
        <UIcon name="i-heroicons-pencil-square" />
        Edit Page
      </NuxtLink>
      <UIcon name="i-heroicons-slash" class="text-muted" />
      <NuxtLink
        class="flex items-center text-sm gap-2"
        to="https://github.com/blakesmods/web/issues"
        target="_blank"
      >
        <UIcon name="i-simple-icons-github" />
        Report Issue
      </NuxtLink>
    </div>
  </USeparator>
</template>

<script setup>
const props = defineProps({
  page: Object
});

const editURL = computed(
  () =>
    `https://github.com/blakesmods/web/edit/main/apps/web/content${props.page.path}.${props.page.extension}`
);
</script>
