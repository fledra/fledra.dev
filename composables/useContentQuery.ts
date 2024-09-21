import type { QueryBuilderParams } from '@nuxt/content';

export default async function () {
  const route = useRoute();

  const { data: count } = await useAsyncData(
    `${String(route.name)}-content-count`,
    () => queryContent(route.path).count(),
    { default: () => 0 },
  );

  const pagination = usePagination({
    page: Number.parseInt(String(route.query.page)),
    pageSize: 10,
    total: count,
  });

  const query: QueryBuilderParams = ref({
    path: route.path,
    limit: 10,
    skip: pagination.skip,
  });

  return {
    pagination,
    query,
  };
}
