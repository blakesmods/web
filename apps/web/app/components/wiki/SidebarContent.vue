<template>
  <div class="flex flex-col gap-4 mr-2">
    <UFormField v-if="currentMod" label="Select Mod">
      <UDropdownMenu
        class="w-full"
        :items="mods"
        :content="{ align: 'left' }"
        :ui="{ width: 'w-64' }"
      >
        <UButton
          class="w-full"
          color="neutral"
          trailing-icon="i-heroicons-chevron-down-20-solid"
        >
          <UAvatar class="flex-shrink-0" size="2xs" :src="currentMod.logo" />
          <span class="w-full text-left">
            {{ currentMod.name }}
          </span>
        </UButton>
      </UDropdownMenu>
    </UFormField>
    <UFormField label="Select Version">
      <UDropdownMenu
        class="w-full"
        :items="versions"
        :content="{ align: 'left' }"
      >
        <UButton
          class="w-full"
          color="neutral"
          trailing-icon="i-heroicons-chevron-down-20-solid"
        >
          <span class="w-full text-left">{{ version }}</span>
        </UButton>
      </UDropdownMenu>
    </UFormField>

    <div v-for="category in categories">
      <div
        class="flex justify-between items-center -mx-2 px-2 cursor-pointer"
        @click="onClickCategory(category)"
      >
        <h4>{{ getWikiCategoryName(category) }}</h4>
        <UIcon
          :name="
            opened.includes(category)
              ? 'i-heroicons-chevron-down'
              : 'i-heroicons-chevron-right'
          "
        />
      </div>
      <div
        class="flex flex-col overflow-hidden text-neutral-500 dark:text-neutral-400"
        :class="[opened.includes(category) ? 'h-full' : 'h-0']"
      >
        <NuxtLink
          v-for="article in articles[category]"
          class="flex relative pl-2 py-1.5 md:py-1 text-sm first:mt-2 hover:text-neutral-700 dark:hover:text-neutral-200 border-l border-neutral-300 dark:border-neutral-700"
          :class="{
            '!text-primary-500 dark:!text-primary-400 font-semibold':
              article._path === route.path
          }"
          :to="article._path"
        >
          <UPopover
            v-if="article.icon"
            class="my-auto pr-1 w-5 h-4"
            mode="hover"
            :popper="{ placement: 'top' }"
          >
            <NuxtImg
              class="w-4 h-4"
              width="16"
              height="16"
              :src="article.icon"
              :alt="article.title"
            />

            <template #panel>
              <NuxtImg
                class="w-16 h-16 pixelated"
                width="64"
                height="64"
                :alt="article.title"
                :src="article.icon"
              />
            </template>
          </UPopover>
          {{ article.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const { version, category, mod } = useWikiMetadata();
const versions = useWikiVersions();
const mods = useWikiMods();
const articles = await useWikiSidebarLinks();

const currentMod = computed(() => getMod(mod.value));
const categories = computed(() => Object.keys(articles.value));

const opened = ref([category.value]);

function onClickCategory(category) {
  const index = opened.value.indexOf(category);

  if (index > -1) {
    opened.value.splice(index, 1);
  } else {
    opened.value.push(category);
  }
}

// when opening a page with a new category, we want to open said category
watch(category, value => {
  if (!opened.value.includes(value)) {
    opened.value.push(value);
  }
});
</script>
