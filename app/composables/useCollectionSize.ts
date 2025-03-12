import type { Collections } from '@nuxt/content';

export default async function useCollectionSize(collection: keyof Collections) {
  const { locale } = useI18n();
  const { data } = await useAsyncData(
    `collection-size-${collection}-${locale.value}`,
    () => queryCollection(collection).where('stem', 'LIKE', `%.${locale.value}`).count(),
    { default: () => 0 },
  );

  return {
    count: data,
  };
}
