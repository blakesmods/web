<template>
  <div class="flex flex-col">
    <h4 class="mb-2">Useful Links</h4>
    <div class="flex flex-col gap-1 text-muted">
      <a
        :href="editURL"
        target="_blank"
        class="flex items-center gap-2 text-sm hover:text-neutral-700 dark:hover:text-neutral-200"
      >
        <UIcon name="i-simple-icons-github" width="16px" />
        Edit This Page
      </a>
      <template v-if="mod">
        <NuxtLink
          :to="mod.url"
          class="flex items-center gap-2 text-sm hover:text-neutral-700 dark:hover:text-neutral-200"
        >
          <UIcon name="i-heroicons-arrow-down-tray" />
          Download
        </NuxtLink>
        <a
          :href="mod.curseforge_link"
          target="_blank"
          class="flex items-center gap-2 text-sm hover:text-neutral-700 dark:hover:text-neutral-200"
        >
          <CurseForgeLogo
            class="fill-neutral-500 dark:fill-neutral-400 hover:fill-neutral-700 dark:hover:fill-neutral-200"
            width="16"
          />
          CurseForge
        </a>
        <a
          :href="mod.modrinth_link"
          target="_blank"
          class="flex items-center gap-2 text-sm hover:text-neutral-700 dark:hover:text-neutral-200"
        >
          <ModrinthLogo
            class="fill-neutral-500 dark:fill-neutral-400 hover:fill-neutral-700 dark:hover:fill-neutral-200"
            width="16"
          />
          Modrinth
        </a>
      </template>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  page: Object
});

const { mod: modID } = useDocsMetadata();
const mod = getMod(modID.value);
const editURL = computed(
  () =>
    `https://github.com/blakesmods/web/edit/main/apps/web/content${props.page._path}.${props.page._extension}`
);
</script>
