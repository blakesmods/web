<template>
  <ModPage :mod="mod">
    <div class="container relative flex flex-col my-8 gap-8 z-10">
      <KeyFeatures
        title="Key Features"
        subtitle="Cucumber Flavored"
        :features="features"
      />

      <h2 class="text-center mt-8">The Mods</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <GradientUCard
          v-for="(mod, index) in mods"
          class="flex w-full h-36 items-center"
          :style="{
            '--primary-color': mod.primary_color,
            '--secondary-color': mod.secondary_color
          }"
          :key="index"
        >
          <div class="flex h-[96px]">
            <NuxtImg
              class="w-20 h-20 mr-4 my-auto object-contain"
              width="80"
              height="80"
              :src="mod.logo"
              :alt="mod.name + ' logo'"
            />
            <div class="flex flex-col justify-center gap-2">
              <NuxtLink
                class="whitespace-nowrap font-bold group-hover:underline underline-offset-4"
                :to="mod.url"
              >
                {{ mod.name }}
              </NuxtLink>
              <span
                class="text-neutral-700/80 dark:text-neutral-200/80 leading-snug"
              >
                {{ mod.tagline }}
              </span>
              <div class="flex flex-1 items-end gap-4">
                <NuxtLink
                  class="hover:opacity-75"
                  :to="mod.url + '/download'"
                  :style="{ color: mod.primary_color }"
                >
                  Download
                </NuxtLink>
                <NuxtLink
                  v-if="mod.has_docs"
                  class="hover:opacity-75"
                  :to="'/docs/' + mod.mod_id"
                  :style="{ color: mod.primary_color }"
                >
                  Docs
                </NuxtLink>
                <NuxtLink
                  v-if="mod.has_wiki"
                  class="hover:opacity-75"
                  :to="'/wiki/' + mod.mod_id"
                  :style="{ color: mod.primary_color }"
                >
                  Wiki
                </NuxtLink>
              </div>
            </div>
          </div>
        </GradientUCard>
      </div>
    </div>
  </ModPage>
</template>

<script setup>
import ModPage from "~/components/pages/ModPage.vue";
import KeyFeatures from "~/components/mods/KeyFeatures.vue";

definePageMeta({
  layout: "mods"
});

const mod = getMod("cucumber");
const mods = getModsExcept(["cucumber"]);

const features = ref([
  {
    title: "What & Why",
    description: [
      "Cucumber Library is a required dependency for all of my mods. Cucumber contains shared code and functionality that is used by all of the mods listed below."
    ],
    link: "/wiki/cucumber"
  },
  {
    title: "Tag Tooltips",
    description: [
      "Cucumber adds advanced tooltips to all blocks and items that list all of the tags that block or item belongs to."
    ],
    link: "/wiki/cucumber/features/tag-tooltips"
  },
  {
    title: "Data Component Tooltips",
    description: [
      "Cucumber adds advanced tooltips to all items that shows the items Data Components."
    ],
    link: "/wiki/cucumber/features/data-component-tooltips"
  }
]);
</script>
