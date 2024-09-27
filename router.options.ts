import type { RouterConfig } from '@nuxt/schema';

export default {
  async scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();

    if (nuxtApp.$i18n && to.name !== from.name) {
      await nuxtApp.$i18n.waitForPendingLocaleChange();
    }

    console.log(savedPosition);

    return savedPosition || { top: 0 };
  },
} satisfies RouterConfig;
