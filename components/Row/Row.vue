<template>
  <RowContainer>
    <div flex="~ col" gap-1>
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
        <p font-medium>{{ props.title }}</p>
      </component>

      <p v-if="props.description" text-3 color-text-300 line-clamp-2>{{ props.description }}</p>
    </div>

    <NuxtLink
      v-if="props.to"
      :to="props.to"
      flex
      items-center
      decoration-none
      ml-4
      color="text-900 hover:primary-300"
      transition="~ duration-300"
    >
      <UnoIcon class="i-ci:more-horizontal" text-8 />
    </NuxtLink>
  </RowContainer>
</template>

<script setup lang="ts">
interface RowProps {
  title: string;
  description?: string;
  icon?: string;
  to?: string;
}

const NuxtLink = resolveComponent('NuxtLink');
const props = defineProps<RowProps>();
const iconClasses = computed(() => [props.icon, props.icon?.match(/text-\d/) ? '' : 'text-7']);
</script>
