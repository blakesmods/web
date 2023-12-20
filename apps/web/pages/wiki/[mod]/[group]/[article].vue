<template>
  <div class="grid grid-cols-9 col-span-12 lg:col-span-9">
    <div class="col-span-12 lg:col-span-9 xl:col-span-7 w-full h-full">
      <div class="flex py-4 lg:ml-4 xl:mr-4 z-10 justify-between items-center">
        <div class="flex items-center gap-4">
          <UButton
            class="p-button-text !inline-flex lg:!hidden"
            ref="sidebarToggle"
            icon="i-heroicons-bars-3-solid"
            @click="onToggleSidebar"
          />
          <div class="flex flex-col gap-4">
            <UBreadcrumb :links="breadcrumbs" />
            <h1 class="flex items-center gap-4">
              <img
                v-if="page.icon"
                class="w-12 h-12 pixelated object-contain"
                :src="page.icon"
                :alt="page.title"
              />
              {{ page.title }}
            </h1>
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

        <template #empty>
          <div class="nuxt-content">
            This page is currently empty. Check back soon! 👀
          </div>
        </template>
      </ContentRenderer>

      <Ad
        class="m-4"
        ad-slot="8657831016"
        ad-layout="in-article"
        ad-format="fluid"
      />

      <div class="relative bottom-0">
        <div class="flex m-4 justify-between">
          <span v-if="false">Last Updated: {{ lastUpdated }}</span>
        </div>
        <Pagination :current="page" />
      </div>
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
    <USlideover v-if="hasTOC" class="xl:hidden" position="right" v-model="toc">
      <TOC :page="page" />
      <ContentLinks
        :edit-url="`https://github.com/blakesmods/web/edit/main/apps/web/content${page._path}.${page._extension}`"
      />
    </USlideover>
  </div>
</template>

<script setup>
import categories from "~/content/wiki/.categories.json";

import TOC from "~/components/TOC.vue";
import Pagination from "~/components/wiki/Pagination.vue";

definePageMeta({
  layout: "article"
});

const route = useRoute();
const toggleSidebar = useEventBus("wiki:toggleSidebar");

const { formatDate } = useFormatters();
const mod = useMod(route.params.mod);

const { data: page } = await useAsyncData(route.path, () =>
  queryContent(route.path).findOne()
);

const title = `${page.value.title} · ${mod.value.name} Wiki`;
const description = page.value.description;
const noindex = page.value._empty
  ? [{ hid: "noindex", name: "robots", content: "noindex" }]
  : [];

useHead({
  title: title,
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
    },
    ...noindex
  ]
});

const toc = ref(false);
const pathParts = page.value._path.split("/");

const breadcrumbs = computed(() =>
  [
    {
      label: "Wiki",
      icon: "i-heroicons-home",
      to: "/wiki"
    },
    pathParts.length > 2 && {
      label: mod.value.name,
      icon: "i-heroicons-squares-2x2",
      to: pathParts.length > 3 ? pathParts.slice(0, 3).join("/") : undefined
    },
    pathParts.length > 3 && {
      label: categories[pathParts[3]] ?? pathParts[3],
      icon: "i-heroicons-square-3-stack-3d"
    },
    pathParts.length > 4 && {
      label: page.value.title,
      icon: "i-heroicons-book-open"
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
  () => route.path,
  () => {
    toc.value = false;
  }
);

function onToggleSidebar() {
  toggleSidebar.emit();
}
</script>
