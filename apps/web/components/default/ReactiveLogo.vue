<template>
  <NuxtLink
    class="hidden md:block"
    to="/"
    aria-label="Blake's Mods logo home page link"
  >
    <Logo :color="color" />
  </NuxtLink>

  <NuxtLink
    class="block md:hidden !ml-0"
    to="/"
    aria-label="Blake's Mods logo home page link"
  >
    <Logo small :color="color" />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  color: String
});
</script>
