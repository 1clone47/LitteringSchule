<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { MENU } from './navbar-items'
import LanguageDropdown from "~/components/Modal/LanguageDropdown.vue"

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})

const isOpen = ref(false)
</script>

<template>
  <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink to="/" class="flex items-center">
        <img src="~/assets/images/icon.png" class="h-8 mr-3" alt="Littering logo">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Littering</span>
      </NuxtLink>
      <div class="flex md:order-2">
        <button type="button" class="text-transparent bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Sprachen</button>
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:mr-8" id="navbar-sticky">
        <RouterLink v-for="menu in MENU" v-slot="{ isActive }" :to="menu.url" class="flex flex-col font-medium md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <button :class="{'text-green-400' : isActive, 'text-gray-900' : !isActive}" class="md:block text-lg flex h-full w-full py-3 pl-3 items-center justify-center md:ml-5 md:mr-5 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:p-0 dark:text-white md:dark:hover:text-green-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            {{ menu.key }}
          </button>
        </RouterLink>
      </div>
    </div>
  </nav>
  <LanguageDropdown :is-open="isOpen" @close-dialog="isOpen = false"/>
</template>
