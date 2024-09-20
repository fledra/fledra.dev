<template>
  <RowHeading :title="$t('articles.title')" :to="localePath('/articles')" icon="i-gravity-ui:square-article" />

  <template v-if="articles.length > 0">
    <Row
      v-for="item in articles.slice(0, 3)"
      :key="item.title"
      :title="item.title!"
      :description="item.description"
      :to="item._path"
    />
  </template>
  <Row v-else :title="$t('notYet', { what: $t('article', 2) })" />
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const { data: articles } = await useAsyncData('articles', () => queryContent(localePath('/articles')).limit(4).find(), {
  default: () => [],
});
</script>
