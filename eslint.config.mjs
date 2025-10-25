import fledra from '@fledra/eslint-config';
import prettier from 'eslint-plugin-prettier/recommended';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(fledra(), prettier, {
  languageOptions: {
    globals: {
      defineNuxtConfig: 'readonly',
    },
  },
});
