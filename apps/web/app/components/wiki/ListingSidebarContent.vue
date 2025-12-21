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
          trailing-icon="i-heroicons-chevron-down-20-solid"
        >
          <span class="w-full text-left">{{ version }}</span>
        </UButton>
      </UDropdownMenu>
    </UFormField>

    <div class="flex flex-col gap-4">
      <h2 class="text-2xl">Latest Articles</h2>
      <div class="flex flex-col gap-3 md:gap-1">
        <div
          v-for="article in articles"
          class="flex items-center gap-1 truncate"
        >
          <ArticleLink :article="article" />
          <small class="text-muted">- {{ article.category }}</small>
        </div>
      </div>

      <Alert
        v-if="mod?.has_docs"
        title="Modpack Developers!"
        icon="i-heroicons-information-circle-solid"
      >
        <span class="flex flex-col gap-4">
          This wiki is for gameplay documentation. For advanced configuration,
          check out the docs.
          <UButton class="inline-flex mr-auto" :to="`/docs/${mod.mod_id}`">
            View Docs
          </UButton>
        </span>
      </Alert>
    </div>
  </div>
</template>

<script setup>
import ArticleLink from "~/components/wiki/ArticleLink.vue";

const { version, mod } = useWikiMetadata();
const versions = await useWikiVersions();
const mods = await useWikiMods();

const articles = await useWikiModLatestArticles();
</script>
