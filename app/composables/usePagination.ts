export interface PaginationOptions {
  page: number | MaybeRefOrGetter<number>;
  pageSize: number | MaybeRefOrGetter<number>;
  total: number | MaybeRefOrGetter<number>;
}

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(val, max));
}

function isNumber(val: unknown): val is number {
  const parsed = Number.parseInt(String(val));
  return !Number.isNaN(parsed);
}

export default function usePagination(options: PaginationOptions) {
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
      _pageSize.value = Math.min(num, total.value);
    },
  });
  const pageSizes = computed(() => {
    const sizes = [5, 10, 20, 50];
    const idx = sizes.findIndex((size) => pageSize.value >= size);

    console.log(pageSize.value, idx);

    if (idx !== -1) {
      sizes[idx] = pageSize.value;
    }

    return sizes;
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
    pageSizes,
    total,
    skip,
    next,
    prev,
    first,
    last,
  };
}
