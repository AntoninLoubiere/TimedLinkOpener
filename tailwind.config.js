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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
