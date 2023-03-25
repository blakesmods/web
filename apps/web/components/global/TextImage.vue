<template>
  <div
    class="flex flex-col bg-surface-card border border-surface-border rounded overflow-hidden"
  >
    <img class="w-full" :src="src" alt="" />
    <div class="px-3 py-2 text-xs border-t border-surface-border">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: String
});
</script>
