<template>
  <NuxtLink class="group !text-gray-700 dark:!text-gray-200" :to="link">
    <div class="flex gap-4 mr-4">
      <img :src="icon" class="w-16 h-16" alt="" />
      <div class="flex flex-col justify-center">
        <h2
          class="!mt-0 hover:!pl-0 text-base group-hover:underline underline-offset-4 !border-none"
        >
          {{ name }}
        </h2>
        <span class="text-sm text-gray-700/80 dark:text-gray-200/80">
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
