<template>
  <div class="mb-8">
    <h4 class="mb-2">Table of Contents</h4>
    <a
      v-for="item in links"
      class="flex w-full mb-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      :class="{
        'pl-4': item.depth === 3
      }"
      :key="item.id"
      :href="`#${item.id}`"
    >
      {{ item.text }}
    </a>
  </div>

  <BisectHostingBanner v-if="showBanner" vertical />
</template>

<script setup>
import BisectHostingBanner from "~/components/BisectHostingBanner.vue";

const props = defineProps({
  page: Object
});

const route = useRoute();

const links = computed(() =>
  props.page.body.toc.links.flatMap(l => [l, ...(l.children || [])])
);

const showBanner = computed(() => !route.path.startsWith("/docs"));
</script>
