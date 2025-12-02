<template>
  <UTooltip>
    <template #content>
      <div class="flex gap-1">
        Search &bullet;
        <UKbd size="sm" value="meta" />
        <UKbd size="sm">K</UKbd>
      </div>
    </template>
    <UButton
      color="neutral"
      icon="i-heroicons-magnifying-glass"
      aria-label="Search docs button"
      @click="open = !open"
    />
  </UTooltip>

  <UModal v-model:open="open">
    <template #content>
      <UCommandPalette
        command-attribute="title"
        placeholder="Search docs..."
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
    </template>
  </UModal>
</template>

<script setup>
const open = ref(false);

const router = useRouter();
const search = await useDocsSearch();

const groups = computed(() =>
  Object.entries(search.value).map(([key, value]) => ({
    id: key,
    label: key,
    items: value.map(doc => ({
      id: doc.id,
      icon: "i-heroicons-document",
      label: [...doc.titles, doc.title].join(" > "),
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
