<template>
  <footer
    class="block dark:bg-gray-800/25 shadow-md shadow-gray-900 border-t border-gray-200 dark:border-gray-800"
  >
    <div class="flex pt-20 pb-8">
      <div
        class="container grid grid-cols-1 md:grid-cols-3 lg:flex justify-between w-full flex-wrap mx-auto px-4 gap-8"
      >
        <div class="flex flex-col col-span-full items-start gap-y-2">
          <NuxtLink
            to="/"
            class="mb-4"
            aria-label="Blake's Mods logo home page link"
          >
            <Logo />
          </NuxtLink>
          <div class="flex flex-col gap-y-3 md:gap-y-1">
            <a
              class="flex items-center gap-2"
              href="https://github.com/blakebr0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UIcon name="i-simple-icons-github" width="16px" />
              GitHub
            </a>
            <a
              class="flex items-center gap-2 fill-black dark:fill-white hover:fill-black/80 dark:hover:fill-white/80"
              href="https://www.curseforge.com/members/blakebr0/projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CurseForgeLogo width="16px" />
              CurseForge
            </a>
            <a
              class="flex items-center gap-2 fill-black dark:fill-white hover:fill-black/80 dark:hover:fill-white/80"
              href="https://modrinth.com/user/BlakeBr0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ModrinthLogo height="16px" />
              Modrinth
            </a>
          </div>
        </div>
        <div class="flex flex-col gap-y-3 md:gap-y-1">
          <div class="font-semibold text-2xl mb-1">{{ columns[0].title }}</div>
          <NuxtLink
            v-for="(link, index) in columns[0].links"
            :to="link.url"
            :key="index"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
        <div class="flex flex-col gap-y-3 md:gap-y-1">
          <div class="font-semibold text-2xl mb-1">{{ columns[1].title }}</div>
          <NuxtLink
            v-for="(link, index) in columns[1].links"
            :to="link.url"
            :key="index"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
        <div class="flex flex-col gap-y-3 md:gap-y-1">
          <div class="font-semibold text-2xl mb-1">{{ columns[2].title }}</div>
          <NuxtLink
            v-for="(link, index) in columns[2].links"
            :to="link.url"
            :key="index"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="flex md:justify-center flex-col md:flex-row container min-h-16 justify-between items-center mx-auto p-4 gap-2 border-t border-gray-200 dark:border-gray-800"
    >
      <div class="flex justify-center items-center gap-4">
        <span>
          &copy; {{ new Date().getFullYear() }} BlakeBr0 -
          <a
            href="https://github.com/blakesmods/web/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT License
          </a>
        </span>

        <ThemeToggle />
      </div>
    </div>
  </footer>
</template>

<script setup>
import CurseForgeLogo from "~/components/CurseForgeLogo.vue";
import ModrinthLogo from "~/components/ModrinthLogo.vue";
import ThemeToggle from "~/components/ThemeToggle.vue";

const mods = getMods();

const columns = ref([
  {
    title: "Mods",
    links: mods.map(m => ({ name: m.name, url: m.url }))
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
  },
  {
    title: "Legal",
    links: [
      {
        name: "Terms of Service",
        url: "/terms-of-service"
      },
      {
        name: "Privacy Policy",
        url: "/privacy-policy"
      },
      {
        name: "Cookie Policy",
        url: "/cookie-policy"
      }
    ]
  }
]);
</script>
