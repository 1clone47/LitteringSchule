<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <div class="h-screen w-full bg-[#E7EBF0] dark:bg-[#062338]">
    <NuxtLayout />
  </div>
</template>