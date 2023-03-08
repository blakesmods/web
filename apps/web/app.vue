<template>
  <NuxtLayout>
    <ClientOnly>
      <Toast position="bottom-right" />
    </ClientOnly>
    <NuxtLoadingIndicator
      color="repeating-linear-gradient(to right, var(--color-secondary) 0%, var(--color-primary) 50%, var(--color-secondary) 100%)"
    />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const route = useRoute();
const modsDropdown = useModsDropdown();

useHead({
  titleTemplate: title => (title ? `${title} · Blake's Mods` : "Blake's Mods")
});

watch(
  () => route.path,
  () => {
    modsDropdown.value = false;
  }
);
</script>
