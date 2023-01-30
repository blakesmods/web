<template>
  <ModPage :mod="mod">
    <div class="container flex flex-col my-8 gap-8">
      <h1 class="text-center">Insanity!</h1>

      <Card>
        <template #title>Tier 6: Insanium</template>
        <template #content>
          <div class="flex flex-col md:flex-row">
            <div class="flex flex-col w-full gap-4">
              <p>
                Insanium Essence is an additional tier above Supremium that can
                be used to craft higher end items such as Nether Star seeds.
              </p>
            </div>
          </div>
        </template>
      </Card>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <template #title>Paxels</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                Paxels are a 3-in-1 tool made from a Pickaxe, Axe and Shovel.
                Create Paxels using the materials from Mystical Agriculture and
                gain additional efficiency.
              </p>
              <p>Pickaxe, Axe, and Shovel augments can be applied to Paxels.</p>
            </div>
          </template>
        </Card>
        <Card>
          <template #title>Tinkers' Construct Integration</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                Mystical Agradditions adds support to Tinkers' Construct for
                Mystical Agriculture materials. Melt down Supremium Ingots in a
                Smeltery and pour out your new Pickaxe head.
              </p>
            </div>
          </template>
        </Card>
        <Card>
          <template #title>Essence Coal</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                Make use of your extra essences to create coal with a longer
                burn time.
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

const mod = useMod("mysticalagradditions");
</script>
