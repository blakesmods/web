<template>
  <div class="relative min-h-screen z-10">
    <Header />
    <div class="container relative flex h-[80vh] pt-16 items-center z-10">
      <UCard class="mx-auto text-center">
        <template #header>
          <h1 v-if="is404">Page Not Found</h1>
          <h1 v-else>An Error Occurred</h1>
        </template>
        <div class="flex flex-col justify-center items-center">
          <p v-if="is404">
            It looks like the page you were looking for either moved or never
            actually existed.
          </p>
          <p v-else>
            It seems like something went wrong. We'll get to the bottom of this
            as soon as possible.
          </p>
        </div>
        <template #footer>
          <div class="flex flex-wrap justify-center gap-4">
            <UButton size="lg" to="/">Home</UButton>
            <UButton size="lg" to="/docs">Docs</UButton>
            <UButton size="lg" to="/wiki">Wiki</UButton>
          </div>
        </template>
      </UCard>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/default/Header.vue";
import Footer from "~/components/default/Footer.vue";

const props = defineProps({
  error: Object
});

const is404 = computed(() => props.error && props.error.statusCode === 404);
</script>
