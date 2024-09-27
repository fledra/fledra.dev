export default async function (contentPath: MaybeRefOrGetter<string>, limit: MaybeRefOrGetter<number> = 3) {
  const { locale } = useI18n();
  const path = computed(() => `${locale.value}/${toValue(contentPath).replace('/', '')}`);
  const id = computed(() => `content-list-${path.value.replace(/\//g, '_')}`);

  const { data, refresh } = await useAsyncData(
    id.value,
    () => queryContent(path.value).limit(toValue(limit)).sort({ date: -1, $numeric: true }).find(),
    {
      default: () => [],
      watch: [locale],
    },
  );

  return {
    data,
    refresh,
    path,
  };
}
