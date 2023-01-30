<template>
  <ClientOnly>
    <template #placeholder>
      <div class="w-[40px] md:w-[245px] h-[40px]"></div>
    </template>

    <NuxtLink class="hidden md:block" to="/">
      <img
        v-if="theme === 'light' && !darkOnly"
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
    </NuxtLink>

    <NuxtLink class="block md:hidden" to="/">
      <img
        v-if="theme === 'light' && !darkOnly"
        class="w-10"
        src="/img/logo_circle_lightmode.png"
        alt="blakes mods logo"
      />
      <img
        v-else
        class="w-10"
        src="/img/logo_circle_darkmode.png"
        alt="blakes mods logo"
      />
    </NuxtLink>
  </ClientOnly>
</template>

<script setup>
defineProps({
  darkOnly: Boolean
});

const theme = useColorMode();
</script>
