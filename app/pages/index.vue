<template>
  <div>
    <CollectionList collection="projects" :title="$t('projects.title')" icon="i-logos:web-dev-icon" :limit="3" />
    <CollectionList collection="articles" :title="$t('articles.title')" icon="i-custom:articles" :limit="3" />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Home',
});
</script>
