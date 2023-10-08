<template>
  <div class="w-full min-h-screen bg-[#E7EBF0]">
    <Navbar />
    <NuxtPage />
  </div>
  <Footer />
</template>

<script setup>
import Navbar from '~/components/Navbar/index.vue'
import Footer from '~/components/Footer/index.vue'
</script>