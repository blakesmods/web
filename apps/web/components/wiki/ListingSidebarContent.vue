<template>
  <div class="flex flex-col gap-4 mr-2">
    <UFormGroup v-if="currentMod" label="Select Mod">
      <UDropdown
        class="w-full"
        :items="mods"
        :popper="{ placement: 'bottom-start' }"
        :ui="{ width: 'w-64' }"
      >
        <UButton
          class="w-full"
          color="gray"
          trailing-icon="i-heroicons-chevron-down-20-solid"
        >
          <UAvatar class="flex-shrink-0" size="2xs" :src="currentMod.logo" />
          <span class="w-full text-left">
            {{ currentMod.name }}
          </span>
        </UButton>
      </UDropdown>
    </UFormGroup>
    <UFormGroup label="Select Version">
      <UDropdown
        class="w-full"
        :items="versions"
        :popper="{ placement: 'bottom-start' }"
      >
        <UButton
          class="w-full"
          color="gray"
          trailing-icon="i-heroicons-chevron-down-20-solid"
        >
          <span class="w-full text-left">{{ version }}</span>
        </UButton>
      </UDropdown>
    </UFormGroup>

    <div class="flex flex-col gap-4">
      <Callout
        v-if="currentMod?.has_docs"
        title="Modpack Developers!"
        icon="i-heroicons-information-circle-solid"
      >
        <span class="flex flex-col gap-4">
          This wiki is for gameplay documentation. For advanced configuration,
          check out the docs.
          <UButton
            class="inline-flex mr-auto"
            color="gray"
            :to="`/docs/${currentMod.mod_id}`"
          >
            View Docs
          </UButton>
        </span>
      </Callout>
      <h2 class="text-2xl">Latest Articles</h2>
      <div class="flex flex-col gap-3 md:gap-1">
        <div v-for="article in recent" class="flex items-center gap-1 truncate">
          <ArticleLink :article="article" />
          <small class="capitalize opacity-80">- {{ article._dir }}</small>
        </div>
      </div>
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
  [...pages.value]
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
