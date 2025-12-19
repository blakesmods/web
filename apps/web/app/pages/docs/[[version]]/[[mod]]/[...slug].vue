<template>
  <div class="grid grid-cols-9 col-span-12 lg:col-span-9">
    <div
      class="col-span-12 lg:col-span-9 xl:col-span-7 w-full h-full lg:pl-4 xl:pr-4"
    >
      <div class="flex pt-8 z-10 justify-between items-center">
        <div class="flex flex-col w-full gap-4">
          <div class="flex items-center gap-4">
            <UButton
              class="inline-flex! lg:hidden!"
              ref="sidebarToggle"
              icon="i-heroicons-bars-3-solid"
              aria-label="View navigation button"
              @click="onToggleSidebar"
            />
            <UBreadcrumb :items="breadcrumbs" />
            <UButton
              v-if="hasTOC"
              ref="tocToggle"
              class="inline-flex! xl:hidden! ml-auto"
              icon="i-heroicons-bars-3-solid"
              aria-label="View table of contents button"
              @click="toc = !toc"
            />
          </div>
          <h1>{{ page.title }}</h1>
        </div>
      </div>

      <ContentRenderer class="nuxt-content" :value="page" />
      <ContentEditSeparator :page="page" />
      <Pagination :current="page" />
    </div>
    <div
      class="hidden xl:block col-span-2 min-w-[220px] min-h-full max-h-96 py-8 pl-4 z-10 xl:z-0 overflow-y-auto xl:overflow-y-visible"
    >
      <div
        class="sticky w-full space-y-4"
        :class="[isLatestVersion ? 'top-24' : 'top-32']"
      >
        <TOC v-if="hasTOC" :page="page" />
        <ContentLinks :page="page" />
      </div>
    </div>
    <USlideover v-if="hasTOC" class="xl:hidden" side="right" v-model:open="toc">
      <template #content>
        <div class="flex flex-nowrap gap-4">
          <div class="flex flex-col w-full">
            <TOC :page="page" />
            <ContentLinks :page="page" />
          </div>
          <div class="relative -top-1">
            <UButton icon="i-heroicons-x-mark" @click="toc = false">
              Close
            </UButton>
          </div>
        </div>
      </template>
    </USlideover>
  </div>
</template>

<script setup>
import TOC from "~/components/TOC.vue";
import Pagination from "~/components/docs/Pagination.vue";

definePageMeta({
  layout: "docs",
  middleware: "ignore-js-map"
});

const route = useRoute();
const toggleSidebar = useEventBus("docs:toggleSidebar");

const page = await useDoc();

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: true
  });
}

const title = page.value.category
  ? `${page.value.title} · ${page.value.category} Documentation`
  : page.value.title;
const description = page.value.description;

useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
  description,
  ogDescription: description,
  twitterDescription: description
});

const toc = ref(false);
const pathParts = page.value.path.split("/");

const { version, isLatestVersion } = useDocsMetadata();

const breadcrumbs = computed(() =>
  [
    pathParts.length > 2 && {
      label: "Docs",
      to: isLatestVersion.value ? "/docs" : `/docs/${version.value}`
    },
    pathParts.length > 3 && {
      label: version.value
    },
    pathParts.length > 3 && {
      label: page.value.category,
      to:
        pathParts.length > 4
          ? isLatestVersion
            ? pathParts
                .slice(0, 4)
                .filter(s => s !== version.value)
                .join("/")
            : pathParts.slice(0, 4).join("/")
          : undefined
    },
    pathParts.length > 4 && {
      label: page.value.title
    }
  ].filter(Boolean)
);

const hasTOC = computed(
  () => page.value.body.toc && page.value.body.toc.links.length
);

const lastUpdated = computed(() =>
  formatDate(page.value.updatedAt, "YYYY/MM/DD")
);

watch(
  () => route.fullPath,
  () => {
    toc.value = false;
  }
);

function onToggleSidebar() {
  toggleSidebar.emit();
}
</script>
