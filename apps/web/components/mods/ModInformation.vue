<template>
  <UCard class="min-w-[300px]">
    <template #header>
      <h3 class="text-center">Mod Information</h3>
    </template>

    <div class="space-y-1">
      <div class="flex justify-between gap-4">
        <strong>Total Downloads</strong>
        <span>{{ formatNumber(downloads) }}</span>
      </div>
      <div v-if="mod.latest_release" class="flex justify-between gap-4">
        <strong>Latest Release</strong>
        <UTooltip
          :text="`Released on ${formatDate(
            mod.latest_release.upload_date,
            'ddd, MMM D, YYYY h:mm A'
          )}`"
        >
          {{ mod.latest_release.mod_version }}
        </UTooltip>
      </div>
      <div class="flex justify-between gap-4">
        <strong>License</strong>
        <span>MIT License</span>
      </div>
    </div>
  </UCard>
</template>

<script setup>
const props = defineProps({
  mod: Object
});

const { formatDate, formatNumber } = useFormatters();

const downloads = computed(
  () =>
    props.mod.site_downloads +
    props.mod.curseforge_downloads +
    props.mod.modrinth_downloads
);
</script>
