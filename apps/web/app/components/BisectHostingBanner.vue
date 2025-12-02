<template>
  <a class="m-auto" target="_blank" :href="url">
    <img src="/img/bisect.webp" alt="Bisect Hosting banner code blakesmods" />
  </a>
</template>

<script setup>
const props = defineProps({
  source: String
});

const url = computed(
  () => `https://bisecthosting.com/blakesmods?r=${props.source}`
);
</script>
