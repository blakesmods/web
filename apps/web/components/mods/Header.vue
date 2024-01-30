<template>
  <header
    class="fixed w-full top-0 z-40"
    :class="{
      'bg-gray-100 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 backdrop-blur':
        (scrolled || filled) && !dropdown,
      'bg-gray-100 dark:bg-gray-900': dropdown
    }"
  >
    <div
      class="flex container h-16 m-auto mt-[1px] px-4 justify-between items-center"
    >
      <div class="flex items-center leading-4 gap-2 md:gap-4">
        <ReactiveLogo />
        <ModsDropdown />

        <div class="hidden lg:flex mr-6 gap-x-4 xl:gap-x-8">
          <slot />
        </div>
      </div>
      <div
        class="flex justify-end items-center text-lg font-bold leading-4 gap-4"
      >
        <UButton
          :to="downloadLink"
          size="md"
          variant="primary"
          trailing-icon="i-heroicons-arrow-down-tray-solid"
        >
          <span class="hidden sm:inline-flex font-bold">Download</span>
        </UButton>
        <UButton
          class="inline-flex lg:hidden leading-4"
          color="gray"
          size="md"
          icon="i-heroicons-bars-3-solid"
          @click="menu = !menu"
        />
      </div>

      <USlideover side="right" v-model="menu">
        <div class="flex flex-nowrap gap-4">
          <div class="flex flex-col w-full gap-4">
            <NuxtLink class="font-bold" :to="downloadLink">Download</NuxtLink>
            <slot />
          </div>
          <div class="relative -top-1">
            <UButton icon="i-heroicons-x-mark" @click="menu = false">
              Close
            </UButton>
          </div>
        </div>
      </USlideover>
    </div>
  </header>
</template>

<script setup>
import ModsDropdown from "~/components/default/ModsDropdown.vue";
import ReactiveLogo from "~/components/default/ReactiveLogo.vue";

defineProps({
  downloadLink: String,
  filled: Boolean
});

const dropdown = useModsDropdown();
const scrolled = ref(false);
const menu = ref(false);

function onScrollWindow() {
  scrolled.value = window.scrollY > 60;
}

onMounted(() => {
  window.addEventListener("scroll", onScrollWindow);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScrollWindow);
});
</script>
