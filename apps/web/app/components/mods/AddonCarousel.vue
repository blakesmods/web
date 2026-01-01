<template>
  <div id="addons" class="text-center scroll-mt-24 mt-8">
    <span class="text-[24px] font-semibold" style="color: var(--primary-color)">
      {{ title }}
    </span>
    <h2>{{ subtitle }}</h2>
    <p class="my-2">{{ description }}</p>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
    <GradientUCard
      class="m-auto"
      :style="{
        '--primary-color': current.mod.primary_color,
        '--secondary-color': current.mod.secondary_color
      }"
    >
      <NuxtImg
        class="rounded-xl overflow-hidden shadow-lg"
        :src="current.mod.hero_images[0]"
        :alt="`${current.title} Feature Image`"
      />
    </GradientUCard>
    <div class="flex flex-col justify-center gap-4 order-first lg:order-last">
      <UCard
        v-for="addon in addons"
        class="flex flex-col"
        variant="soft"
        :ui="{
          body: 'p-0!'
        }"
      >
        <UButton
          class="flex w-full p-4 gap-2"
          :class="{
            'bg-accented/75': addon === current
          }"
          @click="current = addon"
        >
          <div class="flex items-center">
            <NuxtImg :src="addon.mod.logo" width="64" height="64" alt="" />
          </div>
          <div class="flex flex-col gap-2 text-start">
            <span
              class="block text-lg"
              :class="{ 'font-bold': addon === current }"
            >
              {{ addon.title }}
            </span>
            <p v-for="line in addon.description">
              {{ line }}
            </p>
          </div>
        </UButton>
        <div v-if="addon === current" class="flex gap-4 justify-center m-4">
          <UButton
            :to="addon.mod.url"
            class="btn-mod-outline"
            :style="`border-color: ${addon.mod.primary_color}`"
            variant="ghost"
          >
            Learn More
          </UButton>
          <UButton
            :to="`${addon.mod.url}/download`"
            class="btn-mod"
            :style="`background: ${addon.mod.primary_color}`"
            variant="ghost"
            trailing-icon="i-heroicons-arrow-down-tray-solid"
          >
            Download
          </UButton>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  description: String,
  addons: Array
});

const current = ref(props.addons[0]);
</script>
