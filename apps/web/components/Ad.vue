<template>
  <ins
    class="adsbygoogle text-center"
    :class="{ 'border border-surface-border rounded': !adLayout }"
    style="display: block"
    data-ad-client="ca-pub-9433168950133481"
    :data-ad-layout="adLayout"
    :data-ad-slot="adSlot"
    :data-ad-format="adFormat"
  ></ins>
</template>

<script setup>
defineProps({
  adSlot: String,
  adFormat: {
    type: String,
    default: "auto"
  },
  adLayout: String
});

useHead({
  script: [
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9433168950133481",
      async: true,
      crossorigin: "anonymous"
    },
    {
      children: "(adsbygoogle = window.adsbygoogle || []).push({});"
    }
  ]
});
</script>
