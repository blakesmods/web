<template>
  <header
    class="fixed w-full top-0 z-40 shadow backdrop-blur border-b border-gray-200 dark:border-gray-800 bg-gray-100/75 dark:bg-gray-900/75"
    :class="{
      '!bg-gray-100 dark:!bg-gray-900': dropdown
    }"
  >
    <div class="container flex h-16 m-auto px-4 justify-between items-center">
      <div class="flex items-center gap-2 md:gap-4">
        <ReactiveLogo />
        <ModsDropdown />
      </div>

      <div class="flex gap-2">
        <UDropdown :items="versions">
          <UTooltip text="Select Version">
            <UButton
              class="w-full"
              color="gray"
              trailing-icon="i-heroicons-chevron-down-20-solid"
            >
              <span class="w-full text-left">{{ version }}</span>
            </UButton>
          </UTooltip>
        </UDropdown>
        <Search />
        <ColorModeButton />
        <UTooltip text="CurseForge">
          <UButton
            to="https://www.curseforge.com/members/blakebr0/projects"
            class="flex justify-center w-8 p-0 fill-gray-700 dark:fill-gray-200 hover:fill-gray-500 dark:hover:fill-gray-400"
            target="_blank"
            color="gray"
            aria-label="CurseForge"
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
            aria-label="Modrinth"
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
            aria-label="GitHub"
          />
        </UTooltip>
      </div>
    </div>
    <div
      v-if="!isLatestVersion"
      class="flex flex-col w-full h-16 sm:h-8 justify-center box-border bg-yellow-50 dark:bg-yellow-400 dark:bg-opacity-10 text-yellow-500 dark:text-yellow-400 border-y border-yellow-500 dark:border-yellow-400 border-opacity-25 dark:border-opacity-25"
    >
      <div class="container text-center">
        You are viewing the wiki for an older version.
        <NuxtLink class="font-bold hover:underline" :to="latestURL">
          View Latest ({{ getWikiLatestVersion() }})
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import ModsDropdown from "~/components/default/ModsDropdown.vue";
import ReactiveLogo from "~/components/default/ReactiveLogo.vue";
import Search from "~/components/wiki/Search.vue";
import ColorModeButton from "~/components/ColorModeButton.vue";

const { mod, version, isLatestVersion } = useWikiMetadata();
const versions = useWikiVersions();

const dropdown = useModsDropdown();

const latestURL = computed(() => (mod.value ? `/wiki/${mod.value}` : "/wiki"));
</script>
