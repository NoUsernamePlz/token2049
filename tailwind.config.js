/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {

      screens:{
        'xs':'250px',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #ff7e5e, #feb47b)', // You can customize the gradient colors here
      },
    },
  },
  plugins: [],
}

