<template>
  <ModPage :mod="mod">
    <div class="container flex flex-col my-8 gap-8">
      <h1 class="text-center">Improve your quality of life!</h1>

      <Card>
        <template #title>Tool Repair Improvements</template>
        <template #content>
          <div class="flex flex-col md:flex-row">
            <div class="flex flex-col w-full gap-4">
              <h3>Crafting Grid Tool Repair</h3>
              <p>
                With Pickle Tweaks, you can repair your tools using their
                corresponding repair materials right from the crafting grid!
                (image of crafting grid with repair)
              </p>
              <p>
                You can configure many aspects of this mechanic such as what or
                how many materials are required to repair specific tools.
              </p>
            </div>
            <div class="hidden md:block">
              <Divider layout="vertical" />
            </div>
            <div class="md:hidden">
              <Divider layout="horizontal" />
            </div>
            <div class="flex flex-col w-full gap-4">
              <h3>Tool Breaking Tweak</h3>
              <p>
                To coincide with this method of simple repair, your tools will
                now become ineffective right before breaking. This makes it so
                you don't have to worry about breaking your tools before
                repairing them.
              </p>
            </div>
          </div>
        </template>
      </Card>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <template #title>Paxels</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                Paxels are a 3-in-1 tool made from a Pickaxe, Axe and Shovel.
                Create Paxels using the materials from Mystical Agriculture and
                gain additional efficiency.
              </p>
              <img
                class="mx-auto h-[150px]"
                src="/img/landing/pickletweaks-paxels.png"
              />
            </div>
          </template>
        </Card>
        <Card>
          <template #title>Watering Cans</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>Watering Cans increase crop growth speed.</p>
              <p>
                Pickle Tweaks comes with a regular watering can (3x3) and a
                reinforced watering can (7x7).
              </p>
              <img
                class="mx-auto h-[150px]"
                src="/img/landing/pickletweaks-watering_cans.png"
              />
            </div>
          </template>
        </Card>
        <Card>
          <template #title>Sickles &amp; Scythes</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <h3>Sickles</h3>
              <p>
                Sickles allow you to harvest plant-material blocks in an AOE.
              </p>
              <img
                class="mx-auto h-[40px]"
                src="/img/landing/pickletweaks-sickles.png"
              />
              <h3>Scythes</h3>
              <p>
                Scythes are an AOE weapon and can be used to right-click harvest
                crops in an area.
              </p>
              <img
                class="mx-auto h-[40px]"
                src="/img/landing/pickletweaks-scythes.png"
              />
            </div>
          </template>
        </Card>
        <Card>
          <template #title>Item Magnet</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                Use the Magnet to automatically pick up items and experience
                orbs around you. You can toggle the magnet on and off by right
                clicking it in your hand or in your inventory.
              </p>
              <img
                class="mx-auto h-[150px]"
                src="/img/landing/pickletweaks-magnet.png"
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

const mod = useMod("pickletweaks");
</script>
