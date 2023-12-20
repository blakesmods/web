<template>
  <div class="grid grid-cols-9 col-span-12 lg:col-span-9">
    <div class="col-span-12 lg:col-span-9 xl:col-span-7 w-full h-full px-4">
      <div
        class="flex py-8 lg:ml-4 xl:mr-4 z-10 justify-between items-center border-b border-gray-200 dark:border-gray-800"
      >
        <div class="flex items-center gap-4">
          <UButton
            class="!inline-flex lg:!hidden"
            ref="sidebarToggle"
            icon="i-heroicons-bars-3-solid"
            @click="onToggleSidebar"
          />
          <div class="flex flex-col gap-4">
            <UBreadcrumb :links="breadcrumbs" />
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
      <TOC :page="page" />
      <ContentLinks
        :edit-url="`https://github.com/blakesmods/web/edit/main/apps/web/content${page._path}.${page._extension}`"
      />
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

const { data: page } = await useAsyncData(route.path, () =>
  queryContent(route.path).findOne()
);

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const toc = ref(false);
const pathParts = page.value._path.split("/");

const breadcrumbs = computed(() =>
  [
    {
      label: "Docs",
      icon: "i-heroicons-home",
      to: "/docs"
    },
    pathParts.length > 2 && {
      label: page.value.category,
      icon: "i-heroicons-square-3-stack-3d",
      to: pathParts.length > 3 ? pathParts.slice(0, 3).join("/") : undefined
    },
    pathParts.length > 3 && {
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

function onToggleSidebar() {
  toggleSidebar.emit();
}
</script>
