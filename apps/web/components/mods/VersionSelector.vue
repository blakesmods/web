<template>
  <Card>
    <template #title>
      <h2 class="mb-4 pb-4 text-center border-b border-surface-border">
        Minecraft Version
      </h2>
    </template>
    <template #content>
      <!--mobile-->
      <Dropdown class="w-full lg:!hidden" :options="versions" v-model="model" />

      <!--desktop-->
      <div class="hidden lg:block space-y-1">
        <div
          v-for="(version, index) in versions"
          class="flex justify-between items-center px-2 py-1 font-bold cursor-pointer bg-surface-card hover:bg-surface-hover rounded"
          :class="{ '!bg-surface-ground': version === modelValue }"
          :key="index"
          @click="emit('update:modelValue', version)"
        >
          {{ version }}
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
const props = defineProps({
  versions: Array,
  modelValue: String
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return this.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  }
});
</script>
