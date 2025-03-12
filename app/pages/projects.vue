<template>
  <div class="flex flex-col">
    <CollectionList
      :collection="collection"
      title="Projects"
      icon="i-logos:web-dev-icon"
      :skip="pagination.skip"
      disabled
    />
    <CollectionPagination :pagination="pagination" />
  </div>
</template>

<script setup lang="ts">
import type { Collections } from '@nuxt/content';

const collection: keyof Collections = 'projects';
const { count } = await useCollectionSize(collection);
const pagination = usePagination({
  page: 1,
  pageSize: 10,
  total: count,
});
</script>
