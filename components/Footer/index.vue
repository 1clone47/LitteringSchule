<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { FOOTER } from './footer-items'
import { APP } from '~/Constants'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})

</script>

<template>
  <footer class="w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      {{ APP.year }} | {{ APP.version }}
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <li v-for="footer in FOOTER">
        <a :href="footer.url" target="_blank" class="mr-4 hover:underline md:mr-6">{{ footer.key }}</a>
      </li>
    </ul>
  </footer>
</template>