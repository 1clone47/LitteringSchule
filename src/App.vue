<script setup>
import NavBar from './components/NavBar.vue'
import FooterBar from "./components/FooterBar.vue";
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="body">
    <NavBar />
    <RouterView />
    <FooterBar id="footer"/>
  </div>
</template>

<style>
#body {
  min-height: 100vh;
  background: blue;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
#footer {
  margin-top: auto;
}
</style>