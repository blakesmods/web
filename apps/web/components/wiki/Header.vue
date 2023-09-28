<template>
  <header
    class="fixed w-full top-0 z-40 shadow backdrop-blur border-b border-gray-200 dark:border-gray-800 bg-gray-100/75 dark:bg-gray-900/75"
    :class="{
      '!bg-gray-100 dark:!bg-gray-900': dropdown
    }"
  >
    <div class="container flex h-16 m-auto px-4 justify-between items-center">
      <div class="flex items-center gap-8">
        <ReactiveLogo />
        <ModsDropdown />
      </div>

      <div class="flex gap-2">
        <Search />
        <ColorModeButton />
        <UButton
          to="https://github.com/blakesmods/web"
          target="_blank"
          color="gray"
          icon="i-simple-icons-github"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import ModsDropdown from "~/components/default/ModsDropdown.vue";
import ReactiveLogo from "~/components/default/ReactiveLogo.vue";
import Search from "~/components/wiki/Search.vue";
import ColorModeButton from "~/components/ColorModeButton.vue";

const dropdown = useModsDropdown();
</script>
