<template>
  <UButton :icon="icon" class="w-10 justify-center" variant="ghost" @click="toggle" />
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed(() => ['dark', 'system'].includes(colorMode.preference));
const icon = computed(() => {
  switch (colorMode.preference) {
    case 'light':
      return 'i-lucide-sun';
    case 'dark':
    default:
      return 'i-lucide-moon-star';
  }
});

function toggle() {
  colorMode.preference = isDark.value ? 'light' : 'dark';
}
</script>
