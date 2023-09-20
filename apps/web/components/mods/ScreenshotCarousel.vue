<template>
  <div id="screenshots" class="text-center scroll-mt-24">
    <span class="text-[24px] font-semibold" style="color: var(--primary-color)">
      {{ title }}
    </span>
    <h2>{{ subtitle }}</h2>
  </div>
  <div>
    <Carousel :value="screenshots" :num-visible="1" :num-scroll="1">
      <template #item="{ data }">
        <div class="relative flex flex-col">
          <img
            class="block aspect-[1920/1080]"
            :src="data.image"
            :alt="data.title"
          />
          <div
            class="absolute inset-x-0 bottom-0 space-y-2 py-4 text-center bg-gray-300/50 dark:bg-gray-700/50 backdrop-blur-[12px]"
          >
            <h3>{{ data.title }}</h3>
            <p v-for="line in data.description">
              {{ line }}
            </p>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  screenshots: Array
});
</script>
