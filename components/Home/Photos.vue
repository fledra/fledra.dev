<template>
  <Row icon="i-ion:md-aperture" :title="$t('photos.title')" :to="localePath('/photos')" />
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>

<style scoped></style>
