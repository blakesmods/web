<template>
  <UCard>
    <template #header>
      <h3 class="text-center">Minecraft Version</h3>
    </template>

    <!--mobile-->
    <USelectMenu
      class="w-full"
      :ui="{ wrapper: 'relative lg:!hidden' }"
      :options="versions"
      v-model="model"
    />

    <!--desktop-->
    <div class="hidden lg:block space-y-1">
      <div
        v-for="(version, index) in versions"
        class="flex justify-between items-center px-2 py-1 font-bold cursor-pointer hover:bg-gray-300 hover:dark:bg-gray-900 rounded"
        :class="{ 'bg-gray-300 dark:!bg-gray-900': version === modelValue }"
        :key="index"
        @click="emit('update:modelValue', version)"
      >
        {{ version }}
      </div>
    </div>
  </UCard>
</template>

<script setup>
const props = defineProps({
  versions: Array,
  modelValue: String
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  }
});
</script>
