<template>
  <div :class="['badge', color]">
    <span><slot /></span>
  </div>
</template>

<script setup>
defineProps({
  color: String
});
</script>

<style lang="scss" scoped>
.badge {
  display: inline-block;
  padding: 1px 5px;
  border-radius: 4px;
  background-color: theme("colors.primary.DEFAULT");

  &.green {
    background-color: #50a530;
  }

  span {
    display: flex;
    font-size: 14px;
    font-weight: bold;
  }
}
</style>
