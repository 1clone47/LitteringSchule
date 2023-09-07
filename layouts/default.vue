<template>
  <Navbar />
  <div class="w-full min-h-screen bg-[#E7EB2]">
    <NuxtPage />
  </div>
  <Footer />
</template>

<script setup>
import Navbar from '~/components/Navbar/index.vue'
import Footer from '~/components/Footer/index.vue'
</script>