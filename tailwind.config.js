
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        bannerBg:"url('/dist/assets/banner-eTjIDEmb.jpg')"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

