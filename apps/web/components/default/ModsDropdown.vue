<template>
  <div ref="el" class="flex relative justify-center">
    <a
      class="flex items-center gap-2"
      href="javascript:void(0)"
      @click="active = !active"
    >
      Mods
      <i class="pi pi-chevron-down"></i>
    </a>
    <transition name="fade">
      <div
        v-if="active"
        class="fixed left-0 top-[72px] p-8 w-full max-h-[calc(100vh-160px)] border-y border-surface-border bg-surface-ground/80 shadow-lg overflow-y-auto backdrop-blur-md"
      >
        <div
          class="container grid grid-cols-[repeat(1,1fr)] lg:grid-cols-[repeat(2,1fr)] xl:grid-cols-[repeat(3,1fr)] gap-4"
        >
          <h2 class="col-span-full text-center mb-4">Mods</h2>
          <NuxtLink
            v-for="(mod, index) in mods"
            class="group flex flex-nowrap w-full h-32 rounded transition-transform hover:scale-105 active:scale-100"
            :to="mod.url"
            :key="index"
          >
            <Card
              class="flex w-full h-full items-center"
              :style="{
                '--primary-color': mod.primary_color,
                '--secondary-color': mod.secondary_color
              }"
            >
              <template #content>
                <div class="flex h-[96px]">
                  <img
                    class="w-20 h-20 mr-4 my-auto object-contain"
                    :src="mod.logo"
                    :alt="mod.name + ' logo'"
                  />
                  <div class="flex flex-col justify-center gap-2">
                    <span
                      class="whitespace-nowrap font-bold group-hover:underline underline-offset-4"
                    >
                      {{ mod.name }}
                    </span>
                    <span class="text-surface-text/80 leading-snug">
                      {{ mod.tagline }}
                    </span>
                    <div class="flex flex-1 items-end gap-4">
                      <NuxtLink
                        class="hover:opacity-80"
                        :to="mod.url + '/download'"
                        :style="{ color: mod.primary_color }"
                      >
                        Download
                      </NuxtLink>
                      <NuxtLink
                        v-if="mod.has_docs"
                        class="hover:opacity-80"
                        :to="'/docs/' + mod.mod_id"
                        :style="{ color: mod.primary_color }"
                      >
                        Docs
                      </NuxtLink>
                      <NuxtLink
                        v-if="mod.has_wiki"
                        class="hover:opacity-80"
                        :to="'/wiki/' + mod.mod_id"
                        :style="{ color: mod.primary_color }"
                      >
                        Wiki
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </template>
            </Card>
          </NuxtLink>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const mods = useMods();
const active = useModsDropdown();

const el = ref(null);

onClickOutside(el, () => {
  active.value = false;
});
</script>
