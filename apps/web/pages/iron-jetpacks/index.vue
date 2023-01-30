<template>
  <ModPage :mod="mod">
    <div class="container flex flex-col my-8 gap-8">
      <h1 class="text-center">Fly to new heights!</h1>
      <Card>
        <template #title>Jetpacks Redefined</template>
        <template #content>
          <div class="flex flex-col md:flex-row">
            <div class="flex flex-col w-full gap-4">
              <p>
                Iron Jetpacks is a Minecraft mod focused entirely on adding
                simple and easy to use jetpacks.
              </p>
              <img
                class="mx-auto h-[100px]"
                src="/img/landing/ironjetpacks-jetpacks.png"
              />
            </div>
            <div class="hidden md:block">
              <Divider layout="vertical" />
            </div>
            <div class="md:hidden">
              <Divider layout="horizontal" />
            </div>
            <div class="w-full">
              All jetpack values can be tweaked to your liking using the jetpack
              JSON files. You can even add entirely new jetpacks, or remove the
              ones you don't need.
            </div>
          </div>
        </template>
      </Card>

      <h1 class="text-center">Features</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <template #title>Throttle Controls</template>
          <template #content>
            <p>
              You can change the flight speed of your jetpack on the fly! Use
              the Increase/Decrease throttle keybinds to change your jetpack's
              movement speed.
            </p>
          </template>
        </Card>
        <Card>
          <template #title>Intuitive Display</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                View your jetpacks energy, throttle, engine and hover status
                quickly using the in-game HUD.
              </p>
              <img
                class="mx-auto w-[150px]"
                src="/img/landing/ironjetpacks-hud.png"
              />
            </div>
          </template>
        </Card>
        <Card>
          <template #title>Curios Integration</template>
          <template #content>
            <p>
              With Curios installed, your jetpack can be equipped as a Curio.
            </p>
          </template>
        </Card>
        <Card>
          <template #title>Powered by Forge Energy</template>
          <template #content>
            <div class="flex flex-col gap-4">
              <p>
                Jetpacks are fueled using Forge Energy (FE). This means that
                jetpacks can be charged using other mods chargers.
              </p>
              <img
                class="mx-auto h-[150px]"
                src="/img/landing/ironjetpacks-energetic_infuser.png"
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

const mod = useMod("ironjetpacks");
</script>
