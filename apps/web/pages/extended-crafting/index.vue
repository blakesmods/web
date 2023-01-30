<template>
  <ModPage :mod="mod">
    <div class="container flex flex-col my-8 gap-8">
      <h1 class="text-center">Pride and accomplishment!</h1>

      <Card>
        <template #title>Crafting Tables</template>
        <template #content>
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex flex-col gap-4 w-full">
              <p>
                Extended Crafting adds 4 tiers of crafting tables. 3x3, 5x5,
                7x7, 9x9
              </p>
              <img src="/img/landing/extendedcrafting-table_crafting.png" />
            </div>
            <div class="flex flex-col gap-4 w-full">
              <img
                class="h-[300px]"
                style="margin-top: 0"
                src="/img/landing/extendedcrafting-table_crafting_example.png"
              />
              <div class="flex flex-col gap-4">
                <small>
                  Credit:
                  <a
                    href="https://www.curseforge.com/minecraft/modpacks/enigmatica2expert"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enigmatica 2: Expert
                  </a>
                </small>
              </div>
            </div>
          </div>
        </template>
      </Card>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <template #title>Combination Crafting</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                The Combination Crafting setup is a shapeless in-world crafting
                mechanism. Using a Crafting Core and up to 49 pedestals, you can
                make creating key-items more exciting.
              </p>
              <img
                class="mx-auto h-[200px]"
                src="/img/landing/extendedcrafting-combination_crafting.png"
              />
            </div>
          </template>
        </Card>
        <Card>
          <template #title>Ender Crafting</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                The Ender Crafter is a 3x3 crafting table that takes time to
                craft. The amount of time required depends on the recipe and can
                be decreased by placing Ender Alternators.
              </p>
              <img
                class="mx-auto h-[200px]"
                src="/img/landing/extendedcrafting-ender_crafting.png"
              />
            </div>
          </template>
        </Card>
        <Card>
          <template #title>Quantum Compression</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                The Quantum Compressor is a high-tier FE-powered machine that
                can compress large amounts of a single item into a new item.
              </p>
              <img
                class="mx-auto h-[200px]"
                src="/img/landing/extendedcrafting-compression_crafting.png"
              />
            </div>
          </template>
        </Card>
        <Card>
          <template #title>Singularities</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                Singularities are a high-tier crafting item created using the
                Quantum Compressor. Singularities are usually created by
                compressing thousands of a given item.
              </p>
              <img
                class="mx-auto"
                src="/img/landing/extendedcrafting-singularities.png"
              />
            </div>
          </template>
        </Card>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <template #title>Recipe Maker</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                The mod comes with an item called the Recipe Maker. This item
                allows you to very easily create the CraftTweaker script or
                Datapack json file for a table recipe.
              </p>
              <img
                class="mx-auto h-[150px]"
                src="/img/landing/extendedcrafting-recipe_maker.png"
              />
            </div>
          </template>
        </Card>
        <Card>
          <template #title>Handheld Crafting Table</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>A crafting table on a stick. Used for crafting on the go!</p>
              <img
                class="mx-auto h-[150px]"
                src="/img/landing/extendedcrafting-handheld_table.png"
              />
            </div>
          </template>
        </Card>
        <Card>
          <template #title>Guidebook</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                Extended Crafting adds a guide book using
                <a
                  href="https://www.curseforge.com/minecraft/mc-mods/patchouli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Patchouli.
                </a>
                This guide book explains how to use each of the crafting
                mechanisms from a players perspective.
              </p>
              <img
                class="mx-auto h-[150px]"
                src="/img/landing/extendedcrafting-guide.png"
              />
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

const mod = useMod("extendedcrafting");
</script>
