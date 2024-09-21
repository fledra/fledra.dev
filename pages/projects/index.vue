<template>
  <div>
    <RowHeading :title="$t('projects.title')" icon="i-logos:web-dev-icon?mask text-4" py-10 />
    <ContentList :query="query">
      <template #default="{ list }">
        <Row
          v-for="project in list"
          :key="project._id"
          :title="project.title!"
          :description="project.description"
          py-7
        />
      </template>
      <template #not-found>
        <Row :title="$t('notYet', { what: $t('project', 2) })" />
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
