<template>
  <div>
    <div class="bg-gray-100 border-b-4 border-blue-900">
      <nav
          class="
          container
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <router-link
              to="/"
              class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400
            "
          >
            Quiz
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
                type="button"
                class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
              </svg>

            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <RouterLink to="/cause">Ursachen</RouterLink>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <RouterLink to="/consequences">Folgen</RouterLink>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <RouterLink to="/measures">Maßnahmen</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>