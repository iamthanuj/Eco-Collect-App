/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        mainColor:'rgb(146, 198, 126)',
        secendoryColor:'rgb(0, 160, 10)',
      },
      fontFamily:{
        inter:['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
