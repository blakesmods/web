<template>
  <div
    class="flex justify-center border-t border-surface-border"
    :style="{ 'background-color': mod.primary_color + '20' }"
  >
    <div class="container flex flex-col w-full relative py-16 z-10 gap-8">
      <svg
        class="absolute left-4 bottom-0"
        width="156"
        height="156"
        viewBox="0 0 156 156"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M82 15H39V1H96V58H82V15Z"
          :fill="mod.primary_color"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 43L57 43L57 57L0 57L4.9831e-06 -4.9831e-06L14 -3.75918e-06L14 43Z"
          :fill="mod.primary_color"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M142 142L142 99L156 99L156 156L99 156L99 142L142 142Z"
          :fill="mod.primary_color"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M35 122L78 122L78 136L21 136L21 79L35 79L35 122Z"
          :fill="mod.primary_color"
        />
        <rect x="57" y="81" width="20" height="20" :fill="mod.primary_color" />
        <rect x="116" y="18" width="20" height="20" :fill="mod.primary_color" />
      </svg>

      <h1 class="text-[52px] text-center">Download {{ mod.name }}</h1>
      <div class="flex flex-wrap justify-center gap-8">
        <NuxtLink
          class="grower flex justify-center items-center w-[200px] p-4"
          :to="mod.url + '/download'"
        >
          <Button class="p-button-mod gap-4">
            <i class="pi pi-download"></i>
            Download
          </Button>
        </NuxtLink>
        <a
          class="grower flex justify-center items-center w-[200px] p-4 gap-2"
          :href="mod.curseforge_link"
          target="_blank"
        >
          <Button class="p-button-mod-outlined gap-4">
            <i class="pi pi-external-link"></i>
            CurseForge
          </Button>
        </a>
        <a
          class="grower flex justify-center items-center w-[200px] p-4 gap-2"
          :href="mod.modrinth_link"
          target="_blank"
        >
          <Button class="p-button-mod-outlined gap-4">
            <i class="pi pi-external-link"></i>
            Modrinth
          </Button>
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
