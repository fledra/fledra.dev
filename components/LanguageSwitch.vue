<template>
  <Dropdown :items="locales" key-field="code" @change="(locale) => setLocale(locale.code)">
    <template #value>{{ language }}</template>
    <template #item="{ item }"> {{ item.name }} </template>
  </Dropdown>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();
const language = computed(() => locales.value.find((l) => l.code === locale.value)?.selector.toUpperCase());
</script>
