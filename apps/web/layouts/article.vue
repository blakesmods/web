<template>
  <div class="flex flex-col min-h-screen pt-20">
    <Header />
    <div class="container h-[280px] mb-4">
      <Ad ad-slot="1098619789" />
    </div>
    <main class="flex flex-auto container mx-auto px-4">
      <div class="flex flex-nowrap flex-1 max-w-full justify-center">
        <div class="docs grid grid-cols-12 relative w-full min-h-[800px]">
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
            class="hidden lg:block min-w-[244px] max-h-96 lg:max-h-full col-span-3 pr-4 py-4 z-20 rounded overflow-y-auto lg:overflow-y-visible"
          >
            <div class="sticky top-24 w-full">
              <SidebarContent />
            </div>
          </div>
          <slot />
        </div>
      </div>
    </main>
    <div class="container my-8">
      <Ad ad-slot="6184538890" />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Ad from "~/components/Ad.vue";
import Footer from "~/components/default/Footer.vue";
import Header from "~/components/wiki/Header.vue";
import SidebarContent from "~/components/wiki/SidebarContent.vue";
import "~/assets/css/nuxt-content.scss";

const toggleSidebar = useEventBus("wiki:toggleSidebar");

const sidebar = ref(false);

toggleSidebar.on(() => {
  sidebar.value = !sidebar.value;
});
</script>
