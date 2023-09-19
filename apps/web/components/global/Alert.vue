<template>
  <UAlert color="primary" variant="subtle">
    <template #title>
      <strong class="text-lg">{{ title }}</strong>
    </template>
    <template #description>
      <slot></slot>
    </template>
  </UAlert>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "Heads Up!"
  }
});
</script>
