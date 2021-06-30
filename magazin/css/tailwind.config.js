module.exports = {
  purge: {
    enabled: true,
    content: ['../**/*.js', '../**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      colors: {
        blue: {
          450: '#2b5d8e'
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [],
}
