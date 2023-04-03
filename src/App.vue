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
  display: flex;
  flex-direction: column;
  background: url("src/assets/background-nature.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

}
#footer {
  margin-top: auto;
}
</style>