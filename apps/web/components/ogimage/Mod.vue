<template>
  <div class="flex w-screen h-screen bg-gray-900">
    <div
      class="absolute w-[1200px] h-[600px] left-0 right-0 opacity-50"
      :style="{
        background: `linear-gradient(270deg, ${secondaryColor} -12.17%, ${primaryColor} 114.78%)`,
        filter: 'blur(250px)',
        'mix-blend-mode': 'normal'
      }"
    ></div>
    <div class="flex flex-col h-[600px]">
      <div class="flex relative w-full top-[80px] left-[224px]">
        <Logo class="w-[244px] h-[40px]" style="transform: scale(2.5)" />
      </div>
      <div class="flex relative top-[432px] left-[40px] text-white text-xl">
        <h1>{{ title }}</h1>
      </div>
      <div class="flex relative top-[284px] left-[1050px]">
        <img :src="logoURL" width="128" height="128" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from "~/components/Logo.vue";

const props = defineProps({
  title: String,
  logo: String,
  primaryColor: String,
  secondaryColor: String
});

const logoURL =
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://blakesmods.com") + props.logo;
</script>
