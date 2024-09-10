<template>
  <div class="grid grid-cols-9 col-span-12 lg:col-span-9">
    <div
      class="col-span-12 lg:col-span-9 xl:col-span-7 w-full h-full lg:pl-4 xl:pr-4"
    >
      <div class="flex py-8 lg:ml-4 xl:mr-4 z-10 justify-between items-center">
        <div class="flex flex-col w-full gap-4">
          <div class="flex items-center gap-4">
            <UButton
              class="!inline-flex lg:!hidden"
              ref="sidebarToggle"
              icon="i-heroicons-bars-3-solid"
              aria-label="View navigation button"
              @click="onToggleSidebar"
            />
            <UBreadcrumb :links="breadcrumbs" />
            <UButton
              v-if="hasTOC"
              ref="tocToggle"
              class="!inline-flex xl:!hidden ml-auto"
              icon="i-heroicons-bars-3-solid"
              aria-label="View table of contents button"
              @click="toc = !toc"
            />
          </div>
          <h1>{{ page.title }}</h1>
        </div>
      </div>

      <ContentRenderer :value="page">
        <ContentRendererMarkdown class="nuxt-content" :value="page" />
      </ContentRenderer>

      <div class="flex justify-between lg:px-4 py-4">
        <span v-if="false">Last Updated: {{ lastUpdated }}</span>
      </div>
      <Pagination :current="page" />
    </div>
    <div
      class="hidden xl:block col-span-2 min-w-[220px] max-h-96 xl:max-h-min py-4 pl-4 z-10 xl:z-0 rounded overflow-y-auto xl:overflow-y-visible"
    >
      <div class="sticky top-24 w-full space-y-4">
        <TOC v-if="hasTOC" :page="page" />
        <ContentLinks
          :edit-url="`https://github.com/blakesmods/web/edit/main/apps/web/content${page._path}.${page._extension}`"
        />
      </div>
    </div>
    <USlideover v-if="hasTOC" class="xl:hidden" side="right" v-model="toc">
      <div class="flex flex-nowrap gap-4">
        <div class="flex flex-col w-full">
          <TOC :page="page" />
          <ContentLinks
            :edit-url="`https://github.com/blakesmods/web/edit/main/apps/web/content${page._path}.${page._extension}`"
          />
        </div>
        <div class="relative -top-1">
          <UButton icon="i-heroicons-x-mark" @click="toc = false">
            Close
          </UButton>
        </div>
      </div>
    </USlideover>
  </div>
</template>

<script setup>
import TOC from "~/components/TOC.vue";
import Pagination from "~/components/docs/Pagination.vue";

definePageMeta({
  layout: "docs"
});

const route = useRoute();
const toggleSidebar = useEventBus("docs:toggleSidebar");

const { formatDate } = useFormatters();

const page = await useDoc();

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const title = page.value.category
  ? `${page.value.title} · ${page.value.category} Documentation`
  : page.value.title;
const description = page.value.description;

useHead({
  title,
  meta: [
    {
      hid: "description",
      name: "description",
      content: description
    },
    // Open Graph
    { hid: "og:title", property: "og:title", content: title },
    {
      hid: "og:description",
      property: "og:description",
      content: description
    },
    // Twitter Card
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: title
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description
    }
  ]
});

const toc = ref(false);
const pathParts = page.value._path.split("/");

const version = useDocsVersion();
const isLatestVersion = useDocsIsLatestVersion();

const breadcrumbs = computed(() =>
  [
    pathParts.length > 2 && {
      label: "Docs",
      to: isLatestVersion ? "/docs" : `/docs/${version.value}`
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
