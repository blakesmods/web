<template>
  <NuxtLayout>
    <NuxtLoadingIndicator
      color="repeating-linear-gradient(to right, var(--color-secondary) 0%, var(--color-primary) 50%, var(--color-secondary) 100%)"
    />
    <NuxtPage />
    <UNotifications />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: title => (title ? `${title} · Blake's Mods` : "Blake's Mods")
});

const route = useRoute();

const dropdown = useModsDropdown();

watch(
  () => route.path,
  () => {
    dropdown.value = false;
  }
);
</script>
