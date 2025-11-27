<template>
  <header
    class="fixed w-full top-0 z-40 shadow backdrop-blur border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/75 dark:bg-neutral-900/75"
    :class="{
      '!bg-neutral-100 dark:!bg-neutral-900': dropdown
    }"
  >
    <div class="container flex h-16 m-auto px-4 justify-between items-center">
      <div class="flex items-center gap-2 md:gap-4">
        <ReactiveLogo />
        <ModsDropdown />
      </div>

      <div class="flex gap-2">
        <UDropdownMenu :items="versions">
          <UTooltip text="Select Version">
            <UButton
              class="w-full"
              color="neutral"
              trailing-icon="i-heroicons-chevron-down-20-solid"
            >
              <span class="w-full text-left">{{ version }}</span>
            </UButton>
          </UTooltip>
        </UDropdownMenu>
        <Search />
        <UColorModeButton variant="subtle" />
        <UTooltip text="CurseForge">
          <UButton
            to="https://www.curseforge.com/members/blakebr0/projects"
            class="flex justify-center w-8 p-0 fill-neutral-700 dark:fill-neutral-200 hover:fill-neutral-500 dark:hover:fill-neutral-400"
            target="_blank"
            color="neutral"
            aria-label="CurseForge"
          >
            <CurseForgeLogo width="20px" />
          </UButton>
        </UTooltip>
        <UTooltip text="Modrinth">
          <UButton
            to="https://modrinth.com/user/BlakeBr0"
            class="flex justify-center w-8 p-0 fill-neutral-700 dark:fill-neutral-200 hover:fill-neutral-500 dark:hover:fill-neutral-400"
            target="_blank"
            color="neutral"
            aria-label="Modrinth"
          >
            <ModrinthLogo width="20px" />
          </UButton>
        </UTooltip>
        <UTooltip text="GitHub">
          <UButton
            to="https://github.com/blakesmods"
            target="_blank"
            color="neutral"
            icon="i-simple-icons-github"
            aria-label="GitHub"
          />
        </UTooltip>
      </div>
    </div>
    <div
      v-if="!isLatestVersion"
      class="flex flex-col w-full h-16 sm:h-8 justify-center box-border bg-warning/10 text-warning ring ring-inset ring-warning/25"
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

const dropdown = useModsDropdown();

const { version, isLatestVersion } = useWikiMetadata();
const versions = useWikiVersions();
const latestURL = await useWikiLatestArticleURL();
</script>
