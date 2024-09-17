<template>
  <div flex="~ col" h-full justify-between>
    <HomeRow
      title="Projects"
      icon="i-logos:web-dev-icon?mask text-4"
      :to="localePath('/projects')"
      :show-more="projects.length > 3"
      py-2
    />
    <template v-if="projects">
      <HomeRow
        v-for="item in projects.slice(0, 3)"
        :key="item.title"
        :title="item.title!"
        :description="item.description"
      />
    </template>
    <HomeRow v-else title="No projects yet!" />

    <HomeRow
      title="Articles"
      icon="i-gravity-ui:square-article"
      :to="localePath('/articles')"
      :show-more="articles.length > 3"
      py-2
    />
    <template v-if="articles.length > 0">
      <HomeRow
        v-for="item in articles.slice(0, 3)"
        :key="item.title"
        :title="item.title!"
        :description="item.description"
      />
    </template>
    <HomeRow v-else title="No articles yet!" />

    <HomeRow title="Photobooth" icon="i-ion:md-aperture" py-2 />
    <HomeRow title="No photos yet!" />

    <HomeRow title="About" icon="i-cib:about-me" :to="localePath('/about')" border-b-none />
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
