<template>
  <div class="files w-full">
    <Message
      v-if="mod !== 'cucumber' && !['1.10', '1.11'].includes(version)"
      class="!mt-0"
      icon="_"
      :closable="false"
    >
      <div class="flex flex-col xl:flex-row justify-between items-center gap-4">
        <div class="flex text-2xl font-bold">
          <span class="flex mr-4 items-center">
            <i
              class="pi p-badge-info pi-info-circle"
              style="font-size: 2rem"
            ></i>
          </span>
          Cucumber Library is required to use this mod.
        </div>
        <a class="flex" :href="cucumberURL" target="_blank">
          <Button
            class="p-button-secondary"
            label="Get Cucumber"
            icon="pi pi-external-link"
            icon-pos="right"
          />
        </a>
      </div>
    </Message>

    <Card class="min-h-[700px]">
      <template #content>
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
          <Column
            field="upload_date"
            header="Release Date"
            header-class="right"
          >
            <template #body="{ data }">
              <div class="flex justify-end items-center">
                <div
                  v-tooltip.top="
                    formatDate(data.upload_date, 'ddd, MMM D, YYYY h:mm A')
                  "
                >
                  {{ formatDate(data.upload_date, "MM/DD/YYYY") }}
                </div>
              </div>
            </template>
          </Column>
          <Column field="downloads" header="Downloads" header-class="right">
            <template #body="{ data }">
              <div class="flex justify-end items-center">
                <div
                  class="mr-4 font-bold"
                  v-tooltip.top="
                    `${formatDownloadCount(data, '0,0')} downloads`
                  "
                >
                  {{ formatDownloadCount(data, "0[.]0a") }}
                </div>
                <Button
                  icon="pi pi-download"
                  :disabled="downloadPending"
                  :loading="downloadPending && data._id === downloadPending"
                  @click="onDownloadFile(data)"
                />
              </div>
            </template>
          </Column>

          <template #expansion="{ data }">
            <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 py-2">
              <div class="col-span-1">
                <h4>Java Version</h4>
                <span>{{ data.java_version }}</span>
              </div>
              <div class="col-span-1">
                <h4>Minecraft Version</h4>
                <span>{{ data.mc_version }}</span>
              </div>
              <div class="col-span-1">
                <h4>File Size</h4>
                <span>{{ formatNumber(data.file_size, "0.00 b") }}</span>
              </div>
              <div class="col-span-2 lg:col-span-5 xl:col-span-2">
                <h4>MD5 Hash</h4>
                <span>{{ data.md5_hash }}</span>
              </div>
              <div class="col-span-2 lg:col-span-5">
                <h4>Changelog</h4>
                <span v-html="data.changelog"></span>
              </div>
            </div>
          </template>
        </DataTable>
      </template>
    </Card>
  </div>
</template>

<script setup>
const props = defineProps({
  mod: String,
  version: String
});

const nuxtApp = useNuxtApp();

const route = useRoute();
const router = useRouter();

const files = ref([]);
const count = ref(0);
const page = ref(1);
const downloadPending = ref(false);
const expandedRows = ref([]);

const cucumberURL = computed(
  () => "/cucumber/download?mc_version=" + props.version
);

const url = computed(() => `/v2/mods/${props.mod}/${props.version}`);
const params = computed(() => ({ page: page.value }));

const { data, execute, pending } = await useAPI(url, {
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

  return nuxtApp.$formatNumber(count, format);
}

watch(
  () => props.version,
  (value, oldValue) => {
    if (oldValue !== null) {
      router.push({
        query: {
          ...route.query,
          mc_version: value
        }
      });
    }

    page.value = 1;
  }
);

watch(data, value => {
  files.value = value.data.files;
  count.value = value.data.count;
});

onMounted(async () => {
  await execute();
});
</script>
