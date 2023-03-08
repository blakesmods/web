<template>
  <div
    class="flex flex-col min-h-screen pt-8 bg-surface-ground text-surface-text"
  >
    <Header />
    <main class="flex flex-auto container mx-auto px-4 py-8">
      <div class="flex flex-nowrap flex-1 max-w-full justify-center">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "~/components/default/Footer.vue";
import Header from "~/components/wiki/Header.vue";
</script>
