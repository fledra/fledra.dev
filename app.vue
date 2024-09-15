<template>
  <div flex bg-background-default color-text-default>
    <ConfigProvider :use-id="useIdFn">
      <AppHeader />
      <main flex flex-grow-1 overflow-y-auto>
        <NuxtPage />
      </main>
    </ConfigProvider>
  </div>
</template>

<script setup lang="ts">
const useIdFn = () => useId()!;
</script>
