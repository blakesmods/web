<template>
  <header
    class="fixed w-full h-[73px] top-0 z-40 shadow bg-surface-ground border-b border-b-surface-border"
  >
    <div class="container flex h-full m-auto px-4 justify-between items-center">
      <div class="flex items-center gap-8">
        <ReactiveLogo />
        <ModsDropdown />
      </div>

      <div class="flex">
        <Search />

        <div class="flex justify-end items-center pl-2 text-2xl leading-4">
          <a
            class="ml-3"
            href="https://github.com/blakesmods/web"
            title="GitHub"
            target="_blank"
          >
            <i class="pi pi-github !text-[24px]"></i>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import ModsDropdown from "~/components/default/ModsDropdown.vue";
import ReactiveLogo from "~/components/default/ReactiveLogo.vue";
import Search from "~/components/docs/Search.vue";
</script>
