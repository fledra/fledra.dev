import type { QueryBuilderParams } from '@nuxt/content';

export default async function () {
  const route = useRoute();
  const router = useRouter();

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

  watch(
    pagination.page,
    () => {
      const query = Object.assign({ ...route.query }, { page: pagination.page.value });
      router.replace({ path: route.path, query });
    },
    { immediate: true },
  );

  return {
    pagination,
    query,
  };
}
