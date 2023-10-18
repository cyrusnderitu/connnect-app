/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'popps': ['Poppins', 'sans-serif']
      },
      backgroundImage:{
        'text': "url('/src/assets/endless-constellation.svg')",
        'prof': "url('/src/assets/hollowed-boxes.svg')",
      }
    },
  },
  plugins: [],
}
