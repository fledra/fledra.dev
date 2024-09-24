<template>
  <RowHeading :title="$t('projects.title')" :to="path" icon="i-logos:web-dev-icon?mask text-4" />

  <ContentList :query="query">
    <template #default="{ list }">
      <Row
        v-for="project in list"
        :key="project._id"
        :to="project._path"
        :title="project.title!"
        :description="project.description"
        py-7
        max-h-25
      />
    </template>
    <template #not-found>
      <Row :title="$t('notYet', { what: $t('project', 2) })" border-b-none />
    </template>
  </ContentList>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const path = computed(() => localePath('/projects'));
const { query } = await useContentQuery({ path, pagination: { pageSize: 3 } });
</script>
