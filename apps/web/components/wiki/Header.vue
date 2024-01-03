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
        <UTooltip text="CurseForge">
          <UButton
            to="https://www.curseforge.com/members/blakebr0/projects"
            class="flex justify-center w-8 p-0 fill-gray-700 dark:fill-gray-200 hover:fill-gray-500 dark:hover:fill-gray-400"
            target="_blank"
            color="gray"
          >
            <CurseForgeLogo width="20px" />
          </UButton>
        </UTooltip>
        <UTooltip text="Modrinth">
          <UButton
            to="https://modrinth.com/user/BlakeBr0"
            class="flex justify-center w-8 p-0 fill-gray-700 dark:fill-gray-200 hover:fill-gray-500 dark:hover:fill-gray-400"
            target="_blank"
            color="gray"
          >
            <ModrinthLogo width="20px" />
          </UButton>
        </UTooltip>
        <UTooltip text="GitHub">
          <UButton
            to="https://github.com/blakesmods"
            target="_blank"
            color="gray"
            icon="i-simple-icons-github"
          />
        </UTooltip>
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
