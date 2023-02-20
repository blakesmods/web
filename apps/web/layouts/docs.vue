<template>
  <div
    class="flex flex-col min-h-screen pt-16 bg-surface-ground text-surface-text"
    :style="{
      '--primary-color': mod.primary_color,
      '--secondary-color': mod.secondary_color
    }"
  >
    <Header />
    <main class="flex flex-auto container mx-auto px-4">
      <div class="flex flex-nowrap flex-1 max-w-full justify-center">
        <div class="grid grid-cols-12 relative w-full min-h-[800px]">
          <Sidebar v-model:visible="sidebar">
            <SidebarContent />
          </Sidebar>
          <div
            class="hidden lg:block min-w-[244px] max-h-96 lg:max-h-full col-span-3 pr-4 py-8 z-20 bg-surface-ground rounded overflow-y-auto lg:overflow-y-visible"
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

const sidebar = ref(false);

const mod = computed(() => {
  if (route.path.startsWith("/docs")) {
    return useMod(route.path.split("/")[2]).value;
  } else {
    return {};
  }
});

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
