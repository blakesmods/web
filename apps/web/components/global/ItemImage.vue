<template>
  <img
    class="pixelated"
    :src="src"
    :alt="alt"
    :width="size"
    :height="size"
    :style="style"
    v-bind="$attrs"
    v-tooltip.top="tooltip"
  />
</template>

<script setup>
const props = defineProps({
  src: String,
  alt: String,
  size: String,
  tooltip: String
});

const style = computed(() => ({
  height: Number.isNaN(props.size) ? props.size : props.size + "px"
}));
</script>
