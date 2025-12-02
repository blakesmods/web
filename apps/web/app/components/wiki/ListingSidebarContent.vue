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
          trailing-icon="i-heroicons-chevron-down-20-solid"
        >
          <span class="w-full text-left">{{ version }}</span>
        </UButton>
      </UDropdownMenu>
    </UFormField>

    <div class="flex flex-col gap-4">
      <h2 class="text-2xl">Latest Articles</h2>
      <div class="flex flex-col gap-3 md:gap-1">
        <div v-for="article in recent" class="flex items-center gap-1 truncate">
          <ArticleLink :article="article" />
          <small class="capitalize opacity-80">- {{ article._dir }}</small>
        </div>
      </div>

      <Alert
        v-if="currentMod?.has_docs"
        title="Modpack Developers!"
        icon="i-heroicons-information-circle-solid"
      >
        <span class="flex flex-col gap-4">
          This wiki is for gameplay documentation. For advanced configuration,
          check out the docs.
          <UButton
            class="inline-flex mr-auto"
            :to="`/docs/${currentMod.mod_id}`"
          >
            View Docs
          </UButton>
        </span>
      </Alert>
    </div>
  </div>
</template>

<script setup>
import ArticleLink from "~/components/wiki/ArticleLink.vue";
import { coerce, rcompare } from "semver";

const { version, mod, isLatestVersion } = useWikiMetadata();
const versions = useWikiVersions();
const mods = useWikiMods();

const currentMod = computed(() => getMod(mod.value));

const pages = await useWikiModArticles();

const recent = computed(() =>
  [...(pages.value || [])]
    .sort((a, b) =>
      rcompare(coerce(a.version) ?? "1.0.0", coerce(b.version) ?? "1.0.0")
    )
    .slice(0, 8)
    .map(article => {
      // the latest version doesn't have the version in the url
      if (article._path && isLatestVersion.value) {
        article._path = removeWikiVersionFromPath(article._path, version.value);
      }

      return article;
    })
);
</script>
