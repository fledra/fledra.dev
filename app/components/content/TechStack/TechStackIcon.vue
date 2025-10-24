<template>
  <UTooltip :text="tech.name" :delay-duration="0" :ui="{ content: 'ring-accented dark:ring-default' }">
    <NuxtLink v-if="tech" :to="tech.link" target="_blank" external>
      <div
        class="tech after:bg-accented/90 dark:after:bg-default relative isolate flex items-center justify-center overflow-hidden rounded-lg p-4 after:rounded-lg"
        :class="{
          animate,
          'before:animate-spin': animate,
          'after:bg-default/50': animate,
          'dark:after:bg-default/50': animate,
        }"
        @mouseenter="animate = true"
        @mouseleave="animate = false"
      >
        <UIcon :name="tech.icon" class="relative z-10 text-3xl" />
      </div>
    </NuxtLink>
  </UTooltip>
</template>

<script setup lang="ts">
import type { Tech } from './TechStack.vue';

defineProps<{ tech: Tech }>();
const animate = ref(false);
</script>

<style scoped>
.tech::before {
  content: '';
  position: absolute;
  top: -25%;
  left: -25%;
  width: 150%;
  height: 150%;
  z-index: 1;
  background: conic-gradient(
    var(--color-primary-600),
    var(--color-secondary-600),
    var(--color-secondary-700),
    var(--color-primary-700),
    var(--color-primary-600)
  );
}

.tech::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  transform: translate(-50%, -50%);
  transition: all ease-in-out 300ms;
  z-index: 2;
}
</style>
