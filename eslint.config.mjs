// @ts-check
import prettier from 'eslint-plugin-prettier/recommended';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(prettier, {
  rules: {
    'vue/multi-word-component-names': 'off',
  },
});
