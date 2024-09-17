<template>
  <div flex="~ grow-1" justify-between items-center pl-6 border="b-2 solid primary-100" min-h="[72px]">
    <div flex items-center gap-4>
      <UnoIcon v-if="props.icon" :class="iconClasses" />

      <div flex="~ col" justify-center gap-3>
        <p color-text-800 font-extrabold :class="{ 'text-5': props.icon }">{{ props.title }}</p>
        <p v-if="props.description" text-3 color-text-400>{{ props.description }}</p>
      </div>
    </div>

    <NuxtLink
      v-if="props.to"
      :to="props.to"
      flex
      items-center
      decoration-none
      h-full
      px-6
      color="text-900 hover:primary-400"
      transition-all
    >
      <UnoIcon class="i-bi:chevron-right" text-6 />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
export interface HomeRowProps {
  title: string;
  description?: string;
  icon?: string;
  to?: string;
}

const props = defineProps<HomeRowProps>();
const iconClasses = computed(() => [props.icon, props.icon?.match(/text-\d/) ? '' : 'text-7']);
</script>
