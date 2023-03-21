<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="w-auto">
    <div class="flex flex-row w-auto h-20 xs:h-16 bg-white items-center justify-center border-b-4 border-blue-900 xs:text-xs bg-white">
      <RouterLink to="/" class="flex-1 hover:text-blue-900 items-center text-center justify-center xl:font-bold  xs:mr-2">QUIZ</RouterLink>
      <RouterLink to="/cause"  class="flex-1 hover:text-blue-900 text-center xl:font-bold">URSACHEN</RouterLink>
      <RouterLink to="/consequences" class="flex-1 hover:text-blue-900 text-center xl:font-bold">FOLGEN</RouterLink>
      <RouterLink to="/measures" class="flex-1 hover:text-blue-900 text-center xl:font-bold xs:mr-2">MAßNAHMEN</RouterLink>
    </div>
    </div>
</template>