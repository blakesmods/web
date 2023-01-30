<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: title => (title ? `${title} · Blake's Mods` : "Blake's Mods")
});
</script>
