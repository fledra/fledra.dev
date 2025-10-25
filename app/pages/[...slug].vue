<template>
  <div v-if="data" class="w-full p-6 md:p-16 md:pr-12">
    <Breadcrumb />
    <ContentRenderer :value="data" class="prose dark:prose-invert prose-a:no-underline prose-img:w-auto max-w-none" />
  </div>
  <div v-else class="flex h-screen flex-col items-center justify-center">
    <h1 class="mb-4 text-4xl font-semibold">{{ $t('notFound.heading') }}</h1>
    <p class="mb-16 text-lg">{{ $t('notFound.text') }}</p>
    <UButton :to="$localePath('/')" size="xl">{{ $t('notFound.button') }}</UButton>
  </div>
</template>

<script lang="ts" setup>
import type { Collections } from '@nuxt/content';

const route = useRoute();
const { locale } = useI18n();
const { data } = await useAsyncData(route.path, async () => {
  const { slug } = route.params;
  const [collection, name] = slug as [keyof Collections, string];
  const stem = `${collection}/${name}.${locale.value}`;
  return queryCollection(collection).where('stem', '=', stem).first();
});

useSeoMeta(data.value?.seo ?? {});
</script>
