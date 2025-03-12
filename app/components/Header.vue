<template>
  <header class="overflow-hidden">
    <div class="flex h-full w-full flex-col items-center justify-center gap-8 bg-(--ui-bg)/90 backdrop-blur-lg">
      <div class="relative mx-auto flex w-80 flex-col justify-center">
        <p class="motion-safe:animate-back-in-down mb-4">
          {{ $t('header.hello') }}
        </p>

        <div class="absolute top-0 right-[-0.5rem] text-neutral-400 dark:text-neutral-800">
          <p class="w-20 rotate-[-25deg] text-right text-xs">{{ $t('header.hoverMe') }}</p>
          <UIcon name="i-custom:arrow-bend" class="ml-10 rotate-[30deg] text-4xl" />
        </div>

        <NuxtLink
          class="mb-4 text-8xl font-bold"
          :to="$localePath('/')"
          @mouseenter="hovering = true"
          @mouseleave="hovering = false"
        >
          <Transition
            mode="out-in"
            enter-active-class="motion-safe:animate-flip-in-x"
            leave-active-class="motion-safe:animate-flip-out-y"
          >
            <p
              v-if="hovering"
              class="from-primary-600 to-secondary-600 dark:to-secondary-600 dark:from-primary-300 bg-gradient-to-r to-85% bg-clip-text text-transparent"
            >
              Baran
            </p>
            <p v-else>Fledra</p>
          </Transition>
        </NuxtLink>

        <p class="motion-safe:animate-back-in-left mb-1 text-xl">
          {{ $t('header.whoami') }}
        </p>

        <p class="motion-safe:animate-back-in-right text-xs text-neutral-400 dark:text-neutral-800">
          {{ $t('header.hidden') }}
        </p>
      </div>

      <div class="flex items-center gap-4 text-xl">
        <ULink class="text-(--ui-primary)" to="https://github.com/fledra" target="_blank" external>
          <UIcon name="i-lucide:github" />
        </ULink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const hovering = ref(false);
</script>

<style scoped>
header {
  /* just in case i want the border to have a bevel */
  --edge-bevel: 0px;
  --edge-width: 2px;

  position: relative;
  isolation: isolate;
  background: url(/images/avatar.gif) center/cover no-repeat;

  clip-path: polygon(0 0, 100% 0%, calc(100% - var(--edge-bevel)) 100%, 0% 100%);
}

header::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: color-mix(in oklch, var(--ui-primary) 60%, transparent);
  clip-path: polygon(
    calc(100% - var(--edge-width)) 0,
    100% 0%,
    calc(100% - var(--edge-bevel)) 100%,
    calc(100% - var(--edge-bevel) - var(--edge-width)) 100%
  );
}
</style>
