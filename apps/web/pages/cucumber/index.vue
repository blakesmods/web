<template>
  <ModPage :mod="mod">
    <div class="container relative flex flex-col my-8 gap-8 z-10">
      <KeyFeatures
        title="Key Features"
        subtitle="Cucumber Flavored"
        :features="features"
      />

      <h1 class="text-center">Check out the actual mods!</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UCard
          v-for="mod in mods"
          class="mod"
          :class="mod.mod_id"
          :key="mod.mod_id"
        >
          <div class="flex gap-4">
            <img class="my-auto" :src="mod.logo" width="100" alt="" />
            <div class="flex flex-col justify-center">
              <h3>{{ mod.name }}</h3>
              <p>{{ mod.tagline }}</p>

              <div class="flex mt-2 gap-4">
                <NuxtLink
                  :to="mod.url"
                  class="text-primary hover:text-primary-accent"
                >
                  View
                </NuxtLink>
                <NuxtLink
                  :to="mod.url + '/download'"
                  class="text-primary hover:text-primary-accent"
                >
                  Download
                </NuxtLink>
              </div>
            </div>
          </div>
        </UCard>
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

const mod = useMod("cucumber");
const mods = useModsExcept(["cucumber"]);

const features = ref([
  {
    title: "What & Why",
    description: [
      "Cucumber Library is a required dependency for all of my mods. Cucumber contains shared code and functionality that is used by all of the mods listed below."
    ]
  },
  {
    title: "Tag Tooltips",
    description: [
      "Cucumber adds advanced tooltips to all blocks and items that list all of the tags that block or item belongs to."
    ]
  }
]);
</script>
