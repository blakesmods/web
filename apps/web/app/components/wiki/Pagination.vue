<template>
  <div
    v-if="previous || next"
    class="flex justify-between items-center py-6 border-t border-neutral-200 dark:border-neutral-800"
  >
    <UButton
      v-if="previous"
      :to="previous._path"
      class="group gap-4"
      size="lg"
      icon="i-heroicons-arrow-left"
      aria-label="Previous page button"
    >
      <div class="hidden md:flex flex-col text-right">
        {{ previous.title }}
        <small class="text-muted">
          {{ formatModName(previous) }}
        </small>
      </div>
    </UButton>
    <UButton
      v-if="next"
      :to="next._path"
      class="ml-auto group gap-4"
      size="lg"
      icon="i-heroicons-arrow-right"
      aria-label="Next page button"
      trailing
    >
      <div class="hidden md:flex flex-col">
        {{ next.title }}
        <small class="text-muted">
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

const { version, isLatestVersion } = useWikiMetadata();

const parts = props.current._path.split("/").slice(1);

const { data } = await useAsyncData(
  "wiki/" + props.current._path + "/pagination",
  () =>
    queryContent(parts[0], parts[1], parts[2])
      .sort({ sort: 1, $numeric: true })
      .findSurround(props.current._path)
);

const previous = computed(() => data.value[0]);
const next = computed(() => data.value[1]);

// the latest version doesn't have the version in the url
if (isLatestVersion.value) {
  if (previous.value) {
    previous.value._path = removeWikiVersionFromPath(
      previous.value._path,
      version.value
    );
  }

  if (next.value) {
    next.value._path = removeWikiVersionFromPath(
      next.value._path,
      version.value
    );
  }
}

function formatModName(document) {
  const modID = document._path.split("/")[isLatestVersion.value ? 2 : 3];
  const mod = getMod(modID);
  return mod ? mod.name : modID;
}
</script>
