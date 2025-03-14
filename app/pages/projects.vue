<template>
  <div class="flex flex-col">
    <CollectionList
      icon="i-logos:web-dev-icon"
      :collection="collection"
      :title="$t('projects.title')"
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

const { t } = useI18n();
useSeoMeta({
  title: t(`${collection}.title`),
});
</script>
