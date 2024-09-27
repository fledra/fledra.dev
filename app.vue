<template>
  <div flex="md:~" bg-background-default color-text-default md-h-dvh overflow-hidden>
    <ConfigProvider :use-id="useIdFn">
      <NuxtLoadingIndicator :height="2" />
      <AppHeader w="screen md:2/5" h-md md-h-dvh />
      <main w="screen md:3/5" md-h-dvh md-overflow-y-auto>
        <NuxtPage :transition="transition" />
      </main>
    </ConfigProvider>
  </div>
</template>

<script setup lang="ts">
import type { TransitionProps } from 'vue';

const useIdFn = () => useId()!;
const { finalizePendingLocaleChange } = useI18n();

const transition: TransitionProps = {
  name: 'page',
  mode: 'out-in',
  onAfterLeave: async () => {
    await finalizePendingLocaleChange();
  },
};
</script>
