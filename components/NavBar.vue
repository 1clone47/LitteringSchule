<template>
  <div class="w-auto bg-white dark:bg-zinc-900 text-black dark:text-white flex-col border-b-green-500 border-b-4 flex">
    <div class="flex flex-row h-14 xs:h-8 items-center justify-center">
      <div class="flex-1 ml-4 mt-8 xs:mt-7">
        <svg v-if="!showMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="designMenu" class="w-8 h-8 xs:w-6 xs:h-6 fill-current transition-all" @click="triggerMenu">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="designMenu" class="w-8 h-8 xs:w-6 xs:h-6 fill-current transition-all" @click="triggerMenu">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
        </svg>
      </div>
      <img src="https://cdn.pixabay.com/photo/2016/03/31/14/56/garbage-1292874_960_720.png" class="w-12 h-12 mr-4 mt-8 xs:mt-7" alt="">
    </div>
    <div :class="showMenuItems" class="inactive py-4 flex flex-col duration-500 transition-all space-y-3">
      <NuxtLink to="/" :class="showMenuContent" class="rounded-full px-32 text-center" @click="triggerMenu"><span :class="{'border-b-2 border-green-500 font-bold' : route.name === 'index'}" class="hover:font-bold">Home</span></NuxtLink>
      <NuxtLink to="quiz" :class="showMenuContent" class="rounded-full px-32 text-center" @click="triggerMenu"><span :class="{'border-b-2 border-green-500 font-bold' : route.name === 'quiz'}" class="hover:font-bold">Quiz</span></NuxtLink>
      <NuxtLink to="causes" :class="showMenuContent" class="rounded-full px-32 text-center" @click="triggerMenu"><span :class="{'border-b-2 border-green-500 font-bold' : route.name === 'causes'}" class="hover:font-bold">Ursachen</span></NuxtLink>
      <NuxtLink to="consequences" :class="showMenuContent" class="rounded-full px-32 text-center" @click="triggerMenu"><span :class="{'border-b-2 border-green-500 font-bold' : route.name === 'consequences'}" class="hover:font-bold">Folgen</span></NuxtLink>
      <NuxtLink to="measures" :class="showMenuContent" class="rounded-full px-32 text-center" @click="triggerMenu"><span :class="{'border-b-2 border-green-500 font-bold' : route.name === 'measures'}" class="hover:font-bold">Maßnahmen</span></NuxtLink>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router';


// data
const route = useRoute()
const path = route.name

const showMenu = ref(false)
const showContent = ref(false)

// methods
const sleep = ((ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
})

async function triggerMenu() {
  if (showMenu.value) {
      await closeMenu()
  } else {
      await openMenu()
  }
}

async function openMenu() {
  showMenu.value = true
  await sleep(280)
  showContent.value = true
}

async function closeMenu() {
  showContent.value = false
  showMenu.value = false
}

// Computeds
const designMenu = computed(() => {
  return {
      'animate-bounce border-r-2 border-l-2' : showMenu.value,
      'border-t-2 border-b-2' : !showMenu.value 
  }
})

const showMenuContent = computed(() => {
  return {
    'hidden' : !showContent.value
  }
})

const showMenuItems = computed(() => {
  return {
    'active' : showMenu.value
  }
})
</script>