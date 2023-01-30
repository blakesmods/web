<template>
  <div ref="el" class="flex relative justify-center">
    <Button
      class="p-button-outlined gap-2 !text-surface-text !font-bold !border-surface-border"
      @click="active = !active"
    >
      Mods
      <i class="pi pi-chevron-down"></i>
    </Button>
    <transition name="fade">
      <div
        v-if="active"
        class="grid grid-cols-[repeat(1,1fr)] lg:grid-cols-[repeat(2,1fr)] absolute top-16 p-4 gap-4 max-h-[calc(100vh-160px)] border border-surface-border bg-surface-hover rounded shadow-lg overflow-y-auto"
        :style="{ left }"
      >
        <h2 class="lg:col-span-2 text-center my-2">Mods</h2>
        <NuxtLink
          v-for="(mod, index) in mods"
          class="group flex flex-nowrap w-96 h-32 rounded transition-transform hover:scale-105 active:scale-100"
          :to="mod.url"
          :key="index"
        >
          <Card class="flex w-full h-full items-center">
            <template #content>
              <div class="flex">
                <img
                  class="w-20 h-20 mr-4 my-auto object-contain"
                  :src="mod.logo"
                  :alt="mod.name + ' logo'"
                />
                <div class="flex flex-col gap-4">
                  <span
                    class="whitespace-nowrap font-bold group-hover:underline underline-offset-4"
                  >
                    {{ mod.name }}
                  </span>
                  <span class="h-10 text-surface-text/80 leading-snug">
                    {{ mod.tagline }}
                  </span>
                  <div class="flex gap-4">
                    <NuxtLink
                      class="text-primary hover:text-primary-accent"
                      :to="mod.url + '/download'"
                    >
                      Download
                    </NuxtLink>
                    <NuxtLink
                      v-if="mod.has_docs"
                      class="text-primary hover:text-primary-accent"
                      :to="'/docs/' + mod.mod_id"
                    >
                      Docs
                    </NuxtLink>
                    <NuxtLink
                      v-if="mod.has_wiki"
                      class="text-primary hover:text-primary-accent"
                      :to="'/wiki/' + mod.mod_id"
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
    </transition>
  </div>
</template>

<script setup>
const mods = useMods();

const el = ref(null);
const active = ref(false);
const left = ref(null);

function onResize() {
  if (window.innerWidth < 768) {
    left.value = "-80px";
  } else {
    left.value = "-275px";
  }
}

onClickOutside(el, () => {
  active.value = false;
});

onMounted(() => {
  window.addEventListener("resize", onResize);

  onResize();
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});
</script>
