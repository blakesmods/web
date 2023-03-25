<template>
  <NuxtLink class="group" :to="link">
    <Card class="transition hover:scale-105 active:scale-100">
      <template #content>
        <div class="flex gap-4 mr-4">
          <img :src="icon" class="w-16 h-16" />
          <div class="flex flex-col justify-center">
            <h2
              class="!mt-0 hover:!pl-0 text-base group-hover:underline underline-offset-4 !border-none"
            >
              {{ name }}
            </h2>
            <span class="text-surface-text/80">Click to view docs</span>
          </div>
        </div>
      </template>
    </Card>
  </NuxtLink>
</template>

<script setup>
defineProps({
  icon: String,
  link: String,
  name: String
});
</script>
