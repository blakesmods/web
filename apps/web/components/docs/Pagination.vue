<template>
  <div
    v-if="previous || next"
    class="flex justify-between items-center py-4 lg:mx-4 border-t border-gray-200 dark:border-gray-800"
  >
    <UButton
      v-if="previous"
      :to="previous._path"
      class="group"
      color="gray"
      size="lg"
      icon="i-heroicons-arrow-left"
    >
      <div class="flex flex-col text-right">
        {{ previous.title }}
        <small
          class="text-gray-600 dark:text-gray-300 group-hover:text-gray-500 dark:group-hover:text-gray-400"
        >
          {{ formatModName(previous) }}
        </small>
      </div>
    </UButton>
    <UButton
      v-if="next"
      :to="next._path"
      class="ml-auto group"
      color="gray"
      size="lg"
      icon="i-heroicons-arrow-right"
      trailing
    >
      <div class="flex flex-col">
        {{ next.title }}
        <small
          class="text-gray-600 dark:text-gray-300 group-hover:text-gray-500 dark:group-hover:text-gray-400"
        >
          {{ formatModName(next) }}
        </small>
      </div>
    </UButton>
  </div>
</template>

<script setup>
const props = defineProps({
  current: Object
});

const mods = useMods();

const parts = props.current._path.split("/").slice(1);

const [previous, next] = await queryContent(parts[0], parts[1]).findSurround(
  props.current._path
);

function formatModName(document) {
  const name = document._path.split("/")[2];
  const mod = mods.value.find(mod => mod.mod_id === name);
  return mod ? mod.name : name;
}
</script>
