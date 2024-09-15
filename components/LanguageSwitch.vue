<template>
  <div>
    <Dropdown :items="locales" key-field="code" @change="(locale) => setLocale(locale.code)">
      <template #value>{{ locale.toUpperCase() }}</template>
      <template #item="{ item }"> {{ item.name }} </template>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();
</script>
