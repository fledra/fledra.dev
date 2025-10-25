// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devServer: {
    port: 1337,
  },

  devtools: {
    enabled: true,
  },

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: false,
    },
  },

  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/i18n', '@nuxt/content', '@nuxt/image'],

  css: ['~/assets/styles/main.css'],

  eslint: {
    config: {
      standalone: false,
    },
  },

  ui: {
    colorMode: true,
    fonts: true,
  },

  content: {
    database: {
      type: 'd1',
      bindingName: 'DB',
    },
  },

  mdc: {
    components: {
      prose: true,
    },
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
    restructureDir: 'app',
    langDir: 'locales',
    strategy: 'prefix',
    defaultDirection: 'ltr',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      redirectOn: 'root',
      useCookie: true,
      cookieSecure: true,
      cookieKey: 'site-lang',
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
