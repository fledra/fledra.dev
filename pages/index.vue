<template>
  <div flex="~ col" h-full justify-between overflow-hidden>
    <HomeProjects />
    <HomeArticles />
    <HomePhotos />
    <Row :title="$t('aboutMe')" icon="i-cib:about-me" :to="localePath('/about')" border-b-none />
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
