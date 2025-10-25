<template>
  <UDropdownMenu :items="items" arrow>
    <UButton class="justify-center select-none" variant="ghost">
      {{ currentLocale.toUpperCase() }}
    </UButton>
  </UDropdownMenu>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';

const { locale: currentLocale, locales, setLocale } = useI18n();
const items = computed<DropdownMenuItem[]>(() => {
  return locales.value.map<DropdownMenuItem>((locale) => ({
    label: locale.name,
    active: currentLocale.value === locale.code,
    onSelect: () => setLocale(locale.code),
  }));
});
</script>
