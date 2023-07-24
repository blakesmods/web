<template>
  <div
    class="p-1 rounded-xl"
    style="
      background-image: linear-gradient(
        270deg,
        var(--secondary-color) -12.17%,
        var(--primary-color) 114.78%
      );
    "
  >
    <UCard
      class="w-full h-full border-none"
      v-bind="$props"
      :ui="{
        header: {
          base: 'border-b border-gray-300/50 dark:border-gray-700/50'
        },
        background: 'bg-gray-200/90 dark:bg-gray-800/90'
      }"
    >
      <template v-if="$slots.header" #header>
        <slot name="header" />
      </template>
      <slot />
      <template v-if="$slots.footer" #footer>
        <slot name="footer" />
      </template>
    </UCard>
  </div>
</template>
