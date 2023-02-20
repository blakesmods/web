<template>
  <div
    class="flex flex-col min-h-screen pt-20 bg-surface-ground text-surface-text"
    :style="{
      '--primary-color': mod.primary_color,
      '--secondary-color': mod.secondary_color
    }"
  >
    <Header />
    <div class="container mb-4">
      <Ad ad-slot="1098619789" />
    </div>
    <main class="flex flex-auto container mx-auto px-4">
      <div class="flex flex-nowrap flex-1 max-w-full justify-center">
        <div class="docs grid grid-cols-12 relative w-full min-h-[800px]">
          <Sidebar v-model:visible="sidebar">
            <SidebarContent />
          </Sidebar>
          <div
            class="hidden lg:block min-w-[244px] max-h-96 lg:max-h-full col-span-3 pr-4 py-4 z-20 bg-surface-ground rounded overflow-y-auto lg:overflow-y-visible"
          >
            <Card class="sticky top-24 w-full">
              <template #content>
                <SidebarContent />
              </template>
            </Card>
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

const route = useRoute();
const mod = useMod(route.params.mod);
const toggleSidebar = useEventBus("wiki:toggleSidebar");

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
