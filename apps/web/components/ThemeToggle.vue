<template>
  <div
    class="w-[70px] h-[30px] p-[5px] bg-surface-border rounded-full cursor-pointer"
    @click="onToggleTheme"
  >
    <div
      v-if="theme === 'light'"
      class="flex relative h-full justify-end items-center"
    >
      <div
        class="w-[20px] h-[20px] bg-surface-text rounded-full absolute top-0 left-0"
      ></div>
      <i class="pi pi-sun text-surface-text"></i>
    </div>
    <div v-else class="relative">
      <div
        class="w-[20px] h-[20px] bg-surface-text rounded-full absolute top-0 right-0"
      ></div>
      <i class="pi pi-moon text-surface-text"></i>
    </div>
  </div>
</template>

<script setup>
const theme = useColorMode();

function onToggleTheme() {
  const current = theme.value;

  theme.value = current === "dark" ? "light" : "dark";
}
</script>
