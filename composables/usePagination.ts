export interface PaginationOptions {
  page: number | MaybeRefOrGetter<number>;
  pageSize: number | MaybeRefOrGetter<number>;
  total: number | MaybeRefOrGetter<number>;
}

export default function (options: PaginationOptions) {
  const _page = ref(toValue(options.page) || 1);
  const _pageSize = ref(toValue(options.pageSize) || 10);
  const total = ref(toValue(options.total));

  const maxPage = computed(() => Math.ceil(total.value / _pageSize.value));

  const page = computed({
    get: () => _page.value,
    set: (val) => {
      const num = isNumber(val) ? val : 1;
      _page.value = clamp(num, 1, maxPage.value);
    },
  });

  const pageSize = computed({
    get: () => _pageSize.value,
    set: (val) => {
      const num = isNumber(val) ? val : 1;
      _pageSize.value = num;
    },
  });

  const skip = computed(() => (page.value - 1) * pageSize.value);

  const next = () => ++page.value;
  const prev = () => --page.value;
  const first = () => (page.value = 1);
  const last = () => (page.value = maxPage.value);

  watch(
    [total, pageSize],
    () => {
      if (page.value > maxPage.value) {
        page.value = 1;
      }
    },
    { immediate: true }, // run on first render to reset non-existing page values
  );

  return {
    page,
    pageSize,
    total,
    skip,
    next,
    prev,
    first,
    last,
  };
}
