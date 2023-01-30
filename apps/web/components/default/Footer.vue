<template>
  <footer class="block bg-surface-ground shadow-md shadow-surface-900">
    <div class="flex py-8 border-y border-surface-border">
      <div
        class="container grid grid-cols-1 sm:grid-cols-3 w-full mx-auto px-4 gap-4 space-y-4 sm:space-y-0"
      >
        <div class="flex flex-col sm:col-span-3 lg:col-span-1 space-y-2">
          <NuxtLink to="/" class="mb-4">
            <ClientOnly>
              <img
                v-if="theme === 'light'"
                class="w-[245px]"
                src="/img/logo_lightmode.png"
                alt="blakes mods logo"
              />
              <img
                v-else
                class="w-[245px]"
                src="/img/logo_darkmode.png"
                alt="blakes mods logo"
              />
            </ClientOnly>
          </NuxtLink>
          <div class="flex flex-col space-y-1">
            <a
              class="flex items-center gap-2"
              href="https://github.com/blakebr0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="pi pi-github"></i>
              GitHub
            </a>
            <a
              class="flex items-center fill-surface-text hover:fill-surface-text/80 gap-2"
              href="https://www.curseforge.com/members/blakebr0/projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CurseForgeLogo width="16px" />
              CurseForge
            </a>
            <a
              class="flex items-center fill-black dark:fill-white hover:fill-black/80 dark:hover:fill-white/80 gap-2"
              href="https://modrinth.com/user/BlakeBr0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ModrinthLogo height="16px" />
              Modrinth
            </a>
          </div>
        </div>
        <div class="flex flex-col space-y-1">
          <h3 class="mb-1">{{ columns[0].title }}</h3>
          <NuxtLink
            v-for="(link, index) in columns[0].links"
            :to="link.url"
            :key="index"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
        <div class="flex flex-col space-y-1">
          <h3 class="mb-1">{{ columns[1].title }}</h3>
          <NuxtLink
            v-for="(link, index) in columns[1].links"
            :to="link.url"
            :key="index"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row container min-h-16 justify-between items-center mx-auto p-4 gap-2"
    >
      <div class="flex items-center gap-4">
        <span>&copy; {{ new Date().getFullYear() }} BlakeBr0</span>
        <ClientOnly>
          <ThemeToggle class="mt-auto" />
        </ClientOnly>
      </div>
      <div class="flex justify-center text-sm sm:text-base">
        <NuxtLink to="/terms-of-service">Terms of Service</NuxtLink>
        <span class="mx-2 font-normal text-surface-border">-</span>
        <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
        <span class="mx-2 font-normal text-surface-border">-</span>
        <NuxtLink to="/cookie-policy">Cookie Policy</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import CurseForgeLogo from "~/components/CurseForgeLogo.vue";
import ModrinthLogo from "~/components/ModrinthLogo.vue";
import ThemeToggle from "~/components/ThemeToggle.vue";

const mods = useMods();
const theme = useColorMode();

const columns = ref([
  {
    title: "Mods",
    links: mods.value.map(m => ({ name: m.name, url: m.url }))
  },
  {
    title: "Navigation",
    links: [
      {
        name: "Home",
        url: "/"
      },
      {
        name: "Docs",
        url: "/docs"
      },
      {
        name: "Wiki",
        url: "/wiki"
      }
    ]
  }
]);
</script>
