<template>
  <div
    flex-inline
    justify-center
    cursor="default hover:pointer"
    transition="all duration-300"
    bg="hover:(primary-200/40 dark:primary-200/40)"
    p-2
    rounded-md
    @click="toggle"
  >
    <UnoIcon flex text-6 color="primary-500 dark:primary-300" transition="all duration-300" :class="icon" />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const icon = computed(() => {
  switch (colorMode.preference) {
    case 'light':
      return 'i-line-md:sunny-filled-loop';
    case 'dark':
    default:
      return 'i-line-md:moon-filled-loop';
  }
});

function toggle() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
}
</script>

<style scoped></style>
