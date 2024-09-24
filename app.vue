<template>
  <div flex bg-background-default color-text-default h-dvh overflow-hidden>
    <ConfigProvider :use-id="useIdFn">
      <AppHeader w="2/5" h-dvh />
      <main w="3/5" h-dvh overflow-y-auto>
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
  onBeforeEnter: async () => {
    await finalizePendingLocaleChange();
  },
};
</script>
