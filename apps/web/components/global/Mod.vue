<template>
  <NuxtLink class="group" :to="link">
    <UCard class="transition hover:scale-105 active:scale-100">
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
    </UCard>
  </NuxtLink>
</template>

<script setup>
defineProps({
  icon: String,
  link: String,
  name: String
});
</script>
