<template>
  <UCarousel
    v-slot="{ item, index }"
    arrows
    :items="screenshots"
    :ui="{ root: 'mx-12', item: 'basis-full sm:basis-1/2 md:basis-1/3' }"
  >
    <UCard
      :ui="{ body: 'w-44 !p-2 mx-auto cursor-pointer' }"
      @click="onClickScreenshot(index)"
    >
      <NuxtImg
        class="w-full aspect-[16/9] object-contain"
        width="160"
        height="90"
        :src="item.image"
        :alt="item.name"
      />
    </UCard>
  </UCarousel>

  <UModal
    v-model:open="isModalOpen"
    :title="screenshot.name"
    :ui="{ content: 'md:max-w-2xl lg:max-w-5xl' }"
  >
    <template #body>
      <NuxtImg :src="screenshot.image" :alt="screenshot.description" />
    </template>
    <template #footer>
      {{ screenshot.description }}
    </template>
  </UModal>
</template>

<script setup>
const props = defineProps({
  screenshots: Array
});

const isModalOpen = ref(false);
const modalIndex = ref(0);

const screenshot = computed(() => props.screenshots[modalIndex.value]);

function onClickScreenshot(index) {
  modalIndex.value = index;
  isModalOpen.value = true;
}
</script>
