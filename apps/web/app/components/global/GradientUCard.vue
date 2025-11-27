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
        root: 'bg-neutral-200 dark:bg-neutral-800/90',
        header: 'pb-0 border-0',
        body: '!border-0'
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
