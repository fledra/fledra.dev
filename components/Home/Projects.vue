<template>
  <RowHeading :title="$t('projects.title')" :to="path" icon="i-logos:web-dev-icon?mask text-4" />

  <template v-if="projects.length > 0">
    <Row
      v-for="project in projects"
      :key="project.title"
      :title="project.title!"
      :description="project.description"
      :to="project._path"
    />
  </template>
  <Row v-else :title="$t('notYet', { what: $t('project', 2) })" />
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const path = localePath('/projects');

const { data: projects } = await useAsyncData('home-projects', () => queryContent(path).limit(3).find(), {
  default: () => [],
});
</script>
