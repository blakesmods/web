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

const { isLatestVersion } = useDocsMetadata();

const [previous, next] = await useDocsPagination();

function formatModName(document) {
  const modID = document.path.split("/")[isLatestVersion.value ? 2 : 3];
  const mod = getMod(modID);
  return mod ? mod.name : modID;
}
</script>
