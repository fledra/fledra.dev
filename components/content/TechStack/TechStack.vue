<template>
  <h2 id="tech-stack" mb-6>
    <NuxtLink to="#tech-stack">
      {{ $t('techStack') }}
    </NuxtLink>
  </h2>
  <div flex gap-4>
    <TechStackIcon v-for="tech in props.stack" :key="tech" :name="tech" />
  </div>
</template>

<script setup lang="ts">
interface TechStackProps {
  stack: string[];
}

const props = defineProps<TechStackProps>();
</script>
