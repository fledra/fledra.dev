<template>
  <CollectionRow
    :title="props.title"
    :icon="props.icon"
    :to="$localePath(props.collection)"
    :disabled="route.path === $localePath(props.collection)"
    class="py-10"
  />
  <CollectionRow
    v-for="item in data"
    :key="item.id"
    :title="item.title"
    :description="item.description"
    :to="$localePath(item.path.slice(0, -3))"
  />
  <CollectionRow v-if="data && data.length === 0" :title="$t(`${props.collection}.notYet`)" class="py-10" />
</template>

<script setup lang="ts">
import type { Collections } from '@nuxt/content';

import type { CollectionRowProps } from './CollectionRow.vue';

interface CollectionListProps extends CollectionRowProps {
  collection: keyof Collections;
  skip?: MaybeRef<number>;
  limit?: MaybeRef<number>;
}

const props = defineProps<CollectionListProps>();

const route = useRoute();
const { locale } = useI18n();
const { data } = await useAsyncData(`collection-list-${props.collection}-${locale.value}`, async () => {
  const list = await queryCollection(props.collection)
    .where('stem', 'LIKE', `%.${locale.value}`)
    .order('date', 'DESC')
    .skip(toValue(props.skip ?? 0))
    .limit(toValue(props.limit ?? 10))
    .all();

  return list;
});
</script>
