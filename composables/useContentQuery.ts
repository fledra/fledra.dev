import type { QueryBuilderParams } from '@nuxt/content';

interface ContentQueryOptions {
  limit?: number | MaybeRefOrGetter<number>;
}

export default async function (options?: ContentQueryOptions) {
  const route = useRoute();
  const router = useRouter();

  const limit = ref(toValue(options?.limit || 10));

  const { data: count } = await useAsyncData(
    `${String(route.name)}-content-count`,
    () => queryContent(route.path).count(),
    {
      default: () => 0,
    },
  );

  const pagination = usePagination({
    page: Number.parseInt(String(route.query.page)),
    pageSize: limit,
    total: count,
  });

  const query: QueryBuilderParams = ref({
    path: route.path,
    limit: pagination.pageSize,
    skip: pagination.skip,
    sort: { date: -1, $numeric: true },
  });

  watch(
    pagination.page,
    () => {
      const query = Object.assign({ ...route.query }, { page: pagination.page.value });
      router.replace({ path: route.path, query });
    },
    { immediate: true },
  );

  return {
    count,
    query,
    pagination,
  };
}
