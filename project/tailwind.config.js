/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontSize: {
      title: '48px',
      titlemobile: '30px',
      '25px': '25px',
      '35px': '35px',
      '18px': '18px',
      '16px': '16px',
      '60px': '60px',
      '10px': '10px',
      '30px': '30px',
      '12px': '12px',
    },
    extend: {
      colors: {
        'regal-blue': '#01305f',
        'brown-start': '#d1865e',
        'brown-end': '#985230',
        'about-gray': '#e1e1e1',
      },
    },

    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '',
        lg: '',
        xl: '',
        '2xl': '2.55rem',
      },
    },
  },
  plugins: [

    require('flowbite/plugin')

  ],
}
