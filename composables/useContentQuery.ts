import type { QueryBuilderParams } from '@nuxt/content';

interface ContentQueryOptions {
  path?: MaybeRefOrGetter<string>;
  useRoute?: MaybeRefOrGetter<boolean>;
  pagination?: Omit<Partial<PaginationOptions>, 'total'>;
}

export default async function (options?: ContentQueryOptions) {
  const route = useRoute();
  const router = useRouter();

  const { data: count } = await useAsyncData(
    `${String(route.name)}-content-count`,
    () => queryContent(route.path).count(),
    {
      default: () => 0,
    },
  );

  const pagination = usePagination({
    page: options?.pagination?.page ?? (options?.useRoute ? Number.parseInt(String(route.query.page)) : 1),
    pageSize: options?.pagination?.pageSize ?? 10,
    total: count,
  });

  const query: QueryBuilderParams = ref({
    path: options?.path ?? route.path,
    limit: pagination.pageSize,
    skip: pagination.skip,
    sort: { date: -1, $numeric: true },
  });

  if (options?.useRoute) {
    watch(
      pagination.page,
      () => {
        const query = Object.assign({ ...route.query }, { page: pagination.page.value });
        router.replace({ path: route.path, query });
      },
      { immediate: true },
    );
  }

  return {
    count,
    query,
    pagination,
  };
}
