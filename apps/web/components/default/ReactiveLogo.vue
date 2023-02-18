<template>
  <NuxtLink class="hidden md:block" to="/">
    <Logo />
  </NuxtLink>

  <NuxtLink class="block md:hidden !ml-0" to="/">
    <Logo small />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  darkOnly: Boolean
});

const theme = useColorMode();

const isDark = computed(() => theme.value === "dark" || props.darkOnly);
</script>
