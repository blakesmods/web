<template>
  <div class="flex flex-col">
    <h3 class="mb-4">Useful Links</h3>
    <div class="flex flex-col gap-1 text-gray-500 dark:text-gray-400">
      <a
        :href="editUrl"
        target="_blank"
        class="flex items-center gap-2 text-sm hover:text-gray-700 dark:hover:text-gray-200"
      >
        <UIcon name="i-simple-icons-github" width="16px" />
        Edit This Page
      </a>
      <template v-if="mod">
        <NuxtLink
          :to="mod.url"
          class="flex items-center gap-2 text-sm hover:text-gray-700 dark:hover:text-gray-200"
        >
          <UIcon name="i-heroicons-arrow-down-tray" />
          Download
        </NuxtLink>
        <a
          :href="mod.curseforge_link"
          target="_blank"
          class="flex items-center gap-2 text-sm hover:text-gray-700 dark:hover:text-gray-200 fill-gray-500 dark:fill-gray-400 hover:fill-gray-700 dark:hover:fill-gray-200"
        >
          <CurseForgeLogo width="16" />
          CurseForge
        </a>
        <a
          :href="mod.modrinth_link"
          target="_blank"
          class="flex items-center gap-2 text-sm hover:text-gray-700 dark:hover:text-gray-200 fill-gray-500 dark:fill-gray-400 hover:fill-gray-700 dark:hover:fill-gray-200"
        >
          <ModrinthLogo width="16" />
          Modrinth
        </a>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  editUrl: String
});

const { mod: modID } = useDocsMetadata();
const mod = getMod(modID.value);
</script>
