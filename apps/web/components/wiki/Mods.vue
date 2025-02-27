<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <NuxtLink
      v-for="mod in mods"
      class="group"
      :to="mod.disabled ? '/wiki' : mod.link"
      :key="mod.path"
    >
      <UCard class="transition hover:scale-105 active:scale-100">
        <div class="flex gap-4 mr-4">
          <NuxtImg
            class="w-16 h-16"
            width="64"
            height="64"
            :src="mod.icon"
            alt=""
          />
          <div class="flex flex-col justify-center gap-2">
            <h2
              class="text-lg sm:text-2xl group-hover:underline underline-offset-4"
            >
              {{ mod.title }}
            </h2>
            <span v-if="mod.disabled" class="opacity-80">
              No articles available
            </span>
            <span v-else class="opacity-80">
              Click to view {{ articles[mod.path] }}
              {{ articles[mod.path] === 1 ? "article" : "articles" }}
            </span>
          </div>
        </div>
      </UCard>
    </NuxtLink>
  </div>
</template>

<script setup>
const { version, isLatestVersion } = useWikiMetadata();
const articles = ref({});

const { data } = await useAsyncData("wiki-mod-directory", () =>
  queryContent("wiki", version.value).only(["_path"]).find()
);

for (const article of data.value) {
  const parts = article._path.split("/");

  if (!articles.value[parts[3]]) {
    articles.value[parts[3]] = 0;
  }

  articles.value[parts[3]]++;
}

const mods = computed(() => [
  {
    title: "Mystical Agriculture",
    path: "mysticalagriculture",
    link: createLink("mysticalagriculture"),
    icon: "/img/logo/mysticalagriculture_logo.png"
  },
  {
    title: "Iron Jetpacks",
    path: "ironjetpacks",
    link: createLink("ironjetpacks"),
    icon: "/img/logo/ironjetpacks_logo.png"
  },
  {
    title: "Pickle Tweaks",
    path: "pickletweaks",
    link: createLink("pickletweaks"),
    icon: "/img/logo/pickletweaks_logo.png"
  },
  {
    title: "Mystical Agradditions",
    path: "mysticalagradditions",
    link: createLink("mysticalagradditions"),
    icon: "/img/logo/mysticalagradditions_logo.png"
  },
  {
    title: "Extended Crafting",
    path: "extendedcrafting",
    link: createLink("extendedcrafting"),
    icon: "/img/logo/extendedcrafting_logo.png"
  },
  {
    title: "More Buckets",
    path: "morebuckets",
    link: createLink("morebuckets"),
    icon: "/img/logo/morebuckets_logo.png"
  },
  {
    title: "Mystical Customization",
    path: "mysticalcustomization",
    link: createLink("mysticalcustomization"),
    icon: "/img/logo/mysticalcustomization_logo.png",
    disabled: true
  },
  {
    title: "Cucumber Library",
    path: "cucumber",
    link: createLink("cucumber"),
    icon: "/img/logo/cucumber_logo.png"
  }
]);

function createLink(path) {
  if (isLatestVersion.value) {
    return `/wiki/${path}`;
  }

  return `/wiki/${version.value}/${path}`;
}
</script>
