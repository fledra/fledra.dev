<template>
  <RowContainer py-7 border-b-none>
    <PaginationRoot v-model:page="page" :total="total" :sibling-count="2" :default-page="1" flex justify-center w-full>
      <PaginationList v-slot="{ items }" flex items-center gap-1>
        <PaginationFirst class="pagination-button">
          <UnoIcon text-5 class="i-radix-icons:double-arrow-left" />
        </PaginationFirst>

        <PaginationPrev class="pagination-button" mr-3>
          <UnoIcon text-5 class="i-radix-icons:chevron-left" />
        </PaginationPrev>

        <template v-for="(p, index) in items">
          <PaginationListItem v-if="p.type === 'page'" :key="index" class="pagination-button" :value="p.value">
            {{ p.value }}
          </PaginationListItem>
          <PaginationEllipsis v-else :key="p.type" :index="index" class="w-9 h-9 flex items-center justify-center">
            &#8230;
          </PaginationEllipsis>
        </template>

        <PaginationNext class="pagination-button" ml-3>
          <UnoIcon text-5 class="i-radix-icons:chevron-right" />
        </PaginationNext>

        <PaginationLast class="pagination-button">
          <UnoIcon text-5 class="i-radix-icons:double-arrow-right" />
        </PaginationLast>
      </PaginationList>
    </PaginationRoot>
  </RowContainer>
</template>

<script setup lang="ts">
interface RowPaginationProps {
  pagination: ReturnType<typeof usePagination>;
}

const { pagination } = defineProps<RowPaginationProps>();
const { page, total } = pagination;
</script>

<style scoped>
.pagination-button {
  --at-apply: flex justify-center items-center h-10 w-10 border-none rounded-md transition transition-duration-300
    bg-transparent 'data-[selected]:bg-primary-200/40' 'data-[selected]:hover:bg-primary-200/40'
    'hover:bg-primary-200/20' 'hover:disabled:bg-transparent' color-text-900 'disabled:color-text-500' cursor-pointer
    'hover:disabled:cursor-not-allowed';
}
</style>
