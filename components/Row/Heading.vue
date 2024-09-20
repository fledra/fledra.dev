<template>
  <div relative flex="~ grow-1" justify-between items-center px-7 border="b-2 solid primary-100" min-h="[72px]">
    <component
      :is="props.to ? NuxtLink : 'div'"
      :to="props.to"
      flex
      items-center
      gap-5
      decoration-none
      color="text-900 hover:primary-300"
      transition="~ duration-300"
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
  </div>
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
