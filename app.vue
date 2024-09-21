<template>
  <div flex bg-background-default color-text-default h-dvh overflow-hidden>
    <ConfigProvider :use-id="useIdFn">
      <AppHeader w="2/5" h-dvh />
      <main w="3/5" h-dvh overflow-y-auto>
        <NuxtPage />
      </main>
    </ConfigProvider>
  </div>
</template>

<script setup lang="ts">
const useIdFn = () => useId()!;
</script>
