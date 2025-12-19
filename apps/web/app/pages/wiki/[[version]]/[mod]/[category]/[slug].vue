<template>
  <div class="grid grid-cols-9 col-span-12 lg:col-span-9">
    <div
      class="col-span-12 lg:col-span-9 xl:col-span-7 w-full h-full py-4 lg:pl-4 xl:pr-4"
    >
      <div class="flex py-4 z-10 justify-between items-center">
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
          <h1 class="flex items-center gap-4">
            <NuxtImg
              v-if="page.icon"
              class="w-12 h-12 pixelated object-contain"
              width="48"
              height="48"
              :src="page.icon"
              :alt="page.title"
            />
            {{ page.title }}
          </h1>
          <span v-if="page.version" class="opacity-80">
            <i>Added in version {{ page.version }}</i>
          </span>
        </div>
      </div>

      <ContentRenderer class="nuxt-content" :value="page">
        <template #empty>
          <div class="nuxt-content">
            This page is currently empty. Check back soon! 👀
          </div>
        </template>
      </ContentRenderer>

      <ContentEditSeparator :page="page" />

      <div class="flex flex-col gap-2 mb-4">
        <Pagination :current="page" />
        <BisectHostingBanner source="wiki" />
      </div>
    </div>
    <div
      class="hidden xl:block col-span-2 min-w-[220px] max-h-96 py-8 pl-4 z-10 xl:z-0 overflow-y-auto xl:overflow-y-visible"
    >
      <div
        class="sticky w-full space-y-4"
        :class="[isLatestVersion ? 'top-24' : 'top-32']"
      >
        <TOC v-if="hasTOC" :page="page" />
        <ContentLinks :page="page" />
      </div>
    </div>
    <USlideover
      v-if="hasTOC"
      class="xl:hidden"
      position="right"
      v-model:open="toc"
    >
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
import ContentEditSeparator from "~/components/ContentEditSeparator.vue";
import TOC from "~/components/TOC.vue";
import Pagination from "~/components/wiki/Pagination.vue";

definePageMeta({
  layout: "article",
  middleware: "ignore-js-map"
});

const route = useRoute();
const toggleSidebar = useEventBus("wiki:toggleSidebar");

const { version, mod, isLatestVersion } = useWikiMetadata();

const page = await useWiki();

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: true
  });
}

const title = `${page.value.title} · ${mod.value.name} Wiki`;
const description = parseDescription(page.value);

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

const breadcrumbs = computed(() =>
  [
    {
      label: "Wiki",
      to: isLatestVersion.value ? "/wiki" : `/wiki/${version.value}`
    },
    pathParts.length > 2 && {
      label: version.value
    },
    pathParts.length > 3 && {
      label: mod.value.name,
      to: pathParts.length > 4 ? pathParts.slice(0, 4).join("/") : undefined
    },
    pathParts.length > 4 && {
      label: getWikiCategoryName(pathParts[4])
    },
    pathParts.length > 5 && {
      label: page.value.title
    }
  ].filter(Boolean)
);

const hasTOC = computed(
  () => page.value.body.toc && page.value.body.toc.links.length
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

function parseDescription(page) {
  if (page.description) {
    return page.description;
  }

  const index = page.body.value.findIndex(
    c => c[0] === "h2" && c[2] === "Overview"
  );

  if (index > -1 && index + 1 < page.body.value.length) {
    // the special case for the second nested children is for links
    return page.body.value[index + 1]
      .slice(2)
      .reduce((a, b) => a + (Array.isArray(b) ? b.slice(2).join(" ") : b), "");
  }
}
</script>
