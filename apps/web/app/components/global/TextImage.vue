<template>
  <div
    class="flex flex-col bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded overflow-hidden"
  >
    <NuxtImg class="w-full" :src="src" alt="" />
    <div
      class="px-3 py-2 text-xs border-t border-neutral-300 dark:border-neutral-700"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: String
});
</script>
