<template>
  <NuxtLink :href="href" :target="target">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
interface ProseAProps {
  href: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
}

const { href, target = '_blank' } = defineProps<ProseAProps>();
</script>
