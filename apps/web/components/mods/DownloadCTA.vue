<template>
  <div
    class="flex justify-center border-t border-gray-200 dark:border-gray-800"
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
        <UButton
          :to="mod.url + '/download'"
          color="gray"
          size="xl"
          leading-icon="i-heroicons-arrow-down-tray-solid"
        >
          Download
        </UButton>
        <UButton
          :to="mod.curseforge_link"
          target="_blank"
          color="gray"
          size="xl"
          leading-icon="i-heroicons-arrow-top-right-on-square-solid"
        >
          CurseForge
        </UButton>
        <UButton
          :to="mod.modrinth_link"
          target="_blank"
          color="gray"
          size="xl"
          leading-icon="i-heroicons-arrow-top-right-on-square-solid"
        >
          Modrinth
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  mod: Object
});
</script>
