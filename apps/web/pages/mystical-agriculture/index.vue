<template>
  <ModPage :mod="mod">
    <div class="container flex flex-col my-8 gap-8">
      <h1 class="text-center">Prosperity is just a farm away!</h1>

      <Card>
        <template #title>Grow Your Resources</template>
        <template #content>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-2">
              <p>
                The main purpose of Mystical Agriculture is to provide an
                alternative form of resource collection.
              </p>
              <p>
                Mystical Agriculture adds more then 150+ unique crops to
                Minecraft; such as Coal, Iron, Diamond, Creeper and so many
                more!
              </p>
              <p>
                Missing a crop? Easily add your own using
                <NuxtLink to="/mystical-customization">
                  Mystical Customization!
                </NuxtLink>
              </p>
            </div>
            <div class="pixelated flex flex-wrap">
              <ItemImage
                src="/img/landing/mysticalagriculture/iron_essence.png"
                size="64"
                tooltip="Iron Essence"
              />
              <ItemImage
                src="/img/landing/mysticalagriculture/gold_essence.png"
                size="64"
                tooltip="Gold Essence"
              />
              <ItemImage
                src="/img/landing/mysticalagriculture/diamond_essence.png"
                size="64"
                tooltip="Diamond Essence"
              />
              <ItemImage
                src="/img/landing/mysticalagriculture/emerald_essence.png"
                size="64"
                tooltip="Emerald Essence"
              />
              <ItemImage
                src="/img/landing/mysticalagriculture/copper_essence.png"
                size="64"
                tooltip="Copper Essence"
              />
              <ItemImage
                src="/img/landing/mysticalagriculture/redstone_essence.png"
                size="64"
                tooltip="Redstone Essence"
              />
              <ItemImage
                src="/img/landing/mysticalagriculture/nature_essence.png"
                size="64"
                tooltip="Nature Essence"
              />
              <ItemImage
                src="/img/landing/mysticalagriculture/skeleton_essence.png"
                size="64"
                tooltip="Skeleton Essence"
              />
              <ItemImage
                src="/img/landing/mysticalagriculture/blaze_essence.png"
                size="64"
                tooltip="Blaze Essence"
              />
            </div>
          </div>
        </template>
      </Card>

      <Card>
        <template #title>Tools &amp; Armor</template>
        <template #content>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="pixelated flex flex-col gap-4">
              <p>
                Essences can be used to create better tools and armor. They can
                also be upgraded with additional abilities like jump boost,
                strength, flight and wither resistance using Augments!
              </p>
              <div class="flex">
                <ItemImage
                  src="/img/landing/mysticalagriculture/inferium_sword.png"
                  size="64"
                  tooltip="Inferium Sword"
                />
                <ItemImage
                  src="/img/landing/mysticalagriculture/prudentium_pickaxe.png"
                  size="64"
                  tooltip="Prudentium Pickaxe"
                />
                <ItemImage
                  src="/img/landing/mysticalagriculture/tertium_shovel.png"
                  size="64"
                  tooltip="Tertium Shovel"
                />
                <ItemImage
                  src="/img/landing/mysticalagriculture/imperium_axe.png"
                  size="64"
                  tooltip="Imperium Axe"
                />
                <ItemImage
                  src="/img/landing/mysticalagriculture/supremium_hoe.png"
                  size="64"
                  tooltip="Supremium Hoe"
                />
              </div>
            </div>
            <div class="pixelated flex flex-col gap-4">
              <p>
                Upgrade your gear even further to Awakened Supremium tier! Enjoy
                benefits like even greater stats and additional Augment slots.
              </p>
            </div>
          </div>
        </template>
      </Card>

      <h1 class="text-center">Improve your farming efficiency!</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <template #title>Growth Speed</template>
          <template #content>
            <div class="space-y-4">
              <div class="pixelated flex items-center gap-4">
                <ItemImage
                  src="/img/landing/mysticalagriculture/watering_can.png"
                  size="64"
                  tooltip="Watering Can"
                />
                <p>
                  Water your crops manually with a Watering Can to substantially
                  increase crop growth rates.
                </p>
              </div>
              <div class="pixelated flex items-center gap-4">
                <ItemImage
                  src="/img/landing/mysticalagriculture/inferium_growth_accelerator.png"
                  size="64"
                  tooltip="Inferium Growth Accelerator"
                />
                <p>
                  Stack Growth Accelerators underneath your crops to increase
                  their growth rate.
                </p>
              </div>
            </div>
          </template>
        </Card>

        <Card>
          <template #title>Farming Improvements</template>
          <template #content>
            <div class="space-y-4">
              <div class="pixelated flex items-center gap-4">
                <ItemImage
                  src="/img/landing/mysticalagriculture/supremium_scythe.png"
                  size="64"
                  tooltip="Supremium Scythe"
                />
                <p>
                  Harvest large areas of crops in one fell swoop using a Scythe.
                </p>
              </div>
              <div class="pixelated flex items-center gap-4">
                <ItemImage
                  src="/img/landing/mysticalagriculture/harvester.png"
                  size="64"
                  tooltip="Harvester"
                />
                <p>Automatically harvest a field of crops using a Harvester.</p>
              </div>
            </div>
          </template>
        </Card>
      </div>

      <h1 class="text-center">Use essences for more than just resources!</h1>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card>
          <template #title>Essence Furnaces</template>
          <template #content>
            <div class="pixelated flex items-center gap-4">
              <ItemImage
                src="/img/landing/mysticalagriculture/inferium_furnace.png"
                size="64"
                tooltip="Inferium Furnace"
              />
              <p>
                Use your extra essences to create furnaces with increased speed
                and fuel efficiency.
              </p>
            </div>
          </template>
        </Card>
        <Card>
          <template #title>Enchanter</template>
          <template #content>Coming soon!</template>
        </Card>
        <Card>
          <template #title>Soulium Spawner</template>
          <template #content>Coming soon!</template>
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

const mod = useMod("mysticalagriculture");
</script>
