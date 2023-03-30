<template>
  <div class="w-auto bg-white flex-col border-b-blue-900 border-b-4 flex">
    <div class="flex flex-row h-20 xs:h-16 items-center justify-center">
      <div class="flex-1 ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="designMenu" class="w-8 h-8 xs:w-6 xs:h-6 fill-current" @click="triggerMenu">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <img src="https://cdn.pixabay.com/photo/2016/03/31/14/56/garbage-1292874_960_720.png" class="w-12 h-12 mr-4" alt="">
    </div>
    <div v-if="showMenu" class="flex flex-col bg-white items-center space-y-2 mt-2 py-4 xs:text-sm">
      <ul class="space-y-1.5">
        <li class="hover:border-b-4 rounded-full hover:border-blue-900 px-32 text-center underline">
          <RouterLink to="/" @click="closeMenu">Quiz</RouterLink>
        </li>
        <li class="hover:border-b-4 rounded-full hover:border-blue-900 px-32 text-center underline">
          <RouterLink to="/cause" @click="closeMenu">Ursachen</RouterLink>
        </li>
        <li class="hover:border-b-4 rounded-full hover:border-blue-900 px-32 text-center underline">
          <RouterLink to="/consequences" @click="closeMenu">Folgen</RouterLink>
        </li>
        <li class="hover:border-b-4 rounded-full hover:border-blue-900 px-32 text-center underline">
          <RouterLink to="/measures" @click="closeMenu">Maßnahmen</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data (){
    return {
      showMenu: false
    }
  },
  computed: {
    designMenu () {
      return {
        'border-r-2 border-l-2': this.showMenu,
        'border-t-2 border-b-2': !this.showMenu
      }
    }
  },
  methods: {
    triggerMenu () {
      this.showMenu = !this.showMenu
    },
    closeMenu () {
      this.showMenu = false
    }
  }
}
</script>