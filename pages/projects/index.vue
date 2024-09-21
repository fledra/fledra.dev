<template>
  <div flex="~ col" h-full overflow-hidden>
    <RowHeading :title="$t('projects.title')" icon="i-logos:web-dev-icon?mask text-4" py-10 />

    <ContentList :query="query">
      <template #default="{ list }">
        <div h-full flex="~ col" justify-between>
          <div>
            <Row
              v-for="project in list"
              :key="project._id"
              :to="project._path"
              :title="project.title!"
              :description="project.description"
              py-7
              max-h-25
            />
          </div>
          <RowPagination v-if="pagination.total > pagination.pageSize" :pagination="pagination" />
        </div>
      </template>
      <template #not-found>
        <Row :title="$t('notYet', { what: $t('project', 2) })" border-b-none />
      </template>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
const { query, pagination } = await useContentQuery();
</script>
