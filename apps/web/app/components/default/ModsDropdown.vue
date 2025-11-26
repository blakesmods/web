<template>
  <div ref="el" class="flex relative justify-center">
    <UButton
      color="gray"
      variant="ghost"
      size="xl"
      icon="i-heroicons-chevron-down"
      trailing
      @click="active = !active"
    >
      Mods
    </UButton>
    <transition name="fade">
      <div
        v-if="active"
        class="fixed left-0 top-16 py-4 md:x-8 w-full max-h-[calc(100vh-64px)] border-y border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/95 shadow-lg overflow-y-auto backdrop-blur"
      >
        <div
          class="container grid grid-cols-[repeat(1,1fr)] lg:grid-cols-[repeat(2,1fr)] xl:grid-cols-[repeat(3,1fr)] gap-4"
        >
          <h2 class="col-span-full text-center mb-4">Mods</h2>
          <GradientUCard
            v-for="(mod, index) in mods"
            class="flex w-full h-36 items-center"
            :style="{
              '--primary-color': mod.primary_color,
              '--secondary-color': mod.secondary_color
            }"
            :key="index"
          >
            <div class="flex h-[96px]">
              <!-- not using NuxtImg due to pre-rendering -->
              <img
                class="w-20 h-20 mr-4 my-auto object-contain"
                width="80"
                height="80"
                :src="mod.logo"
                :alt="mod.name + ' logo'"
              />
              <div class="flex flex-col justify-center gap-2">
                <NuxtLink
                  class="whitespace-nowrap font-bold group-hover:underline underline-offset-4"
                  :to="mod.url"
                >
                  {{ mod.name }}
                </NuxtLink>
                <span
                  class="text-gray-700/80 dark:text-gray-200/80 leading-snug"
                >
                  {{ mod.tagline }}
                </span>
                <div class="flex flex-1 items-end gap-4">
                  <NuxtLink
                    class="hover:opacity-75"
                    :to="mod.url + '/download'"
                    :style="{ color: mod.primary_color }"
                  >
                    Download
                  </NuxtLink>
                  <NuxtLink
                    v-if="mod.has_docs"
                    class="hover:opacity-75"
                    :to="'/docs/' + mod.mod_id"
                    :style="{ color: mod.primary_color }"
                  >
                    Docs
                  </NuxtLink>
                  <NuxtLink
                    v-if="mod.has_wiki"
                    class="hover:opacity-75"
                    :to="'/wiki/' + mod.mod_id"
                    :style="{ color: mod.primary_color }"
                  >
                    Wiki
                  </NuxtLink>
                </div>
              </div>
            </div>
          </GradientUCard>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const active = useModsDropdown();

const el = ref(null);

const mods = getMods();

onClickOutside(el, () => {
  active.value = false;
});
</script>
