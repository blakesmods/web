<template>
  <div
    class="flex relative w-full mt-5 !mb-6 p-4 gap-2 rounded-lg text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-700"
  >
    <div>
      <UIcon v-if="icon" class="w-[24px] h-[24px]" :name="icon" />
    </div>
    <div class="flex flex-col gap-1">
      <strong>{{ title }}</strong>
      <div class="text-sm">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  icon: String
});
</script>
