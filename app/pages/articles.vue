<template>
  <div class="flex flex-col">
    <CollectionList
      :collection="collection"
      title="Articles"
      icon="i-custom:articles"
      :skip="pagination.skip"
      disabled
    />
    <CollectionPagination :pagination="pagination" />
  </div>
</template>

<script setup lang="ts">
import type { Collections } from '@nuxt/content';

const collection: keyof Collections = 'articles';
const { count } = await useCollectionSize(collection);
const pagination = usePagination({
  page: 1,
  pageSize: 10,
  total: count,
});
</script>
