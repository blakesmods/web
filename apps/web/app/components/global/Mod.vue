<template>
  <NuxtLink class="group !text-neutral-700 dark:!text-neutral-200" :to="link">
    <div class="flex gap-4 mr-4">
      <NuxtImg class="w-16 h-16" width="64" height="64" alt="" :src="icon" />
      <div class="flex flex-col justify-center">
        <h2
          class="!m-0 text-base group-hover:underline underline-offset-4 !border-none"
        >
          {{ name }}
        </h2>
        <span class="text-sm text-neutral-700/80 dark:text-neutral-200/80">
          Click to view docs
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  icon: String,
  link: String,
  name: String
});
</script>
