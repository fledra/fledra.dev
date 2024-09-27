<template>
  <div flex="~ col" h-dvh overflow-hidden>
    <RowHeading :title="$t('articles.title')" icon="i-gravity-ui:square-article" py-10 />

    <ContentList :query="query">
      <template #default="{ list }">
        <div h-full flex="~ col" justify-between>
          <div>
            <Row
              v-for="article in list"
              :key="article._id"
              :to="article._path"
              :title="article.title!"
              :description="article.description"
              py-7
              max-h-25
            />
          </div>
          <RowPagination v-if="pagination.total > pagination.pageSize" :pagination="pagination" max-h-25 />
        </div>
      </template>
      <template #not-found>
        <Row :title="$t('notYet', { what: $t('article', 2) })" border-b-none />
      </template>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
const { query, pagination } = await useContentQuery({ useRoute: true });
</script>
