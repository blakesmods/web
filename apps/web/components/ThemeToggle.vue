<template>
  <ClientOnly>
    <template #placeholder>
      <div class="h-[30px]"></div>
    </template>

    <div
      class="w-[70px] h-[30px] p-[5px] bg-gray-200 dark:bg-gray-800 text-base border border-gray-300 dark:border-gray-700 rounded-full cursor-pointer"
      @click="isDark = !isDark"
    >
      <div v-if="isDark" class="relative">
        <div
          class="w-[20px] h-[20px] bg-gray-700 dark:bg-gray-200 rounded-full absolute top-0 right-0"
        ></div>
        <UIcon name="i-heroicons-moon-solid" />
      </div>
      <div v-else class="flex relative h-full justify-end items-center">
        <div
          class="w-[20px] h-[20px] bg-gray-700 dark:bg-gray-200 rounded-full absolute top-0 left-0"
        ></div>
        <UIcon name="i-heroicons-sun-solid" />
      </div>
    </div>
  </ClientOnly>
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
