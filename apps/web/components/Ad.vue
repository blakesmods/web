<template>
  <adsbygoogle
    class="adsbygoogle text-center"
    :class="{ 'border border-surface-border rounded': !adLayout }"
    :ad-layout="adLayout"
    :ad-slot="adSlot"
    :ad-format="adFormat"
  />
</template>

<script setup>
defineProps({
  adSlot: String,
  adFormat: String,
  adLayout: String
});
</script>
