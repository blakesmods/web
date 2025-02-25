<template>
  <div class="grid grid-cols-9 col-span-12 lg:col-span-9">
    <div class="col-span-12 lg:col-span-9 xl:col-span-7 w-full h-full">
      <div class="flex py-4 lg:ml-4 xl:mr-4 z-10 justify-between items-center">
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

      <ContentRenderer :value="page">
        <ContentRendererMarkdown class="nuxt-content" :value="page" />

        <template #empty>
          <div class="nuxt-content">
            This page is currently empty. Check back soon! 👀
          </div>
        </template>
      </ContentRenderer>

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
import Pagination from "~/components/wiki/Pagination.vue";

definePageMeta({
  layout: "article",
  middleware: "ignore-js-map"
});

const route = useRoute();
const toggleSidebar = useEventBus("wiki:toggleSidebar");

const { version, mod: modID } = useWikiMetadata();
const mod = getMod(modID.value);

const page = await useWiki();

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const title = `${page.value.title} · ${mod.name} Wiki`;
const description = parseDescription(page.value);
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
      to: "/wiki"
    },
    pathParts.length > 2 && {
      label: version.value
    },
    pathParts.length > 3 && {
      label: mod.name,
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

function parseDescription(page) {
  if (page.description) {
    return page.description;
  }

  const index = page.body.children.findIndex(
    c => c.tag === "h2" && c.children[0]?.value === "Overview"
  );

  if (index > -1 && index + 1 < page.body.children.length) {
    // the special case for the second nested children is for links
    return page.body.children[index + 1].children?.reduce(
      (a, b) => a + (b.children ? b.children[0].value : b.value),
      ""
    );
  }
}
</script>
