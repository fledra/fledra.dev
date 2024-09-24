<template>
  <div flex gap-2 items-center py-4 font-mono>
    <span color-text-400>$ more</span>
    <NuxtLink :to="base" title="cd /home" color="primary-300 hover:primary-400">~</NuxtLink>
    <span>/</span>

    <div v-for="(crumb, i) in crumbs" :key="crumb.name" flex gap-2>
      <NuxtLink
        v-if="i !== crumbs.length - 1"
        :to="crumb.localePath"
        :title="crumb.title"
        color="primary-300 hover:primary-400"
      >
        {{ crumb.name }}
      </NuxtLink>
      <span v-else color="primary-400">{{ crumb.name }}</span>

      <span v-if="i !== crumbs.length - 1">/</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const localePath = useLocalePath();
const base = localePath('/');

const crumbs = computed(() =>
  route.path
    .split('/')
    .slice(2)
    .map((name, i, arr) => {
      const path = `/${arr.slice(0, i + 1).join('/')}`;
      const title = `cd /home${path}`;

      return {
        name,
        title,
        path,
        localePath: localePath(path),
      };
    }),
);
</script>
