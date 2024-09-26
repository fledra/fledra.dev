<template>
  <RowHeading :title="$t('articles.title')" :to="path" icon="i-gravity-ui:square-article" />

  <template v-if="articles.length">
    <Row
      v-for="(article, i) in articles"
      :key="i"
      :to="article._path"
      :title="article.title!"
      :description="article.description"
      py-7
      max-h-25
    />
  </template>
  <Row v-else :title="$t('notYet', { what: $t('article', 2) })" border-b-none />
</template>

<script setup lang="ts">
const { data: articles, path } = await useContentList('articles');
</script>
