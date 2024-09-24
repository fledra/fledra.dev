<template>
  <RowHeading :title="$t('articles.title')" :to="path" icon="i-gravity-ui:square-article" />

  <ContentList :query="query">
    <template #default="{ list }">
      <Row
        v-for="article in list"
        :key="article._id"
        :to="article._path"
        :title="article.title!"
        :description="article.description"
        py-7
        max-h-25
      />
    </template>
    <template #not-found>
      <Row :title="$t('notYet', { what: $t('article', 2) })" border-b-none />
    </template>
  </ContentList>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const path = computed(() => localePath('/articles'));
const { query } = await useContentQuery({ path, pagination: { pageSize: 3 } });
</script>
