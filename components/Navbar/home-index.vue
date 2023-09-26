<template>
  <div class="flex text-2xl p-4 space-x-8 bg-transparent text-white">
    <NuxtLink
        v-for="menu in MENU"
        class="border-b-4 hover:border-green-500"
        :class="{
            'border-green-500' : route.path === menu.url,
            'border-transparent' : route.path !== menu.url
        }"
        :to="menu.url"
    >
      <div>
        {{ menu.key }}
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { MENU } from '~/components/Navbar/navbar-items'

const route = useRoute()
</script>