<template>
  <div
    class="flex flex-col min-h-screen"
    :class="[isLatestVersion ? 'pt-16' : 'pt-28 sm:pt-24']"
  >
    <Header />
    <main class="flex flex-auto container mx-auto px-4">
      <div class="flex flex-nowrap flex-1 max-w-full justify-center">
        <div class="grid grid-cols-12 relative w-full min-h-[800px]">
          <USlideover side="left" v-model="sidebar">
            <div class="flex flex-nowrap gap-4">
              <div class="flex flex-col w-full">
                <SidebarContent />
              </div>
              <div class="relative -top-1">
                <UButton icon="i-heroicons-x-mark" @click="sidebar = false">
                  Close
                </UButton>
              </div>
            </div>
          </USlideover>
          <div
            class="hidden lg:block sticky top-[65px] min-w-[244px] max-h-96 lg:max-h-[calc(100vh-65px)] col-span-3 pr-2 py-8 z-20 rounded overflow-y-auto"
          >
            <SidebarContent />
          </div>
          <slot />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "~/components/default/Footer.vue";
import Header from "~/components/docs/Header.vue";
import SidebarContent from "~/components/docs/SidebarContent.vue";
import "~/assets/css/nuxt-content.scss";

const route = useRoute();
const toggleSidebar = useEventBus("docs:toggleSidebar");

const { isLatestVersion } = useDocsMetadata();

const sidebar = ref(false);

watch(
  () => route.path,
  () => {
    sidebar.value = false;
  }
);

toggleSidebar.on(() => {
  sidebar.value = !sidebar.value;
});
</script>
