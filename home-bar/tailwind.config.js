/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'light-green': "#87A878",
        'dark-green': '#313715',
        'light-red': '#732C2C',
        'dark-red': '#420C14',
        'neutral': '#DBD3D8',
      },
    },
  },
  fontFamily: {
    'Alata' : ["Alata"]
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
