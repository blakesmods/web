<template>
  <div class="flex flex-col gap-4 mr-2">
    <UFormGroup label="Select Version">
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
      <div
        class="flex justify-between items-center -mx-2 px-2 cursor-pointer"
        @click="onClickCategory(category)"
      >
        <h4>{{ category }}</h4>
        <UIcon
          :name="
            opened.includes(category)
              ? 'i-heroicons-chevron-down'
              : 'i-heroicons-chevron-right'
          "
        />
      </div>
      <div
        class="flex flex-col overflow-hidden text-gray-500 dark:text-gray-400 transition duration-200 ease-in-out"
        :class="[opened.includes(category) ? 'h-full' : 'h-0']"
      >
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
const documents = await useDocsSidebarLinks();
const categories = computed(() => Object.keys(documents.value));

const opened = ref(Object.keys(documents.value));

function onClickCategory(category) {
  const index = opened.value.indexOf(category);

  if (index > -1) {
    opened.value.splice(index, 1);
  } else {
    opened.value.push(category);
  }
}
</script>
