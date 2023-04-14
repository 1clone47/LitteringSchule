/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      screens: {
        'xs': {'min': '2px', 'max': '575px'},
        'sm': {'min': '576px', 'max': '767px'},
        'md': {'min': '768px', 'max': '991px'},
        'lg': {'min': '992px', 'max': '1199px'},
        'xl': {'min': '1200px'},
      },
      extend: {
        backgroundImage: {
          'dark-wallpaper': "url('https://images.unsplash.com/photo-1498248529262-f5084e1d0d36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
          'light-wallpaper': "url('https://images.unsplash.com/photo-1612005895561-3f5d51368ca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80')"
        } 
        },
    },
    plugins: [],
  }
  