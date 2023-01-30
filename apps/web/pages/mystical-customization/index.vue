<template>
  <ModPage :mod="mod">
    <div class="container flex flex-col my-8 gap-8">
      <h1 class="text-center">
        Customize your Mystical Agriculture experience!
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <template #title>Grow Custom Resources</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                Use Mystical Customization to add new crops, crop tiers, crop
                types or mob soul types to the game!
              </p>
            </div>
          </template>
        </Card>
        <Card>
          <template #title>Make It Your Own</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                Mystical Customization can also be used to edit crops, crop
                tiers, crop types and mob soul types.
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

const mod = useMod("mysticalcustomization");
</script>
