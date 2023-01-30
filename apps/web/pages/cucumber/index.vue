<template>
  <ModPage :mod="mod">
    <div class="container flex flex-col my-8 gap-8">
      <h1 class="text-center">Cucumber flavor text!</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <template #title>What &amp; Why</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                Cucumber Library is a required dependency for all of my mods.
                Cucumber contains shared code and functionality that is used by
                all of the mods listed below.
              </p>
            </div>
          </template>
        </Card>
        <Card>
          <template #title>Tag Tooltips</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                Cucumber adds advanced tooltips to all blocks and items that
                list all of the tags that block or item belongs to.
              </p>
              <img
                class="mx-auto w-[350px]"
                src="/img/landing/cucumber-tag_tooltip.png"
              />
            </div>
          </template>
        </Card>
      </div>

      <h1 class="text-center">Check out the actual mods!</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          v-for="mod in mods"
          class="mod"
          :class="mod.mod_id"
          :key="mod.mod_id"
        >
          <template #content>
            <div class="flex gap-4">
              <img class="my-auto" :src="mod.logo" width="100" />
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
          </template>
        </Card>
      </div>
    </div>
  </ModPage>
</template>

<script setup>
import ModPage from "~/components/pages/ModPage.vue";

definePageMeta({
  layout: "mods"
});

const mod = useMod("cucumber");
const mods = useModsExcept(["cucumber"]);
</script>
