<template>
  <div class="relative flex items-center justify-center p-6">
    <UPagination
      v-model:page="page"
      :items-per-page="pageSize"
      :total="total"
      :sibling-count="1"
      :show-edges="false"
      :disabled="total === 0"
      size="lg"
    />

    <div class="absolute right-6 flex items-center gap-2">Showing {{ size }} of {{ total }}</div>
  </div>
</template>

<script setup lang="ts">
import type usePagination from '~/composables/usePagination';

interface CollectionPaginationProps {
  pagination: ReturnType<typeof usePagination>;
}

const { pagination } = defineProps<CollectionPaginationProps>();
const { page, pageSize, total } = pagination;
const size = computed(() => Math.min(pageSize.value, total.value));
</script>
