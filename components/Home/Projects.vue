<template>
  <Row
    icon="i-logos:web-dev-icon?mask text-4"
    :title="$t('projects.title')"
    :to="localePath('/projects')"
    :show-more="projects.length > 3"
  />

  <template v-if="projects.length > 0">
    <Row
      v-for="item in projects.slice(0, 3)"
      :key="item.title"
      :title="item.title!"
      :description="item.description"
      :to="item._path"
    />
  </template>
  <Row v-else :title="$t('notYet', $t('project', 2))" />
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const { data: projects } = await useAsyncData('projects', () => queryContent(localePath('/projects')).limit(4).find(), {
  default: () => [],
});
</script>
