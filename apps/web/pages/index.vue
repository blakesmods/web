<template>
  <div
    ref="el"
    class="grid w-screen h-screen overflow-auto"
    :style="{
      'grid-template-columns': `repeat(${columns}, 1fr)`,
      'grid-template-rows': `repeat(${rows}, 1fr)`
    }"
  >
    <UButton @click="testSentry">Test Sentry</UButton>
    <div
      v-for="tile in tiles"
      class="relative block before:absolute before:inset-[0.5px] before:bg-white before:dark:bg-gray-900"
      :key="tile"
      :class="[
        colors[tile],
        {
          'before:right-[1.5px]': tile % columns === 0,
          'before:bottom-[1.5px]': tile > tiles - columns
        }
      ]"
    ></div>
    <div class="absolute inset-0 min-h-screen z-10">
      <div
        class="container flex flex-col justify-between h-full mx-auto py-8 gap-8 font-bold"
      >
        <h1
          class="flex w-full max-w-[300px] md:max-w-[600px] h-1/4 mx-auto justify-center items-center"
        >
          <Logo class="md:scale-[2]" />
        </h1>
        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:h-1/2 items-center"
        >
          <NuxtLink
            v-for="mod in mods"
            class="group flex justify-center items-center h-[100px] sm:h-[140px] md:h-[200px] bg-white dark:bg-gray-900 text-xs sm:text-base rounded-lg transition hover:z-10 hover:duration-300 hover:scale-105 active:scale-100"
            :style="{
              border: `1px solid ${mod.primary_color}`,
              'box-shadow': `0 0 8px ${mod.primary_color}`
            }"
            :to="mod.url"
            :key="mod.mod_id"
          >
            <div
              class="flex flex-col w-full h-full p-4 justify-center items-center"
            >
              <NuxtImg
                class="w-[50px] sm:w-[100px]"
                width="100"
                height="100"
                :src="mod.logo"
                :alt="mod.name + ' logo'"
              />

              <div class="flex flex-col text-center">
                {{ mod.name }}
                <span
                  class="flex w-0 mx-auto group-hover:w-full group-hover:border-t-[4px] group-hover:border-solid"
                  :style="{
                    'border-color': mod.primary_color,
                    transition: 'width 0.25s ease-in-out'
                  }"
                ></span>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div
          class="flex flex-col justify-end items-center h-1/4 py-4 sm:py-0 gap-2 text-xs sm:text-base"
        >
          <div class="flex justify-center text-xs md:text-base">
            <NuxtLink to="/terms-of-service">Terms of Service</NuxtLink>
            <span class="mx-2 font-normal">-</span>
            <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
            <span class="mx-2 font-normal">-</span>
            <NuxtLink to="/cookie-policy">Cookie Policy</NuxtLink>
          </div>
          <div class="flex justify-center items-center gap-4">
            <span>&copy; {{ new Date().getFullYear() }} BlakeBr0</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "blank"
});

function testSentry() {
  throw new Error("Testing the sentry nuxt module");
}

const grays = [
  "bg-white dark:bg-gray-900",
  "bg-gray-200 dark:bg-gray-800",
  "bg-gray-300 dark:bg-gray-700",
  "bg-gray-400 dark:bg-gray-600"
];

const mods = getMods();

const el = ref(null);
const rows = ref(0);
const columns = ref(0);

const tiles = computed(() => rows.value * columns.value);
const colors = computed(() =>
  Array.from({ length: +tiles.value }).map((_, i) => {
    const index = Math.floor(Math.random() * 4);
    return grays[index];
  })
);

useResizeObserver(
  el,
  useDebounceFn(() => {
    rows.value = Math.floor(document.body.clientHeight / 50);
    columns.value = Math.floor(document.body.clientWidth / 50);
  }, 250)
);
</script>
