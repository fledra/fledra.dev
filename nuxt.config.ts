// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-03-12',

  future: {
    compatibilityVersion: 4,
  },

  devServer: {
    port: 1337,
  },

  devtools: {
    enabled: true,
  },

  modules: ['@nuxt/eslint', '@nuxt/ui'],

  css: ['~/assets/styles/main.css'],

  eslint: {
    config: {
      typescript: true,
    },
  },

  ui: {
    colorMode: true,
    fonts: true,
  },

  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: 'app/assets/icons',
      },
    ],
  },

  fonts: {
    defaults: {
      weights: [300, 400, 500, 600, 700],
      styles: ['normal', 'italic'],
    },
  },

  colorMode: {
    fallback: 'dark',
    storageKey: 'color-mode',
  },
});
