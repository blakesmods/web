<template>
  <div class="files w-full">
    <UCard
      :ui="{ header: { background: 'bg-white dark:bg-gray-900 rounded-t-lg' } }"
    >
      <template #header>
        <div
          class="flex flex-col xl:flex-row justify-between items-center gap-8"
        >
          <div class="flex items-center gap-4 text-2xl font-bold">
            <UIcon class="w-8 h-8" name="i-heroicons-information-circle" />
            Cucumber Library is required to use this mod.
          </div>
          <UButton
            :to="cucumberURL"
            target="_blank"
            color="gray"
            trailing-icon="i-heroicons-arrow-top-right-on-square-solid"
          >
            Get Cucumber
          </UButton>
        </div>
      </template>

      <div
        class="flex flex-col md:flex-row gap-4 pb-6 mb-6 border-b border-gray-300 dark:border-gray-700"
      >
        <UFormGroup class="w-full md:w-64" label="Minecraft Version">
          <div class="flex">
            <USelectMenu
              class="w-full"
              placeholder="Select..."
              searchable
              :options="versions"
              v-model="version"
            />
            <UTooltip v-if="version" text="Reset">
              <UButton
                color="gray"
                icon="i-heroicons-x-circle"
                variant="ghost"
                aria-label="Clear Minecraft version filter"
                @click="version = undefined"
              />
            </UTooltip>
          </div>
        </UFormGroup>
        <UFormGroup class="w-full md:w-64" label="Mod Loader">
          <div class="flex">
            <USelectMenu
              class="w-full"
              placeholder="Select..."
              searchable
              :options="loaders"
              v-model="loader"
            />
            <UTooltip v-if="loader" text="Reset">
              <UButton
                color="gray"
                icon="i-heroicons-x-circle"
                variant="ghost"
                aria-label="Clear mod loader filter"
                @click="loader = undefined"
              />
            </UTooltip>
          </div>
        </UFormGroup>
      </div>

      <UTable
        :columns="columns"
        :rows="files"
        :loading="pending"
        v-model:expand="expand"
      >
        <template #file_name-data="{ row }">
          <NuxtLink :to="`./download/${row._id}`">
            {{ row.file_name }}
          </NuxtLink>
        </template>
        <template #upload_date-data="{ row }">
          <div class="flex justify-end items-center">
            <UTooltip
              :text="formatDate(row.upload_date, 'ddd, MMM D, YYYY h:mm A')"
            >
              {{ formatDate(row.upload_date, "MM/DD/YYYY") }}
            </UTooltip>
          </div>
        </template>
        <template #mod_loader-data="{ row }">
          <div class="flex justify-end items-center">
            {{ row.mod_loader }}
          </div>
        </template>
        <template #downloads-data="{ row }">
          <div class="flex justify-end items-center">
            <UTooltip
              class="mr-4 font-bold"
              :text="`${formatDownloadCount(row, '0,0')} downloads`"
            >
              {{ formatDownloadCount(row, "0[.]0a") }}
            </UTooltip>
            <UButton
              color="gray"
              :trailing-icon="
                downloadPending && row._id === downloadPending
                  ? null
                  : 'i-heroicons-arrow-down-tray-solid'
              "
              :disabled="downloadPending"
              :loading="downloadPending && row._id === downloadPending"
              :aria-label="`Download file ${row.file_name}`"
              @click="onDownloadFile(row)"
            />
          </div>
        </template>

        <template #expand="{ row }">
          <div class="flex flex-wrap gap-4 p-4 justify-between">
            <div class="col-span-1">
              <h5>Java Version</h5>
              <span>{{ row.java_version }}</span>
            </div>
            <div class="col-span-1">
              <h5>Minecraft Version</h5>
              <span>{{ row.mc_version }}</span>
            </div>
            <div class="col-span-1">
              <h5>File Size</h5>
              <span>{{ formatNumber(row.file_size, "0.00 b") }}</span>
            </div>
            <div class="col-span-2 lg:col-span-5 xl:col-span-2">
              <h5>MD5 Hash</h5>
              <span>{{ row.md5_hash }}</span>
            </div>
            <div class="w-full">
              <h4>Changelog</h4>
              <span v-html="row.changelog"></span>
            </div>
          </div>
        </template>
      </UTable>

      <div class="flex p-4 justify-center">
        <UPagination
          show-last
          show-first
          :page-count="10"
          :total="count"
          v-model="page"
        />
      </div>
    </UCard>
  </div>
</template>

<script setup>
const props = defineProps({
  mod: String
});

const route = useRoute();
const router = useRouter();

const files = ref([]);
const count = ref(0);
const versions = ref([]);
const loaders = ref([]);
const downloadPending = ref(false);

const columns = [
  {
    key: "file_name",
    label: "File Name"
  },
  {
    key: "upload_date",
    label: "Release Date",
    class: "text-right"
  },
  {
    key: "mod_loader",
    label: "Mod Loader",
    class: "text-right"
  },
  {
    key: "downloads",
    label: "Downloads",
    class: "text-right"
  }
];

const expand = ref({
  openedRows: [],
  row: {}
});

const page = computed({
  get: () => Number(route.query.page ?? 1),
  set: value =>
    router.push({
      query: {
        ...route.query,
        page: value
      }
    })
});

const version = computed({
  get: () => route.query.mc_version,
  set: value =>
    router.push({
      query: {
        ...route.query,
        page: route.query.page ? 1 : undefined,
        mc_version: value
      }
    })
});

const loader = computed({
  get: () => route.query.mod_loader,
  set: value =>
    router.push({
      query: {
        ...route.query,
        page: route.query.page ? 1 : undefined,
        mod_loader: value
      }
    })
});

const cucumberURL = computed(() => {
  const url = "/cucumber/download";
  const params = new URLSearchParams();

  if (version.value) {
    params.set("mc_version", version.value);
  }

  if (loader.value) {
    params.set("mod_loader", loader.value);
  }

  if (params.size > 0) {
    return url + "?" + params.toString();
  }

  return url;
});

const params = computed(() => ({
  page: page.value,
  mc_version: version.value,
  mod_loader: loader.value
}));

const { data, execute, pending } = await useAPI(`/v2/mods/${props.mod}/files`, {
  params,
  server: false, // going to call this client side
  immediate: false // prevent from ever making the call on the server
});

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

function formatDownloadCount(file, format) {
  const count =
    file.site_downloads + file.curseforge_downloads + file.modrinth_downloads;

  return formatNumber(count, format);
}

watch(files, () => {
  expand.value = {
    openedRows: [],
    row: {}
  };
});

watch(data, value => {
  files.value = value.data.files;
  count.value = value.data.count;
  versions.value = value.data.mc_versions;
  loaders.value = value.data.mod_loaders;
});

onMounted(async () => {
  await execute();
});
</script>
