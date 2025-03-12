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

  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/i18n', '@nuxt/content'],

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

  i18n: {
    lazy: true,
    restructureDir: 'app',
    langDir: 'locales',
    types: 'composition',
    strategy: 'prefix',
    defaultDirection: 'ltr',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      redirectOn: 'root',
      useCookie: true,
      cookieSecure: true,
      cookieKey: 'site_lang',
      fallbackLocale: 'en',
    },
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'tr',
        language: 'tr-TR',
        name: 'Türkçe',
        file: 'tr.json',
      },
    ],
  },
});
