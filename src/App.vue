<script setup>
import NavBar from './components/NavBar.vue'
import FooterBar from "./components/FooterBar.vue";
import { RouterView } from 'vue-router'
</script>

<template>
  <NavBar />
  <RouterView />
  <div class="mt-4">
    <FooterBar />
  </div>

</template>