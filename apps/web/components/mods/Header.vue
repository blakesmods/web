<template>
  <header
    class="header fixed w-full top-0 z-40"
    :class="{
      'bg-surface-ground/80 border-b border-b-surface-border backdrop-blur-md':
        (scrolled || filled) && !dropdown,
      'bg-surface-ground': dropdown
    }"
  >
    <div
      class="flex container h-16 m-auto mt-[1px] px-4 justify-between items-center"
    >
      <div class="flex items-center leading-4 space-x-8">
        <ReactiveLogo />
        <ModsDropdown />

        <div
          class="hidden lg:block links mr-6 space-x-4 xl:space-x-8"
          :class="{ active: menu }"
        >
          <slot />
        </div>
      </div>
      <div
        class="right flex justify-end items-center text-lg font-bold leading-4 gap-4"
      >
        <UButton
          :to="downloadLink"
          color="gray"
          size="md"
          icon="i-heroicons-arrow-down-tray-solid"
          trailing
        >
          <span class="font-bold">Download</span>
        </UButton>
        <UButton
          class="!inline-flex lg:!hidden leading-4"
          color="gray"
          icon="i-heroicons-bars-3-solid"
          @click="menu = !menu"
        />
      </div>

      <Sidebar v-model:visible="menu" position="right">
        <div class="flex flex-col gap-4">
          <NuxtLink class="font-bold" :to="downloadLink">Download</NuxtLink>
          <slot />
        </div>
      </Sidebar>
    </div>
  </header>
</template>

<script setup>
import ModsDropdown from "~/components/default/ModsDropdown.vue";
import ReactiveLogo from "~/components/default/ReactiveLogo.vue";

defineProps({
  background: String,
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
