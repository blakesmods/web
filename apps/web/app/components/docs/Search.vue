<template>
  <UTooltip text="Search">
    <template #text>
      <div class="flex gap-1">
        Search &bullet;
        <UKbd size="sm">{{ metaSymbol }}</UKbd>
        <UKbd size="sm">K</UKbd>
      </div>
    </template>
    <UButton
      color="gray"
      icon="i-heroicons-magnifying-glass"
      aria-label="Search docs button"
      @click="open = !open"
    />
  </UTooltip>

  <UModal v-model="open">
    <UCommandPalette
      command-attribute="title"
      :autoselect="false"
      :groups="groups"
      :fuse="{
        fuseOptions: {
          ignoreLocation: true,
          includeMatches: true,
          threshold: 0,
          keys: ['title', 'content', 'category']
        },
        matchAllWhenSearchEmpty: false,
        resultLimit: 10
      }"
      @update:model-value="onSelect"
    />
  </UModal>
</template>

<script setup>
const open = ref(false);

const { metaSymbol } = useShortcuts();

const router = useRouter();
const search = await useDocsSearch();

const groups = computed(() =>
  Object.entries(search.value).map(([key, value]) => ({
    key: key,
    label: key,
    commands: value.map(doc => ({
      id: doc.id,
      icon: "i-heroicons-document",
      title: [...doc.titles, doc.title].join(" > "),
      content: doc.content,
      to: doc.id
    }))
  }))
);

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      open.value = !open.value;
    }
  }
});

function onSelect(option) {
  if (option.click) {
    option.click();
  } else if (option.to) {
    router.push(option.to);
    open.value = false;
  } else if (option.href) {
    window.open(option.href, "_blank");
  }
}
</script>
