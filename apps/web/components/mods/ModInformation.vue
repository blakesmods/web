<template>
  <Card class="min-w-[300px]">
    <template #title>
      <h2 class="mb-4 pb-4 text-center border-b border-surface-border">
        Mod Information
      </h2>
    </template>
    <template #content>
      <div class="space-y-1">
        <div class="flex justify-between gap-4">
          <strong>Total Downloads</strong>
          <span>{{ formatNumber(downloads) }}</span>
        </div>
        <div v-if="mod.latest_release" class="flex justify-between gap-4">
          <strong>Latest Release</strong>
          <span
            v-tooltip.top="
              `Released on ${formatDate(
                mod.latest_release.upload_date,
                'ddd, MMM D, YYYY h:mm A'
              )}`
            "
          >
            {{ mod.latest_release.mod_version }}
          </span>
        </div>
        <div class="flex justify-between gap-4">
          <strong>License</strong>
          <span>MIT License</span>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
const props = defineProps({
  mod: Object
});

const downloads = computed(
  () =>
    props.mod.site_downloads +
    props.mod.curseforge_downloads +
    props.mod.modrinth_downloads
);
</script>
