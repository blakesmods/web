<template>
  <div class="min-h-screen bg-surface-ground text-surface-text">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Footer from "~/components/default/Footer.vue";
import Header from "~/components/default/Header.vue";
</script>
