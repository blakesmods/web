<template>
  <div class="flex flex-col gap-4 mr-2">
    <UFormField v-if="mod" label="Select Mod">
      <UDropdownMenu
        class="w-full"
        :items="mods"
        :content="{ align: 'left' }"
        :ui="{ width: 'w-64' }"
      >
        <UButton
          class="w-full"
          trailing-icon="i-heroicons-chevron-down-20-solid"
        >
          <UAvatar class="shrink-0" size="2xs" :src="mod.logo" />
          <span class="w-full text-left">
            {{ mod.name }}
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
        class="flex flex-col gap-3 md:gap-1 overflow-hidden text-neutral-500 dark:text-neutral-400"
        :class="[opened.includes(category) ? 'h-full' : 'h-0']"
      >
        <ArticleLink
          v-for="article in articles[category]"
          :article="article"
          :class="{
            'text-primary-500! dark:text-primary-400! font-semibold':
              article.path === route.path,
            'first:mt-2': true
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ArticleLink from "~/components/wiki/ArticleLink.vue";

const route = useRoute();

const { version, mod, category } = useWikiMetadata();
const versions = useWikiVersions();
const mods = useWikiMods();
const articles = await useWikiSidebarLinks();

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
