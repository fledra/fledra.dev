<template>
  <div relative flex="~ grow-1" justify-between items-center px-7 border="b-2 solid primary-100" min-h="[72px]">
    <slot>
      <div flex items-center gap-4>
        <UnoIcon v-if="props.icon && !props.to" :class="iconClasses" />

        <div flex="~ col" justify-center gap-3>
          <div v-if="props.to">
            <NuxtLink
              :to="props.to"
              decoration-none
              font-medium
              transition="~ duration-300"
              color="text-900 hover:primary-300"
              :class="{ 'text-5 font-bold': props.icon }"
            >
              <div flex items-center gap-3>
                <UnoIcon v-if="props.icon" :class="iconClasses" />
                {{ props.title }}
              </div>
            </NuxtLink>
          </div>
          <p v-else color-text-900>{{ props.title }}</p>

          <p v-if="props.description" text-3 color-text-400>{{ props.description }}</p>
        </div>
      </div>

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
    </slot>
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
