<template>
  <div
    class="flex relative w-full mt-5 !mb-6 p-4 gap-2 rounded-lg text-neutral-800 dark:text-neutral-100 bg-neutral-200 dark:bg-neutral-800 ring-1 ring-neutral-300 dark:ring-neutral-700"
  >
    <UIcon v-if="icon" class="w-[24px] h-[24px]" :name="icon" />
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
