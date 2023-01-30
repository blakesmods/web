<template>
  <div class="image">
    <img :src="src" />
    <div class="bottom">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: String
});
</script>

<style lang="scss" scoped>
.image {
  display: flex;
  flex-direction: column;
  border: 1px solid theme("colors.surface.border");
  border-radius: 8px;
  background-color: theme("colors.surface.card");
  overflow: hidden;

  img {
    width: 100%;
  }

  .bottom {
    padding: 5px 10px;
    border-top: 1px solid theme("colors.surface.border");
    font-size: 12px;
  }
}
</style>
