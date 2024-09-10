<template>
  <div
    v-if="previous || next"
    class="flex justify-between items-center py-6 lg:ml-4 xl:mr-4 border-t border-gray-200 dark:border-gray-800"
  >
    <UButton
      v-if="previous"
      :to="previous._path"
      class="group gap-4"
      color="gray"
      size="lg"
      icon="i-heroicons-arrow-left"
      aria-label="Previous page button"
    >
      <div class="hidden md:flex flex-col text-right">
        {{ previous.title }}
        <small
          class="text-gray-600 dark:text-gray-300 group-hover:text-gray-500 dark:group-hover:text-gray-400"
        >
          {{ formatModName(previous) }}
        </small>
      </div>
    </UButton>
    <UButton
      v-if="next"
      :to="next._path"
      class="ml-auto group gap-4"
      color="gray"
      size="lg"
      icon="i-heroicons-arrow-right"
      aria-label="Next page button"
      trailing
    >
      <div class="hidden md:flex flex-col">
        {{ next.title }}
        <small
          class="text-gray-600 dark:text-gray-300 group-hover:text-gray-500 dark:group-hover:text-gray-400"
        >
          {{ formatModName(next) }}
        </small>
      </div>
    </UButton>
  </div>
</template>

<script setup>
const props = defineProps({
  current: Object
});

const mods = useMods();
const version = useDocsVersion();
const isLatestVersion = useDocsIsLatestVersion();

const parts = props.current._path.split("/").slice(1);

const { data } = await useAsyncData(() =>
  queryContent(parts[0], parts[1]).findSurround(props.current._path)
);

const [previous, next] = data.value;

// latest version doesn't have the version in the url
if (isLatestVersion) {
  previous._path = previous._path
    .split("/")
    .filter(s => s !== version.value)
    .join("/");

  next._path = next._path
    .split("/")
    .filter(s => s !== version.value)
    .join("/");
}

function formatModName(document) {
  const name = document._path.split("/")[isLatestVersion ? 2 : 3];
  const mod = mods.value.find(mod => mod.mod_id === name);
  return mod ? mod.name : name;
}
</script>
