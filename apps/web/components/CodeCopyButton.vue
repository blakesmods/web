<template>
  <Button
    ref="copy"
    class="copy p-button-outlined"
    :icon="`pi ${state === 'copied' ? 'pi-check' : 'pi-copy'}`"
  />
</template>

<script setup>
import Clipboard from "clipboard";

const copy = ref(null);
const state = ref("init");

onMounted(() => {
  const clipboard = new Clipboard(copy.value, {
    target(trigger) {
      return trigger.previousElementSibling;
    }
  });

  clipboard.on("success", event => {
    event.clearSelection();

    state.value = "copied";

    setTimeout(() => {
      state.value = "init";
    }, 2000);
  });
});
</script>
