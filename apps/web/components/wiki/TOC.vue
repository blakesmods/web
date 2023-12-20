<template>
  <div class="mb-8">
    <h3 class="pb-4">On This Page</h3>
    <a
      v-for="item in links"
      class="flex w-full mb-1 text-sm"
      :class="{ 'pl-4': item.depth === 3 }"
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
