<template>
  <RowHeading :title="$t('projects.title')" :to="path" icon="i-logos:web-dev-icon?mask text-4" />

  <template v-if="projects.length">
    <Row
      v-for="project in projects"
      :key="project._id"
      :to="project._path"
      :title="project.title!"
      :description="project.description"
      py-7
      max-h-25
    />
  </template>
  <Row v-else :title="$t('notYet', { what: $t('project', 2) })" border-b-none />
</template>

<script setup lang="ts">
const { data: projects, path } = await useContentList('projects');
</script>
