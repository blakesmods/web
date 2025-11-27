<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 my-20 gap-8">
    <div class="flex flex-col justify-center items-center gap-4">
      <h3>{{ current.title }}</h3>
      <NuxtImg
        class="rounded-xl overflow-hidden shadow-lg"
        :src="current.mod.hero_images[0]"
        :alt="`${current.title} Feature Image`"
      />
      <div class="flex gap-4">
        <UButton variant="primary" :to="current.mod.url">Learn More</UButton>
        <UButton variant="primary" :to="`${current.mod.url}/download`">
          Download
        </UButton>
      </div>
    </div>
    <div class="flex flex-col gap-4 order-first lg:order-last">
      <div>
        <span
          class="text-[24px] font-semibold"
          style="color: var(--primary-color)"
        >
          {{ title }}
        </span>
        <h2>{{ subtitle }}</h2>
        <p class="my-2">{{ description }}</p>
      </div>
      <UButton
        v-for="feature in features"
        class="flex p-4 gap-2"
        color="neutral"
        @click="current = feature"
      >
        <div class="flex items-center">
          <NuxtImg :src="feature.mod.logo" width="64" height="64" alt="" />
        </div>
        <div class="flex flex-col gap-2 text-start">
          <span
            class="block text-lg"
            :class="{ 'font-bold': feature === current }"
          >
            {{ feature.title }}
          </span>
          <p v-for="line in feature.description">
            {{ line }}
          </p>
        </div>
      </UButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  description: String,
  features: Array
});

const current = ref(props.features[0]);
</script>
