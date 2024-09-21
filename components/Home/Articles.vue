<template>
  <RowHeading :title="$t('articles.title')" :to="path" icon="i-gravity-ui:square-article" />

  <template v-if="articles.length > 0">
    <Row
      v-for="article in articles"
      :key="article.title"
      :title="article.title!"
      :description="article.description"
      :to="article._path"
    />
  </template>
  <Row v-else :title="$t('notYet', { what: $t('article', 2) })" />
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const path = localePath('/articles');

const { data: articles } = await useAsyncData('home-articles', () => queryContent(path).limit(3).find(), {
  default: () => [],
});
</script>
