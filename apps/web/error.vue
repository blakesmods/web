<template>
  <ErrorBackground />
  <div class="relative min-h-screen z-10">
    <Header />
    <div class="container relative flex h-[80vh] pt-16 items-center z-10">
      <Card class="flex mx-auto text-center">
        <template #title>
          <h1 v-if="is404">Page Not Found</h1>
          <h1 v-else>An Error Occurred</h1>
        </template>
        <template #content>
          <div class="flex flex-col justify-center items-center">
            <p v-if="is404">
              It looks like the page you were looking for either moved or never
              actually existed.
            </p>
            <p v-else>
              It seems like something went wrong. We'll get to the bottom of
              this as soon as possible.
            </p>
            <Divider />
            <div class="flex flex-wrap justify-center gap-4">
              <NuxtLink to="/">
                <Button>Home</Button>
              </NuxtLink>
              <NuxtLink to="/docs">
                <Button>Docs</Button>
              </NuxtLink>
              <NuxtLink to="/wiki">
                <Button>Wiki</Button>
              </NuxtLink>
            </div>
          </div>
        </template>
      </Card>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/default/Header.vue";
import Footer from "~/components/default/Footer.vue";
import ErrorBackground from "~/components/ErrorBackground.vue";

const props = defineProps({
  error: Object
});

const is404 = computed(() => props.error && props.error.statusCode === 404);
</script>
