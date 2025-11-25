<template>
  <UCarousel
    v-slot="{ item, index }"
    arrows
    :items="screenshots"
    :ui="{ item: 'basis-full sm:basis-1/2 md:basis-1/3' }"
  >
    <UCard
      :ui="{ base: 'w-44 mx-auto cursor-pointer', body: { padding: '!p-2' } }"
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

  <UModal v-model="isModalOpen" :ui="{ width: 'md:max-w-2xl lg:max-w-5xl' }">
    <NuxtImg :src="screenshot.image" :alt="screenshot.description" />
    <h4 class="mx-4 my-2">{{ screenshot.name }}</h4>
    <p class="mx-4 my-2">{{ screenshot.description }}</p>
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
