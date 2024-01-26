<template>
  <Carousel
    :value="screenshots"
    :num-visible="3"
    :show-indicators="false"
    :responsive-options="[
      {
        breakpoint: '768px',
        numVisible: 2
      },
      {
        breakpoint: '542px',
        numVisible: 1
      }
    ]"
  >
    <template #item="{ data, index }">
      <UCard
        :ui="{ base: 'w-44 mx-auto cursor-pointer', body: { padding: '!p-2' } }"
        @click="onClickScreenshot(index)"
      >
        <img
          :src="data.image"
          class="w-full aspect-[16/9] object-contain"
          :alt="data.name"
        />
      </UCard>
    </template>
  </Carousel>

  <UModal v-model="isModalOpen" :ui="{ width: 'md:max-w-2xl lg:max-w-5xl' }">
    <img :src="screenshot.image" alt="" />
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
