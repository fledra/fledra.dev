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
    '@/styles/global.css',
  ],

  eslint: {
    config: {
      typescript: true,
    },
  },

  image: {
    provider: 'cloudinary',
    dir: 'public/images',
    format: ['webp', 'png', 'jpg'],
    ipx: {
      sharpOptions: {
        limitInputPixels: 1577536,
      },
    },
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dpkllrqps/image/upload/',
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
    strategy: 'prefix',
    langDir: 'locales',
    defaultDirection: 'ltr',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        selector: 'EN-US',
        language: 'en-US',
        name: 'English (US)',
        file: 'en-US.json',
      },
      {
        code: 'tr',
        selector: 'TR',
        language: 'tr-TR',
        name: 'Türkçe',
        file: 'tr-TR.json',
      },
    ],
  },
});
