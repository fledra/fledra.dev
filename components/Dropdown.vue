<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger
      class="data-[state=open]:(bg-primary-200 dark:bg-primary-200/60)"
      bg="transparent hover:(primary-200/40 dark:primary-200/40)"
      color="primary-500 dark:primary-300"
      cursor="pointer"
      transition="all duration-300"
      text="[.9rem]"
      p-2
      w-full
      font-semibold
      border-none
      rounded-md
    >
      <slot name="value">
        {{ modelValue }}
      </slot>
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        class="data-[state=open]:(animated animated-fade-in animated-faster) data-[state=closed]:(animated animated-fade-out animated-faster)"
        side="bottom"
        :side-offset="8"
        rounded-md
        avoid-collisions
      >
        <DropdownMenuItem
          v-for="item in props.items"
          :key="String(item[keyField])"
          text="[.8rem]"
          color="text-default"
          bg="primary-200 hover:primary-300 "
          cursor="default hover:pointer"
          transition="all duration-300"
          py-3
          px-4
          @click="emit('change', item)"
        >
          <slot name="item" :item="item" />
        </DropdownMenuItem>
        <DropdownMenuArrow fill-primary-200 />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<script setup lang="ts" generic="T extends unknown | Record<string, unknown>">
interface DropdownProps {
  items: T[];
  keyField: keyof T;
}

const props = defineProps<DropdownProps>();
const emit = defineEmits<{ (e: 'change', item: T): void }>();
const modelValue = defineModel<unknown>();
</script>
