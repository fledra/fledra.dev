<template>
  <RowContainer h-30 max-h-30>
    <component
      :is="props.to ? NuxtLink : 'div'"
      :to="props.to"
      flex
      items-center
      gap-5
      decoration-none
      color-text-900
      transition="~ duration-300"
      :class="{ ' hover:color-primary-300': props.to }"
    >
      <UnoIcon v-if="props.icon" :class="iconClasses" />
      <p text-5 font-medium>{{ props.title }}</p>
    </component>

    <NuxtLink
      v-if="props.to"
      :to="props.to"
      flex
      items-center
      decoration-none
      color="text-900 hover:primary-300"
      transition="~ duration-300"
    >
      <UnoIcon class="i-ci:more-horizontal" text-8 />
    </NuxtLink>
  </RowContainer>
</template>

<script setup lang="ts">
interface RowHeadingProps {
  title: string;
  icon?: string;
  to?: string;
}

const NuxtLink = resolveComponent('NuxtLink');
const props = defineProps<RowHeadingProps>();
const iconClasses = computed(() => [props.icon, props.icon?.match(/text-\d/) ? '' : 'text-7']);
</script>

<style scoped></style>
