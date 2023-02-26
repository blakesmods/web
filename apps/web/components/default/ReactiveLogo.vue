<template>
  <NuxtLink class="hidden md:block" to="/">
    <Logo :color="color" />
  </NuxtLink>

  <NuxtLink class="block md:hidden !ml-0" to="/">
    <Logo small :color="color" />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  color: String
});
</script>
