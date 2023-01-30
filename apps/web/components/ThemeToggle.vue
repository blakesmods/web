<template>
  <div class="theme-toggle" @click="onToggleTheme">
    <div v-if="theme === 'light'" class="light">
      <i class="pi pi-sun"></i>
    </div>
    <div v-else class="dark">
      <i class="pi pi-moon"></i>
    </div>
  </div>
</template>

<script setup>
const theme = useColorMode();

function onToggleTheme() {
  const current = theme.value;

  theme.value = current === "dark" ? "light" : "dark";
}
</script>

<style lang="scss" scoped>
.theme-toggle {
  width: 70px;
  height: 30px;
  padding: 5px;
  background-color: theme("colors.surface.border");
  border-radius: 16px;
  cursor: pointer;

  .light {
    display: flex;
    position: relative;
    height: 100%;
    justify-content: flex-end;
    align-items: center;

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      top: 0;
      left: 0;
      background-color: theme("colors.surface.text");
      border-radius: 100%;
    }

    .pi-sun {
      color: theme("colors.surface.text");
    }
  }

  .dark {
    position: relative;

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      top: 0;
      right: 0;
      background-color: theme("colors.surface.text");
      border-radius: 100%;
    }

    .pi-moon {
      color: theme("colors.surface.text");
    }
  }
}
</style>
