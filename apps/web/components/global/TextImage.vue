<template>
  <div
    class="flex flex-col bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded overflow-hidden"
  >
    <img class="w-full" :src="src" alt="" />
    <div
      class="px-3 py-2 text-xs border-t border-gray-300 dark:border-gray-700"
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
