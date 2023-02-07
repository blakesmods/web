<template>
  <div class="grid grid-cols-9 col-span-12 lg:col-span-9">
    <div
      class="col-span-12 lg:col-span-9 xl:col-span-7 w-full h-full lg:border-l xl:border-r border-surface-border"
    >
      <div
        class="flex sticky top-16 py-4 lg:pl-4 xl:pr-4 z-10 justify-between items-center bg-surface-ground border-b border-surface-border"
      >
        <div class="flex items-center gap-4">
          <Button
            class="p-button-text !inline-flex lg:!hidden"
            ref="sidebarToggle"
            icon="pi pi-bars"
            @click="onToggleSidebar"
          />
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
        <Button
          v-if="hasTOC"
          ref="tocToggle"
          class="p-button-text !inline-flex xl:!hidden"
          icon="pi pi-list"
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
        class="mt-4"
        ad-slot="8657831016"
        ad-layout="in-article"
        ad-format="fluid"
      />

      <div class="relative bottom-0">
        <div class="flex m-4 justify-between">
          <a
            :href="`https://github.com/blakesmods/web/edit/main/apps/web/content${page._path}.${page._extension}`"
            target="_blank"
            rel="noreferrer"
          >
            <i class="pi pi-file-edit"></i>
            Edit this page on GitHub
          </a>
          <span v-if="false">Last Updated: {{ lastUpdated }}</span>
        </div>
        <Pagination :current="page" />
      </div>
    </div>
    <div
      class="hidden xl:block col-span-2 min-w-[220px] max-h-96 xl:max-h-min py-4 pl-4 z-10 xl:z-0 rounded overflow-y-auto xl:overflow-y-visible"
    >
      <div class="sticky top-20 w-full space-y-4">
        <Card v-if="hasTOC">
          <template #content>
            <TOC :page="page" />
          </template>
        </Card>
      </div>
    </div>
    <Sidebar
      v-if="hasTOC"
      class="lg:hidden"
      position="right"
      v-model:visible="toc"
    >
      <TOC :page="page" />
    </Sidebar>
  </div>
</template>

<script setup>
import CodeCopyButton from "~/components/CodeCopyButton.vue";
import TOC from "~/components/wiki/TOC.vue";
import Pagination from "~/components/wiki/Pagination.vue";

definePageMeta({
  layout: "article"
});

const nuxtApp = useNuxtApp();

const route = useRoute();
const toggleSidebar = useEventBus("wiki:toggleSidebar");
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

const hasTOC = computed(
  () => page.value.body.toc && page.value.body.toc.links.length
);

const lastUpdated = computed(() =>
  nuxtApp.$formatDate(page.value.updatedAt, "YYYY/MM/DD")
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

onMounted(() => {
  setTimeout(() => {
    const blocks = document.getElementsByClassName("nuxt-content-highlight");

    for (const block of blocks) {
      const component = defineComponent({ extends: CodeCopyButton });
      const div = document.createElement("div");

      block.appendChild(div);
      createApp(component).mount(div);
    }
  }, 100);
});
</script>
