export default defineNuxtRouteMiddleware(async (to) => {
  const { page: queryPage } = to.query;
  const { data: count } = await useAsyncData(`${String(to.name)}-content-count`, () => queryContent(to.path).count(), {
    default: () => 0,
  });

  const initialPage = isNumber(queryPage) ? queryPage : Number.parseInt(String(queryPage));
  const { page } = usePagination({
    page: initialPage,
    pageSize: 10,
    total: count,
  });

  const query = Object.assign(to.query, {
    page: page.value.toString(),
  });

  if (queryPage !== query.page) {
    return navigateTo({ path: to.path, query });
  }
});
