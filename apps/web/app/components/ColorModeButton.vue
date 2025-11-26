<template>
  <UTooltip text="Change Theme">
    <ClientOnly>
      <UButton
        :icon="isDark ? 'i-heroicons-moon-solid' : 'i-heroicons-sun-solid'"
        color="gray"
        aria-label="Theme"
        @click="isDark = !isDark"
      />

      <template #fallback>
        <UButton key="fallback" class="w-8 h-8" color="gray" loading />
      </template>
    </ClientOnly>
  </UTooltip>
</template>

<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  }
});
</script>
