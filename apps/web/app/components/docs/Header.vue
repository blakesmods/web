<template>
  <header
    class="sticky top-0 inset-x-0 z-40 shadow backdrop-blur border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/75 dark:bg-neutral-900/75"
    :class="{
      'bg-neutral-100! dark:bg-neutral-900!': dropdown
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
              trailing-icon="i-heroicons-chevron-down-20-solid"
            >
              {{ version }}
            </UButton>
          </UTooltip>
        </UDropdownMenu>
        <Search />
        <UTooltip text="Change Theme">
          <UColorModeButton variant="subtle" />
        </UTooltip>
        <UTooltip text="CurseForge">
          <UButton
            to="https://www.curseforge.com/members/blakebr0/projects"
            class="hidden sm:flex justify-center w-8 fill-neutral-700 dark:fill-neutral-200"
            target="_blank"
            aria-label="CurseForge"
          >
            <CurseForgeLogo class="shrink-0 size-5" width="20px" />
          </UButton>
        </UTooltip>
        <UTooltip text="Modrinth">
          <UButton
            to="https://modrinth.com/user/BlakeBr0"
            class="hidden sm:flex justify-center w-8 fill-neutral-700 dark:fill-neutral-200"
            target="_blank"
            aria-label="Modrinth"
          >
            <ModrinthLogo class="shrink-0 size-5" width="20px" />
          </UButton>
        </UTooltip>
        <UTooltip text="GitHub">
          <UButton
            to="https://github.com/blakesmods"
            class="hidden sm:flex"
            target="_blank"
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
        You are viewing the docs for an older version.
        <NuxtLink
          class="font-bold text-warning! hover:underline! underline-offset-4"
          :to="latestURL"
        >
          View Latest Docs ({{ getDocsLatestVersion() }})
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import ModsDropdown from "~/components/default/ModsDropdown.vue";
import ReactiveLogo from "~/components/default/ReactiveLogo.vue";
import Search from "~/components/docs/Search.vue";

const dropdown = useModsDropdown();

const { version, isLatestVersion } = useDocsMetadata();
const versions = await useDocsVersions();
const latestURL = await useDocsLatestArticleURL();
</script>
