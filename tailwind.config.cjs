const colorReplace = require('./src/functions/colorReplace.cjs');

const colors = require('tailwindcss/colors');

const primary = colorReplace('#ff3e00');

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  purge: {
    content: ['./src/**/*.svelte'],
    enabled: process.env.NODE_ENV !== 'development', // disable purge in dev,
    safelist: [/^text-/, /^bg-/, /^border-/]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      primary,
      // primary: "#00fff7",
      gray: colors.coolGray,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
      dark: colors.blueGray,
      light: colors.white
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Open Sans',
        'Helvetica Neue',
        'sans-serif'
      ],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
