<template>
  <UBadge :label="label" :color="color" />
</template>

<script setup>
defineProps({
  label: String,
  color: String
});
</script>
