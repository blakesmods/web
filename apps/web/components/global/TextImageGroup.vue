<template>
  <div class="images">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.images {
  display: flex;
  margin: -10px;

  .image {
    margin: 10px;
  }

  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
  }
}
</style>
