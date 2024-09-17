<template>
  <div flex bg-background-default color-text-default h-dvh overflow-hidden>
    <ConfigProvider :use-id="useIdFn">
      <AppHeader />
      <main flex-grow-1 overflow-y-auto>
        <NuxtPage />
      </main>
    </ConfigProvider>
  </div>
</template>

<script setup lang="ts">
const useIdFn = () => useId()!;
</script>
