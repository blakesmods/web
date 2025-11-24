<template>
  <div
    class="flex flex-col min-h-screen pt-8"
    :class="[isLatestVersion ? 'pt-8' : 'pt-32 sm:pt-28']"
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

const { isLatestVersion } = useWikiMetadata();
</script>
