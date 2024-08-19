<template>
  <div
    class="flex flex-col pt-24"
    :style="{
      '--primary-color': mod.primary_color,
      '--secondary-color': mod.secondary_color
    }"
  >
    <GradientBackground />

    <Header filled download-link="#">
      <NuxtLink v-if="mod.has_docs" :to="`/docs/${mod.mod_id}`">Docs</NuxtLink>
      <NuxtLink v-if="mod.has_wiki" :to="`/wiki/${mod.mod_id}`">Wiki</NuxtLink>

      <a :href="mod.github_link" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a :href="mod.curseforge_link" target="_blank" rel="noopener noreferrer">
        CurseForge
      </a>
      <a :href="mod.modrinth_link" target="_blank" rel="noopener noreferrer">
        Modrinth
      </a>
    </Header>

    <div class="container relative mx-auto px-4 z-20">
      <Ad ad-slot="3524901792" />
      <h1 class="mt-8 mb-8 text-center">Download {{ mod.name }}</h1>
    </div>
    <div
      class="container relative flex flex-col w-full m-auto px-4 pb-8 gap-8 z-20"
    >
      <UCard>
        <div class="flex flex-col gap-4">
          <div class="flex justify-between">
            <ULink :to="`${mod.url}/download`" size="lg">
              <UIcon icon="i-heroicons-arrow-left-solid" />
              Back to List
            </ULink>
            <UButton
              variant="primary"
              size="lg"
              trailing-icon="i-heroicons-arrow-down-tray-solid"
              :disabled="downloadPending"
              :aria-label="`Download file ${file.file_name}`"
              @click="onDownloadFile(file)"
            >
              <span class="font-bold">Download File</span>
            </UButton>
          </div>
          <div>
            <h4>File Name</h4>
            <span>{{ file.file_name }}</span>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
          >
            <div>
              <h4>Mod Version</h4>
              <span>{{ file.mod_version }}</span>
            </div>
            <div>
              <h4>Minecraft Version</h4>
              <span>{{ file.mc_versions.join(", ") }}</span>
            </div>
            <div>
              <h4>Mod Loader</h4>
              <span>{{ file.mod_loader }}</span>
            </div>
            <div>
              <h4>Release Date</h4>
              <span>{{ formatDate(file.upload_date, "MM/DD/YYYY") }}</span>
            </div>
            <div>
              <h4>File Size</h4>
              <span>{{ formatNumber(file.file_size, "0.00 b") }}</span>
            </div>
            <div>
              <h4>Java Version</h4>
              <span>{{ file.java_version }}</span>
            </div>
            <div>
              <h4>MD5 Hash</h4>
              <span>{{ file.md5_hash }}</span>
            </div>
            <div>
              <h4>Downloads</h4>
              <span>{{ formatDownloadCount(file, "0,0") }} downloads</span>
            </div>
          </div>
          <UDivider />
          <div>
            <h4>Changelog</h4>
            <span v-html="file.changelog"></span>
          </div>
        </div>
      </UCard>
      <BisectHostingBanner />
    </div>
  </div>
</template>

<script setup>
import Ad from "~/components/Ad.vue";
import GradientBackground from "~/components/GradientBackground.vue";
import Header from "~/components/mods/Header.vue";

const props = defineProps({
  modId: String
});

const { params } = useRoute();

const mod = useMod(props.modId);
const { formatDate, formatNumber } = useFormatters();

defineOgImageComponent("Mod", {
  logo: mod.value.logo,
  primaryColor: mod.value.primary_color,
  secondaryColor: mod.value.secondary_color
});

const title = `Download ${mod.value.name}`;
const description = `The official download source of ${mod.value.name} for Minecraft`;

const file = ref({});
const downloadPending = ref(false);

const { data } = await useAPI(`/v2/files/${params.version}/info`);

file.value = data.value.data;

useHead({
  title,
  meta: [
    { hid: "noindex", name: "robots", content: "noindex" },
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

function formatDownloadCount(file, format) {
  const count =
    file.site_downloads + file.curseforge_downloads + file.modrinth_downloads;

  return formatNumber(count, format);
}

async function onDownloadFile(file) {
  if (downloadPending.value) {
    return;
  }

  downloadPending.value = file._id;

  const { data } = await useAPI(`/v2/files/${file._id}`);

  if (data.value.success) {
    window.open(data.value.data.url, "_self");
  }

  setTimeout(() => {
    downloadPending.value = null;
  }, 4000);
}
</script>
