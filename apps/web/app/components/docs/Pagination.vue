<template>
  <div v-if="previous || next" class="flex justify-between items-center py-6">
    <UButton
      v-if="previous"
      :to="previous.path"
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
      :to="next.path"
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

const { version, isLatestVersion } = useDocsMetadata();

const { data } = await useAsyncData(
  "docs/" + props.current.path + "/pagination",
  () => queryCollectionItemSurroundings("docs", props.current.path)
);

const previous = computed(() => data.value[0]);
const next = computed(() => data.value[1]);

// the latest version doesn't have the version in the url
if (isLatestVersion.value) {
  if (previous.value) {
    previous.value.path = removeDocsVersionFromPath(
      previous.value.path,
      version.value
    );
  }

  if (next.value) {
    next.value.path = removeDocsVersionFromPath(next.value.path, version.value);
  }
}

function formatModName(document) {
  const modID = document.path.split("/")[isLatestVersion.value ? 2 : 3];
  const mod = getMod(modID);
  return mod ? mod.name : modID;
}
</script>
