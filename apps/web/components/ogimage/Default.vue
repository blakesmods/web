<template>
  <div class="flex w-screen h-screen bg-gray-900">
    <div class="flex flex-col gap-8 h-[600px]">
      <div class="flex relative w-full top-[80px] left-[224px]">
        <Logo class="w-[244px] h-[40px]" style="transform: scale(2.5)" />
      </div>
      <div
        v-if="title"
        class="flex relative top-[420px] left-[40px] text-white text-xl"
      >
        <h2>{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from "~/components/Logo.vue";

defineProps({
  title: String
});
</script>
