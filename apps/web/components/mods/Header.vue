<template>
  <header
    class="header fixed w-full h-[75px] top-0 z-40"
    :class="{ scrolled, filled }"
  >
    <div
      class="flex container h-[73px] m-auto mt-[1px] px-4 justify-between items-center"
    >
      <div class="flex items-center leading-4">
        <ReactiveLogo />
        <ModsDropdown class="ml-6" />
      </div>
      <div
        ref="dropdown"
        class="right flex justify-end items-center text-lg font-bold leading-4"
      >
        <div class="links mr-6 space-x-4" :class="{ active: menu }">
          <slot />
        </div>

        <NuxtLink :to="downloadLink">
          <Button
            class="p-button-outlined"
            :class="{ '!border-surface-border': scrolled }"
          >
            <span class="font-bold">Download</span>
          </Button>
        </NuxtLink>
        <Button
          class="mobile-menu p-button-outlined"
          icon="pi pi-bars"
          @click="menu = !menu"
        />
      </div>
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

const dropdown = ref(null);
const scrolled = ref(false);
const menu = ref(false);

const theme = useColorMode();

function onScrollWindow() {
  scrolled.value = window.scrollY > 60;
}

onClickOutside(dropdown, () => {
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
  display: block;
  width: 100%;
  top: 0;
  z-index: 100;

  &.scrolled,
  &.filled {
    @apply bg-surface-ground border-b border-b-surface-border;

    a,
    button,
    &:deep(.p-button.p-button-outlined) {
      border-color: theme("colors.surface.border") !important;
    }
  }

  a,
  button,
  &:deep(.p-button.p-button-outlined) {
    color: theme("colors.surface.text") !important;
    border-color: theme("colors.surface.text") !important;
  }

  .container {
    .right {
      .mobile-menu {
        display: none;
      }

      @media screen and (max-width: theme("screens.lg")) {
        .links {
          display: none;
          border-radius: 5px;
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

        .mobile-menu {
          display: inline-flex;
          margin-left: 16px;
          font-size: 24px;
          cursor: pointer;
          user-select: none;
        }
      }
    }
  }
}
</style>
