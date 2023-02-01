<template>
  <header
    class="fixed w-full h-16 top-0 z-40 bg-surface-ground border-b border-b-surface-border"
  >
    <div class="flex container h-16 m-auto px-4 justify-between items-center">
      <div class="flex items-center leading-4">
        <ReactiveLogo />
        <ModsDropdown class="ml-6 mr-4" />
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
import Search from "~/components/wiki/Search.vue";
</script>
