<template>
  <NuxtLink v-if="tech" :to="tech.link" :title="tech.name" target="_blank">
    <div
      class="tech-wrapper"
      :class="{ animate: hovering }"
      @mouseenter="hovering = true"
      @mouseleave="hovering = false"
    >
      <UnoIcon :class="tech.icon" relative text-8 z-3 />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface TechStackIconProps {
  name: string;
}

const props = defineProps<TechStackIconProps>();
const { data } = await useAsyncData('tech-data', () => queryContent('/tech').findOne());

const hovering = ref(false);
const tech = computed(() => data.value && data.value[props.name]);
</script>

<style scoped>
.tech-wrapper {
  --radius: 2px;
  --at-apply: relative overflow-hidden isolate p-4 rounded-lg;
}

.tech-wrapper.animate::before {
  --at-apply: animate-spin animate-duration-1500;
}

.tech-wrapper.animate::after {
  --at-apply: 'bg-background-100/90';
}

.tech-wrapper::before {
  content: '';
  position: absolute;
  top: -25%;
  left: -25%;
  width: 150%;
  height: 150%;
  z-index: 1;
  background: conic-gradient(
    rgba(var(--primary-600)),
    rgba(var(--accent-600)),
    rgba(var(--secondary-700)),
    rgba(var(--primary-700))
  );
}

.tech-wrapper::after {
  content: '';
  top: calc(var(--radius) / 2);
  left: calc(var(--radius) / 2);
  width: calc(100% - var(--radius));
  height: calc(100% - var(--radius));
  border-radius: var(--radius);
  --at-apply: absolute bg-background-default rounded-lg z-2 transition transition-duration-300;
}
</style>
