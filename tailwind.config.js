const production = !process.env.ROLLUP_WATCH;
module.exports = {
  mode: 'jit',
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    enabled: production
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#174682",
          "variant": "#5576b7",
        },
        accent: {
          DEFAULT: "#d6a419",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
