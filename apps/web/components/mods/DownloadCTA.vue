<template>
  <div class="download-cta flex justify-center">
    <div class="flex flex-col relative p-8 z-10 gap-8">
      <h1 class="text-[52px] text-center">Download {{ mod.name }}</h1>
      <div class="flex flex-wrap justify-center gap-8">
        <NuxtLink
          class="grower flex justify-center items-center w-[200px] p-4 gap-2 bg-surface-card/40"
          :to="mod.url + '/download'"
          :style="{
            border: `1px solid ${mod.primary_color}`,
            'box-shadow': `0 0 8px ${mod.primary_color}`
          }"
        >
          <i class="pi pi-download"></i>
          Download
        </NuxtLink>
        <a
          class="grower flex justify-center items-center w-[200px] p-4 gap-2 bg-surface-card/40"
          :href="mod.curseforge_link"
          target="_blank"
          :style="{
            border: `1px solid ${mod.primary_color}`,
            'box-shadow': `0 0 8px ${mod.primary_color}`
          }"
        >
          <i class="pi pi-external-link"></i>
          CurseForge
        </a>
        <a
          class="grower flex justify-center items-center w-[200px] p-4 gap-2 bg-surface-card/40"
          :href="mod.modrinth_link"
          target="_blank"
          :style="{
            border: `1px solid ${mod.primary_color}`,
            'box-shadow': `0 0 8px ${mod.primary_color}`
          }"
        >
          <i class="pi pi-external-link"></i>
          Modrinth
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  mod: Object
});
</script>

<style lang="scss" scoped>
.download-cta {
  background-image: linear-gradient(
    135deg,
    var(--primary-color),
    var(--secondary-color)
  );
}
</style>
