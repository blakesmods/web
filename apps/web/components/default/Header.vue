<template>
  <header
    ref="el"
    class="header fixed w-full h-16 top-0 z-40 bg-surface-ground border-b border-surface-border"
    :class="{ scrolled }"
  >
    <div
      class="content flex container h-16 m-auto px-4 justify-between items-center"
    >
      <div class="flex items-center">
        <ReactiveLogo />
        <ModsDropdown class="ml-6 leading-4" />
      </div>
      <div
        class="right flex justify-end items-center space-x-4 pl-2 text-lg font-bold leading-4"
        :class="{ active: menu }"
      >
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
          class="ml-3"
          href="https://www.curseforge.com/members/blakebr0/projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          CurseForge
        </a>
        <a
          class="ml-3"
          href="https://modrinth.com/user/BlakeBr0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Modrinth
        </a>
      </div>
      <Button
        class="p-button-outlined !inline-flex md:!hidden leading-4"
        icon="pi pi-bars"
        @click="menu = !menu"
      />
    </div>
  </header>
</template>

<script setup>
import ModsDropdown from "~/components/default/ModsDropdown.vue";
import ReactiveLogo from "~/components/default/ReactiveLogo.vue";

const theme = useColorMode();

const el = ref(null);
const scrolled = ref(false);
const menu = ref(false);

function onScrollWindow() {
  scrolled.value = window.scrollY > 60;
}

onClickOutside(el, () => {
  menu.value = false;
});

onMounted(() => {
  window.addEventListener("scroll", onScrollWindow);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScrollWindow);
});
</script>

<style lang="scss" scoped>
.header {
  .content {
    @media screen and (max-width: theme("screens.md")) {
      .right {
        display: none;
        box-shadow: theme("boxShadow.2xl");

        &.active {
          display: flex;
          position: absolute;
          width: 200px;
          top: 64px;
          right: 0;
          flex-direction: column;
          background-color: theme("colors.surface.hover");
          @apply items-start p-2 space-x-0 space-y-2;
        }
      }
    }
  }

  &.scrolled {
    @apply shadow;
  }
}
</style>
