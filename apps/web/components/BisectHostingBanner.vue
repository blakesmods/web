<template>
  <a
    v-if="vertical"
    class="m-auto"
    href="https://bisecthosting.com/blakesmods?r=web+vertical"
    target="_blank"
  >
    <img
      src="/img/bisect-vertical.png"
      alt="Bisect Hosting banner code blakesmods"
    />
  </a>
  <a
    v-else
    class="m-auto"
    href="https://bisecthosting.com/blakesmods?r=web+horizontal"
    target="_blank"
  >
    <img
      src="/img/bisect-horizontal.png"
      alt="Bisect Hosting banner code blakesmods"
    />
  </a>
</template>

<script setup>
defineProps({
  vertical: Boolean
});
</script>
