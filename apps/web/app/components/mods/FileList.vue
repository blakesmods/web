<template>
  <div class="files w-full">
    <UCard
      :ui="{
        header: 'bg-white dark:bg-neutral-900 rounded-t-lg'
      }"
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
            trailing-icon="i-heroicons-arrow-top-right-on-square-solid"
          >
            Get Cucumber
          </UButton>
        </div>
      </template>

      <div
        class="flex flex-col md:flex-row gap-4 pb-6 mb-6 border-b border-neutral-300 dark:border-neutral-700"
      >
        <UFormField class="w-full md:w-64" label="Minecraft Version">
          <div class="flex">
            <USelectMenu
              class="w-full"
              placeholder="Select..."
              searchable
              variant="outline"
              :items="versions"
              v-model="version"
            />
            <UTooltip v-if="version" text="Reset">
              <UButton
                icon="i-heroicons-x-circle"
                variant="ghost"
                aria-label="Clear Minecraft version filter"
                @click="version = undefined"
              />
            </UTooltip>
          </div>
        </UFormField>
        <UFormField class="w-full md:w-64" label="Mod Loader">
          <div class="flex">
            <USelectMenu
              class="w-full"
              placeholder="Select..."
              searchable
              variant="outline"
              :items="loaders"
              v-model="loader"
            />
            <UTooltip v-if="loader" text="Reset">
              <UButton
                icon="i-heroicons-x-circle"
                variant="ghost"
                aria-label="Clear mod loader filter"
                @click="loader = undefined"
              />
            </UTooltip>
          </div>
        </UFormField>
      </div>

      <UTable
        :columns="columns"
        :data="files"
        :loading="status === 'idle' || status === 'pending'"
        :ui="{
          root: 'bg-white dark:bg-neutral-900 ring ring-inset ring-accented rounded-md'
        }"
        v-model:expanded="expanded"
      >
        <template #expanded="{ row }">
          <div class="grid grid-cols-6 lg:grid-cols-12 gap-4">
            <div class="col-span-2">
              <h4>Java Version</h4>
              <span>{{ row.original.java_version }}</span>
            </div>
            <div class="col-span-3">
              <h4>Minecraft Version</h4>
              <span>{{ row.original.mc_version }}</span>
            </div>
            <div class="col-span-2">
              <h4>File Size</h4>
              <span>{{ formatNumber(row.original.file_size, "0.00 b") }}</span>
            </div>
            <div class="col-span-6 lg:col-span-5 xl:col-span-2">
              <h4>MD5 Hash</h4>
              <span>{{ row.original.md5_hash }}</span>
            </div>
            <div class="col-span-12">
              <h4>Changelog</h4>
              <span class="text-pretty" v-html="row.original.changelog"></span>
            </div>
          </div>
        </template>
      </UTable>

      <div class="flex p-4 justify-center">
        <UPagination :items-per-page="10" :total="count" v-model:page="page" />
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
    id: "expand",
    cell: ({ row }) =>
      h(UButton, {
        variant: "ghost",
        icon: "i-lucide-chevron-down",
        square: true,
        "aria-label": "Expand",
        ui: {
          leadingIcon: [
            "transition-transform",
            row.getIsExpanded() ? "duration-200 rotate-180" : ""
          ]
        },
        onClick: () => row.toggleExpanded()
      })
  },
  {
    accessorKey: "file_name",
    header: "File Name",
    cell: ({ row }) =>
      h(
        NuxtLink,
        { to: `./download/${row.original._id}` },
        () => row.original.file_name
      )
  },
  {
    accessorKey: "upload_date",
    header: "Release Date",
    cell: ({ row }) =>
      h(
        UTooltip,
        {
          text: formatDate(row.original.upload_date, "ddd, MMM D, YYYY h:mm A")
        },
        () => formatDate(row.original.upload_date, "MM/DD/YYYY")
      ),
    meta: {
      class: {
        th: "text-end",
        td: "text-end"
      }
    }
  },
  {
    accessorKey: "mod_loader",
    header: "Mod Loader",
    cell: ({ row }) => row.original.mod_loader,
    meta: {
      class: {
        th: "text-end",
        td: "text-end"
      }
    }
  },
  {
    accessorKey: "downloads",
    header: "Downloads",
    cell: ({ row }) =>
      h("div", { class: "flex justify-end items-center gap-4" }, [
        h(
          UTooltip,
          { text: `${formatDownloadCount(row.original, "0,0")} downloads` },
          () => formatDownloadCount(row.original, "0[.]0a")
        ),
        h(UButton, {
          color: "neutral",
          trailingIcon:
            downloadPending.value && row.original._id === downloadPending.value
              ? null
              : "i-heroicons-arrow-down-tray-solid",
          disabled: !!downloadPending.value,
          loading:
            downloadPending.value && row.original._id === downloadPending.value,
          "aria-label": `Download file ${row.original.file_name}`,
          onClick: () => onDownloadFile(row.original)
        })
      ]),
    meta: {
      class: {
        th: "text-end",
        td: "text-end"
      }
    }
  }
];

const expanded = ref({});

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

const { data, execute, status } = await useAPI(`/v2/mods/${props.mod}/files`, {
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
  expanded.value = {};
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
