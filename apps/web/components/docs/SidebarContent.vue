<template>
  <div class="flex flex-col gap-4">
    <UFormGroup label="Minecraft Version">
      <UDropdown
        class="w-full"
        :items="versions"
        :popper="{ placement: 'bottom-start' }"
      >
        <UButton
          class="w-full"
          color="gray"
          trailing-icon="i-heroicons-chevron-down-20-solid"
        >
          <span class="w-full text-left">{{ version }}</span>
        </UButton>
      </UDropdown>
    </UFormGroup>

    <div v-for="category in categories">
      <h4>{{ category }}</h4>
      <div class="flex flex-col text-gray-500 dark:text-gray-400">
        <NuxtLink
          v-for="document in documents[category]"
          class="relative pl-4 py-3 md:py-1 text-sm first:mt-2 hover:text-gray-700 dark:hover:text-gray-200 border-l border-gray-300 dark:border-gray-700"
          :class="{
            '!text-primary-500 dark:!text-primary-400 font-semibold':
              document._path === route.path
          }"
          :to="document._path"
        >
          {{ document.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { version } = useDocsMetadata();
const versions = useDocsVersions();
const documents = await useDocs();
const categories = computed(() => Object.keys(documents.value));
</script>
