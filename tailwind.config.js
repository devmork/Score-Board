/** @type {import('tailwindcss').Config} */
tailwind.Config = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Orbitron']
      },

      colors: {
        primary: "#0000",
      },
    },
  },
  plugins: [],
}