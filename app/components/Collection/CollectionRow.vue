<template>
  <div class="border-b border-(--ui-primary)/20 p-8">
    <component
      :is="!props.disabled && props.to ? ULink : 'div'"
      :to="props.to"
      :class="{ 'hover:text-(--ui-primary)': !props.disabled && props.to }"
      class="flex w-fit gap-6 text-(--ui-text)"
    >
      <UIcon v-if="props.icon" :name="props.icon" :customize="customizeIcon" class="h-7 w-7 transition-colors" />

      <div class="flex flex-col gap-1">
        <span class="text-xl font-semibold transition-colors">
          {{ props.title }}
        </span>
        <span v-if="props.description" class="text-xs text-(--ui-text-toned) dark:text-(--ui-text-muted)/50">
          {{ props.description }}
        </span>
      </div>
    </component>
  </div>
</template>

<script setup lang="ts">
export interface CollectionRowProps {
  title: string;
  description?: string;
  icon?: string;
  to?: string;
  disabled?: boolean;
}

const props = defineProps<CollectionRowProps>();
const ULink = resolveComponent('ULink');

function customizeIcon(content: string) {
  return content.replace(/fill="[^"|none]*"/g, `fill="currentColor"`);
}
</script>
