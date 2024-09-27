<template>
  <NuxtLink
    v-if="props.link"
    :to="props.link"
    target="_blank"
    external
    rounded-lg
    p-3
    text-3
    md-text-4
    color-text-100
    whitespace-nowrap
    bg="primary-900 hover:primary-800"
  >
    {{ $t('projects.preview') }}
  </NuxtLink>
</template>

<script setup lang="ts">
interface DemoProps {
  link: string;
}

const props = defineProps<DemoProps>();
</script>
