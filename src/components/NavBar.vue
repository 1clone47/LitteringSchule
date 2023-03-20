<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="w-auto">
    <div class="flex flex-row w-auto h-20 xs:h-16 bg-white items-center border-b-4 border-blue-900 xs:text-xs ">
      <RouterLink to="/" class="flex-1 hover:text-blue-900 text-center">QUIZ</RouterLink>
      <RouterLink to="/cause"  class="flex-1 hover:text-blue-900 text-center">URSACHEN</RouterLink>
      <RouterLink to="/consequences" class="flex-1 hover:text-blue-900 text-center">FOLGEN</RouterLink>
      <RouterLink to="/measures" class="flex-1 hover:text-blue-900 text-center xs:mr-2">MAßNAHMEN</RouterLink>
    </div>
    </div>
</template>