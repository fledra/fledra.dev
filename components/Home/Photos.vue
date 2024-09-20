<template>
  <RowHeading :title="$t('photos.title')" :to="localePath('/photos')" icon="i-ion:md-aperture" />
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>

<style scoped></style>
