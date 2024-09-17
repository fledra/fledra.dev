<template>
  <div flex="~ col" h-full justify-between>
    <HomeRow title="About" icon="i-cib:about-me" :to="localePath('/about')" border-b-none />
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
