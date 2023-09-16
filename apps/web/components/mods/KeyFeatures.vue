<template>
  <div id="features" class="text-center scroll-mt-24">
    <span class="text-[24px] font-semibold" style="color: var(--primary-color)">
      {{ title }}
    </span>
    <h2>{{ subtitle }}</h2>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <GradientUCard v-for="feature in features" class="min-h-[350px]">
      <template #header>
        <div class="flex flex-col items-center gap-4">
          <div v-if="feature.images" class="flex gap-4">
            <img
              v-for="image in feature.images"
              :src="image"
              alt=""
              width="50"
              height="50"
              class="pixelated object-cover"
            />
          </div>
          <h3>{{ feature.title }}</h3>
        </div>
      </template>

      <div class="flex space-y-4 h-full">
        <div class="flex flex-col w-full items-center gap-2 text-center">
          <p v-for="line in feature.description" v-html="line" />
        </div>
        <NuxtLink
          v-if="feature.link"
          class="absolute bottom-4 inset-x-0 flex justify-center"
          :to="feature.link"
        >
          <h4 style="color: var(--primary-color)">
            Learn More
            <UIcon name="i-heroicons-arrow-right-solid" />
          </h4>
        </NuxtLink>
        <div
          v-if="feature.onClick"
          class="absolute bottom-4 inset-x-0 flex justify-center"
          @click="feature.onClick"
        >
          <h4 style="color: var(--primary-color)">
            Learn More
            <UIcon name="i-heroicons-arrow-right-solid" />
          </h4>
        </div>
      </div>
    </GradientUCard>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  features: Array
});
</script>
