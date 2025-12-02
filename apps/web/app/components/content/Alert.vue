<template>
  <UAlert :title="title" :icon="icon" :ui="{ description: '[&>*]:my-0' }">
    <template #description>
      <slot></slot>
    </template>
  </UAlert>
</template>

<script setup>
defineProps({
  title: String,
  icon: String
});
</script>
