<template>
  <adsbygoogle
    class="adsbygoogle text-center"
    :class="{
      'border border-gray-200 dark:border-gray-800 rounded': !adLayout
    }"
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
