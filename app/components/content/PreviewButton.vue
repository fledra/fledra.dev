<template>
  <UButton :to="to" target="_blank" size="xl" external>
    {{ $t('preview') }}
  </UButton>
</template>

<script setup lang="ts">
defineProps<{ to: string }>();
</script>

<style scoped></style>
