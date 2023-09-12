<template>
  <UAlert color="primary" variant="subtle">
    <template #title>
      <strong class="text-lg">{{ title || "Heads Up!" }}</strong>
    </template>
    <template #description>
      <slot></slot>
    </template>
  </UAlert>
</template>

<script setup>
defineProps({
  title: String
});
</script>
