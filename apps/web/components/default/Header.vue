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
      <div class="hidden lg:flex justify-end items-center pl-2 gap-8">
        <NuxtLink to="/docs">Docs</NuxtLink>
        <NuxtLink to="/wiki">Wiki</NuxtLink>

        <a
          href="https://github.com/BlakeBr0"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.curseforge.com/members/blakebr0/projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          CurseForge
        </a>
        <a
          href="https://modrinth.com/user/BlakeBr0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Modrinth
        </a>
      </div>
      <UButton
        class="!inline-flex lg:!hidden leading-4"
        color="gray"
        size="md"
        icon="i-heroicons-bars-3-solid"
        aria-label="Open navigation menu button"
        @click="menu = !menu"
      />
    </div>

    <USlideover side="right" v-model="menu">
      <div class="flex flex-nowrap gap-4">
        <div class="flex flex-col w-full gap-4">
          <NuxtLink to="/docs">Docs</NuxtLink>
          <NuxtLink to="/wiki">Wiki</NuxtLink>

          <a
            href="https://github.com/BlakeBr0"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.curseforge.com/members/blakebr0/projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            CurseForge
          </a>
          <a
            href="https://modrinth.com/user/BlakeBr0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Modrinth
          </a>
        </div>
        <div class="relative -top-1">
          <UButton icon="i-heroicons-x-mark" @click="menu = false">
            Close
          </UButton>
        </div>
      </div>
    </USlideover>
  </header>
</template>

<script setup>
import ModsDropdown from "~/components/default/ModsDropdown.vue";
import ReactiveLogo from "~/components/default/ReactiveLogo.vue";
import Header from "~/components/docs/Header.vue";

const dropdown = useModsDropdown();

const menu = ref(false);
</script>
