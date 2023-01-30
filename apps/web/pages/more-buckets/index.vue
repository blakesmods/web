<template>
  <ModPage :mod="mod">
    <div class="container flex flex-col my-8 gap-8">
      <h1 class="text-center">Unbelievably deep buckets!</h1>

      <Card>
        <template #title>More Buckets</template>
        <template #content>
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex flex-col gap-4 w-full">
              <p>
                More buckets adds more buckets to Minecraft made of different
                materials with different capacities. While a regular bucket can
                hold 1 bucket worth of fluid, the Diamond bucket can hold 8. The
                how is unknown at this time.
              </p>
            </div>
            <div class="flex flex-col gap-4 w-full"></div>
          </div>
        </template>
      </Card>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <template #title>Usable in Recipes</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                The buckets added by this mod can be used in crafting recipes in
                place of regular buckets. With the added capacity, crafting
                using fluids is now much easier.
              </p>
            </div>
          </template>
        </Card>
        <Card>
          <template #title>Universal Fluid Container</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                The buckets in this mod can be used as a fluid tank and are
                compatible with any Forge fluid handlers.
              </p>
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

const mod = useMod("morebuckets");
</script>
