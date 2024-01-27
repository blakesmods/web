<template>
  <div class="files w-full">
    <UCard
      :ui="{ header: { background: 'bg-white dark:bg-gray-900 rounded-t-lg' } }"
    >
      <template #header>
        <div
          class="flex flex-col xl:flex-row justify-between items-center gap-8"
        >
          <div class="flex items-center text-2xl font-bold">
            <span class="flex mr-4 items-center">
              <i
                class="pi p-badge-info pi-info-circle"
                style="font-size: 2.25rem"
              ></i>
            </span>
            Cucumber Library is required to use this mod.
          </div>
          <a class="flex">
            <UButton
              :to="cucumberURL"
              target="_blank"
              color="gray"
              trailing-icon="i-heroicons-arrow-top-right-on-square-solid"
            >
              Get Cucumber
            </UButton>
          </a>
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
                @click="loader = undefined"
              />
            </UTooltip>
          </div>
        </UFormGroup>
      </div>

      <DataTable
        data-key="_id"
        paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        current-page-report-template="Showing {first} to {last} of {totalRecords} files"
        lazy
        paginator
        :value="files"
        :loading="pending"
        :rows="10"
        :total-records="count"
        v-model:expanded-rows="expandedRows"
        @page="onPaginate"
      >
        <Column name="expander" expander :header-style="{ width: '40px' }" />
        <Column field="file_name" header="File Name" expander>
          <template #body="{ data }">{{ data.file_name }}</template>
        </Column>
        <Column field="upload_date" header="Release Date" header-class="right">
          <template #body="{ data }">
            <div class="flex justify-end items-center">
              <UTooltip
                :text="formatDate(data.upload_date, 'ddd, MMM D, YYYY h:mm A')"
              >
                {{ formatDate(data.upload_date, "MM/DD/YYYY") }}
              </UTooltip>
            </div>
          </template>
        </Column>
        <Column field="mod_loader" header="Mod Loader" header-class="right">
          <template #body="{ data }">
            <div class="flex justify-end items-center">
              {{ data.mod_loader }}
            </div>
          </template>
        </Column>
        <Column field="downloads" header="Downloads" header-class="right">
          <template #body="{ data }">
            <div class="flex justify-end items-center">
              <UTooltip
                class="mr-4 font-bold"
                :text="`${formatDownloadCount(data, '0,0')} downloads`"
              >
                {{ formatDownloadCount(data, "0[.]0a") }}
              </UTooltip>
              <UButton
                color="gray"
                :trailing-icon="
                  downloadPending && data._id === downloadPending
                    ? null
                    : 'i-heroicons-arrow-down-tray-solid'
                "
                :disabled="downloadPending"
                :loading="downloadPending && data._id === downloadPending"
                @click="onDownloadFile(data)"
              />
            </div>
          </template>
        </Column>

        <template #expansion="{ data }">
          <div class="flex flex-wrap gap-4 py-2 justify-between">
            <div class="col-span-1">
              <h5>Java Version</h5>
              <span>{{ data.java_version }}</span>
            </div>
            <div class="col-span-1">
              <h5>Minecraft Version</h5>
              <span>{{ data.mc_version }}</span>
            </div>
            <div class="col-span-1">
              <h5>File Size</h5>
              <span>{{ formatNumber(data.file_size, "0.00 b") }}</span>
            </div>
            <div class="col-span-2 lg:col-span-5 xl:col-span-2">
              <h5>MD5 Hash</h5>
              <span>{{ data.md5_hash }}</span>
            </div>
            <div class="w-full">
              <h4>Changelog</h4>
              <span v-html="data.changelog"></span>
            </div>
          </div>
        </template>
      </DataTable>
    </UCard>
  </div>
</template>

<script setup>
const props = defineProps({
  mod: String
});

const route = useRoute();
const router = useRouter();

const { formatDate, formatNumber } = useFormatters();

const files = ref([]);
const count = ref(0);
const versions = ref([]);
const loaders = ref([]);
const downloadPending = ref(false);
const expandedRows = ref([]);

const page = computed({
  get: () => route.query.page ?? 1,
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

function onPaginate(event) {
  page.value = event.page + 1;
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

function formatDownloadCount(file, format) {
  const count =
    file.site_downloads + file.curseforge_downloads + file.modrinth_downloads;

  return formatNumber(count, format);
}

watch(
  () => [version.value, loader.value],
  () => {
    expandedRows.value = [];
  }
);

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
