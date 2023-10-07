/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vue-green': '#42b883',
        'vue-blue': '#35495e',
        'vue-blue-dark': '#1f2a36',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

