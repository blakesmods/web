<template>
  <div class="flex flex-col gap-1">
    <h3>Useful Links</h3>
    <a :href="editUrl" target="_blank" class="flex items-center gap-2 text-sm">
      <UIcon name="i-simple-icons-github" width="16px" />
      Edit This Page
    </a>
    <template v-if="mod">
      <NuxtLink :to="mod.url" class="flex items-center gap-2 text-sm">
        <UIcon name="i-heroicons-arrow-down-tray" />
        Download
      </NuxtLink>
      <a
        :href="mod.curseforge_link"
        target="_blank"
        class="flex items-center gap-2 text-sm fill-gray-700 dark:fill-gray-200 hover:fill-gray-700/80 dark:hover:fill-gray-300/80"
      >
        <CurseForgeLogo width="16" />
        CurseForge
      </a>
      <a
        :href="mod.modrinth_link"
        target="_blank"
        class="flex items-center gap-2 text-sm fill-gray-700 dark:fill-gray-200 hover:fill-gray-700/80 dark:hover:fill-gray-300/80"
      >
        <ModrinthLogo width="16" />
        Modrinth
      </a>
    </template>
  </div>
</template>

<script setup>
defineProps({
  editUrl: String
});

const route = useRoute();
const mod = useMod(route.path.split("/").at(2));
</script>
