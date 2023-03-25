<template>
  <div
    ref="el"
    class="grid w-screen h-screen overflow-auto"
    :style="{
      'grid-template-columns': `repeat(${columns}, 1fr)`,
      'grid-template-rows': `repeat(${rows}, 1fr)`
    }"
  >
    <div
      v-for="tile in tiles"
      class="tile relative hidden sm:block bg-[rgb(75,75,94)] before:absolute before:inset-[0.5px] before:bg-surface-hover"
      :key="tile"
      :style="{
        'before:right-[1.5px]': tile % columns === 0,
        'before:bottom-[1.5px]': tile > tiles - columns
      }"
    ></div>
    <div class="block sm:absolute w-screen h-screen z-10">
      <div
        class="container flex flex-col justify-between h-full mx-auto py-4 gap-4 text-white font-bold"
      >
        <h1
          class="flex h-1/4 mx-auto items-center text-[60px] sm:text-[80px] text-center"
        >
          <Logo style="transform: scale(2.34)" />
        </h1>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:h-1/2 items-center"
        >
          <NuxtLink
            v-for="mod in mods"
            class="group flex justify-center items-center h-[140px] md:h-[200px] bg-surface-card rounded-lg transition text-surface-text hover:z-10 hover:duration-300 hover:scale-105 active:scale-100"
            :style="{
              border: `1px solid ${mod.primary_color}`,
              'box-shadow': `0 0 8px ${mod.primary_color}`
            }"
            :to="mod.url"
            :key="mod.mod_id"
          >
            <div
              class="flex flex-col w-full h-full p-4 justify-center items-center"
              @mouseenter="onHoverMod(mod)"
              @mouseleave="onMouseLeaveMod"
            >
              <img
                :src="mod.logo"
                :alt="mod.name + ' logo'"
                width="100"
                height="100"
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
          class="flex flex-col justify-end items-center h-1/4 py-4 sm:py-0 gap-1"
        >
          <div
            class="flex justify-center text-sm md:text-base text-surface-text"
          >
            <NuxtLink to="/terms-of-service">Terms of Service</NuxtLink>
            <span class="mx-2 font-normal text-surface-text">-</span>
            <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
            <span class="mx-2 font-normal text-surface-text">-</span>
            <NuxtLink to="/cookie-policy">Cookie Policy</NuxtLink>
          </div>
          <div class="flex justify-center text-surface-text">
            <span>&copy; {{ new Date().getFullYear() }} BlakeBr0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import anime from "animejs";

definePageMeta({
  layout: "blank"
});

const mods = useMods();

const el = ref(null);
const rows = ref(0);
const columns = ref(0);

const tiles = computed(() => rows.value * columns.value);

function onHoverMod(mod) {
  anime({
    targets: ".tile",
    backgroundColor: mod.primary_color,
    delay: anime.stagger(30, {
      grid: [columns.value, rows.value],
      from: "center"
    })
  });
}

function onMouseLeaveMod() {
  anime({
    targets: ".tile",
    backgroundColor: "rgb(75 75 94)",
    delay: anime.stagger(15, {
      grid: [columns.value, rows.value],
      from: "center"
    })
  });
}

useResizeObserver(el, () => {
  rows.value = Math.floor(document.body.clientHeight / 75);
  columns.value = Math.floor(document.body.clientWidth / 75);
});
</script>
