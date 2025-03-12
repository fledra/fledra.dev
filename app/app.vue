<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <div class="md:flex md:h-dvh">
      <Header class="w-screen md:w-2/5" />
      <main class="overflow-x-hidden overflow-y-auto md:w-3/5">
        <NuxtPage />
      </main>
    </div>
  </UApp>
</template>
