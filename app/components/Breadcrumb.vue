<template>
  <div class="mb-8 flex items-center gap-4 font-mono text-[1rem]">
    <span class="text-(--ui-text)/50">$ {{ command }}</span>
    <UBreadcrumb class="" :items="items" :ui="{ list: 'gap-2', linkLabel: 'font-normal text-[1rem]' }">
      <template #separator>
        <span class="text-(--ui-text)">/</span>
      </template>
    </UBreadcrumb>
  </div>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui';

const { t } = useI18n();
const route = useRoute();
const localePath = useLocalePath();

const commands = ['more', 'less', 'cat'];
const command = useState('breadcrumb-command', () => commands.at(Math.floor(Math.random() * commands.length)));

const items = computed(() => {
  const { slug } = route.params;
  if (!slug || !Array.isArray(slug) || slug.length < 2) return [];

  const [collection, file] = slug;
  if (!collection || !file) return [];

  return [
    {
      label: '~',
      to: localePath('/'),
    },
    {
      label: t(`${collection}.title`).toLowerCase(),
      to: localePath(collection),
    },
    {
      label: file,
      to: localePath(slug.join('/')).toLowerCase(),
    },
  ] as BreadcrumbItem[];
});
</script>
