<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="w-full">
    <div class="flex flex-row w-screen h-16 bg-white items-center border-b-4 border-blue-900">
      <RouterLink to="/" class="flex-1 hover:text-blue-900 text-center">UNSER QUIZ</RouterLink>
      <RouterLink to="/cause"  class="flex-1 hover:text-blue-900 text-center">URSACHEN</RouterLink>
      <RouterLink to="/consequences" class="flex-1 hover:text-blue-900 text-center">FOLGEN</RouterLink>
      <RouterLink to="/measures" class="flex-1 hover:text-blue-900 text-center">MAßNAHMEN</RouterLink>
    </div>
  </div>
</template>