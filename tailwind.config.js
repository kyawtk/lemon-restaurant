/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   fontFamily:{
    sans:[ "Karla", 'system-ui', 'sans-serif'],
    serif: ["Markazi Text", 'serif']
   },
    extend: {
      colors: {
        "lemon": "#f4ce14",
        "gray": "#49se57",
        "black": "#333333"
      },
    },
  },
  plugins: [],
};
