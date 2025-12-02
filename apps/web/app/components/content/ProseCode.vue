<template>
  <div class="group relative" :class="`language-${language}`">
    <UButton
      :icon="icon"
      variant="solid"
      class="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity z-[1]"
      size="xs"
      tabindex="-1"
      aria-label="Copy code snippet button"
      @click="copy"
    />

    <span
      v-if="filename"
      class="text-neutral-400 dark:text-neutral-500 absolute right-3 bottom-3 text-sm group-hover:opacity-0 transition-opacity"
    >
      {{ filename }}
    </span>

    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  code: {
    type: String,
    default: ""
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array,
    default: () => []
  },
  meta: {
    type: String,
    default: null
  }
});

const clipboard = useCopyToClipboard({ timeout: 2000 });
const icon = ref("i-heroicons-clipboard-document-solid");

function copy() {
  clipboard.copy(props.code, { title: "Copied to clipboard!" });

  icon.value = "i-heroicons-check-solid";

  setTimeout(() => {
    icon.value = "i-heroicons-clipboard-document-solid";
  }, 2000);
}
</script>
