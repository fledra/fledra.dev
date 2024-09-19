<template>
  <div flex="~ col" h-full justify-between overflow-hidden>
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

    <Row
      icon="i-gravity-ui:square-article"
      :title="$t('articles.title')"
      :to="localePath('/articles')"
      :show-more="articles.length > 3"
    />
    <template v-if="articles.length > 0">
      <Row
        v-for="item in articles.slice(0, 3)"
        :key="item.title"
        :title="item.title!"
        :description="item.description"
        :to="item._path"
      />
    </template>
    <Row v-else :title="$t('notYet', { what: $t('article', 2) })" />

    <Row icon="i-ion:md-aperture" :title="$t('photos.title')" :to="localePath('/photos')" />
    <Row :title="$t('notYet', { what: $t('photo', 2) })" />

    <Row :title="$t('aboutMe')" icon="i-cib:about-me" :to="localePath('/about')" border-b-none />
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const { data: projects } = await useAsyncData('projects', () => queryContent(localePath('/projects')).limit(4).find(), {
  default: () => [],
});

const { data: articles } = await useAsyncData('articles', () => queryContent(localePath('/articles')).limit(4).find(), {
  default: () => [],
});
</script>
