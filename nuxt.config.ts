// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devServer: {
    port: 1337,
  },

  devtools: {
    enabled: true,
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
    'radix-vue/nuxt',
  ],

  css: [
    '@unocss/reset/normalize.css',
    '@unocss/reset/sanitize/sanitize.css',
    '@unocss/reset/sanitize/assets.css',
    '@unocss/reset/eric-meyer.css',
    '@/styles/global.css',
  ],

  eslint: {
    config: {
      typescript: true,
    },
  },

  image: {
    provider: 'ipx',
    dir: 'public/images',
    ipx: {
      sharpOptions: {
        limitInputPixels: 1577536,
      },
    },
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
  },

  i18n: {
    lazy: true,
    bundle: {
      compositionOnly: true,
    },
    types: 'composition',
    strategy: 'no_prefix',
    langDir: 'locales',
    defaultDirection: 'ltr',
    defaultLocale: 'en-US',
    locales: [
      {
        code: 'en-US',
        language: 'en-US',
        name: 'English (US)',
        file: 'en-US.json',
      },
      {
        code: 'tr',
        language: 'tr-TR',
        name: 'Türkçe',
        file: 'tr-TR.json',
      },
    ],
  },
});
