<template>
  <div class="flex text-2xl p-4 space-x-8 bg-transparent text-white">
    <div v-for="menu in MENU" class="border-b-4 border-transparent hover:border-green-500">
      <NuxtLink :to="menu.url">
        {{ menu.key }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { MENU } from '~/components/Navbar/navbar-items'

const route = useRoute()
const path = ref(route.path)

const show = () => {
  console.log(route.path)
}
</script>