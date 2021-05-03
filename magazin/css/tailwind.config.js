module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          450: '#2b5d8e'
        },
      },
      backgroundImage: theme => ({
        'gallery_1': "url('/magazin/images/gallery_1.png')",
        'gallery_2': "url('/magazin/images/gallery_2.png')",
        'gallery_3': "url('/magazin/images/gallery_3.png')",
        'gallery_4': "url('/magazin/images/gallery_4.png')",
        'gallery_5': "url('/magazin/images/gallery_5.png')",
        'gallery_6': "url('/magazin/images/gallery_6.png')",
        'gallery_7': "url('/magazin/images/gallery_7.png')",
        'gallery_8': "url('/magazin/images/gallery_8.png')",
       })
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [],
}
