<template>
  <div>
    <RowHeading :title="$t('articles.title')" icon="i-logos:web-dev-icon?mask text-4" py-10 />
    <ContentList :query="query">
      <template #default="{ list }">
        <Row
          v-for="article in list"
          :key="article._id"
          :title="article.title!"
          :description="article.description"
          py-7
        />
      </template>
      <template #not-found>
        <Row :title="$t('notYet', { what: $t('article', 2) })" />
      </template>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
const { query } = await useContentQuery();

definePageMeta({
  middleware: 'content-pagination',
});
</script>
