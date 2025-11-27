<template>
  <div
    class="flex flex-col min-h-screen"
    :class="[isLatestVersion ? 'pt-20' : 'pt-32 sm:pt-28']"
  >
    <Header />
    <main class="flex flex-auto container mx-auto px-4">
      <div class="flex flex-nowrap flex-1 max-w-full justify-center">
        <div class="docs grid grid-cols-12 relative w-full min-h-[800px]">
          <USlideover side="left" v-model:open="sidebar">
            <template #content>
              <div class="flex flex-nowrap gap-4">
                <div class="flex flex-col w-full">
                  <ListingSidebarContent />
                </div>
                <div class="relative -top-1">
                  <UButton icon="i-heroicons-x-mark" @click="sidebar = false">
                    Close
                  </UButton>
                </div>
              </div>
            </template>
          </USlideover>
          <div
            class="hidden lg:block min-w-[244px] max-h-96 lg:max-h-full col-span-3 pr-4 py-4 z-20 rounded overflow-y-auto lg:overflow-y-visible"
          >
            <div class="sticky top-36 w-full">
              <ListingSidebarContent />
            </div>
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
import Header from "~/components/wiki/Header.vue";
import ListingSidebarContent from "~/components/wiki/ListingSidebarContent.vue";

const toggleSidebar = useEventBus("wiki:toggleSidebar");

const { isLatestVersion } = useWikiMetadata();

const sidebar = ref(false);

toggleSidebar.on(() => {
  sidebar.value = !sidebar.value;
});
</script>
