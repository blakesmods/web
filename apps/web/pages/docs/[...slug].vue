<template>
  <div class="grid grid-cols-9 col-span-12 lg:col-span-9">
    <div class="col-span-12 lg:col-span-9 xl:col-span-7 w-full h-full px-4">
      <div class="flex py-8 lg:ml-4 xl:mr-4 z-10 justify-between items-center">
        <div class="flex items-center gap-4">
          <UButton
            class="!inline-flex lg:!hidden"
            ref="sidebarToggle"
            icon="i-heroicons-bars-3-solid"
            @click="onToggleSidebar"
          />
          <div class="flex flex-col gap-2">
            <span class="text-primary-500 font-bold lvl1">
              {{ page.category }}
            </span>
            <h1>{{ page.title }}</h1>
          </div>
        </div>
        <UButton
          v-if="hasTOC"
          ref="tocToggle"
          class="!inline-flex xl:!hidden"
          icon="i-heroicons-bars-3-solid"
          @click="toc = !toc"
        />
      </div>

      <ContentRenderer :value="page">
        <ContentRendererMarkdown class="nuxt-content" :value="page" />
      </ContentRenderer>

      <div class="flex justify-between lg:px-4 py-4">
        <UButton
          :to="`https://github.com/blakesmods/web/edit/main/apps/web/content${page._path}.${page._extension}`"
          target="_blank"
          variant="ghost"
          rel="noopener noreferrer"
        >
          <UIcon name="i-heroicons-pencil-square-solid" />
          Edit this page on GitHub
        </UButton>
        <span v-if="false">Last Updated: {{ lastUpdated }}</span>
      </div>
      <Pagination :current="page" />
    </div>
    <div
      class="hidden xl:block col-span-2 min-w-[220px] max-h-96 xl:max-h-min py-4 pl-4 z-10 xl:z-0 rounded overflow-y-auto xl:overflow-y-visible"
    >
      <div class="sticky top-24 w-full space-y-4">
        <TOC v-if="hasTOC" :page="page" />
      </div>
    </div>
    <USlideover v-if="hasTOC" class="xl:hidden" side="right" v-model="toc">
      <TOC :page="page" />
    </USlideover>
  </div>
</template>

<script setup>
import Pagination from "~/components/docs/Pagination.vue";
import TOC from "~/components/wiki/TOC.vue";

definePageMeta({
  layout: "docs"
});

const route = useRoute();
const toggleSidebar = useEventBus("docs:toggleSidebar");

const { formatDate } = useFormatters();

const { data: page } = await useAsyncData(route.path, () =>
  queryContent(route.path).findOne()
);

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const toc = ref(false);

const hasTOC = computed(
  () => page.value.body.toc && page.value.body.toc.links.length
);

const lastUpdated = computed(() =>
  formatDate(page.value.updatedAt, "YYYY/MM/DD")
);

function onToggleSidebar() {
  toggleSidebar.emit();
}
</script>
