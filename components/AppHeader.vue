<template>
  <header relative bg="cover center">
    <div flex="~ col" justify-center items-center w-full h-full bg="background-50/90" backdrop-blur-lg>
      <div relative flex="~ col" w-80 mb-10>
        <p mb-3 animated="~ back-in-down">{{ $t('header.hello') }}</p>

        <div absolute top="[-0.75rem]" right="[-1rem]" color-text-300 animated="~ flip-in-x delay-1000">
          <span block rotate="-25" pl-5 text-3>{{ $t('header.hoverMe') }}</span>
          <UnoIcon ml-10 text-10 rotate-30 class="i-ph:arrow-bend-right-down-thin" />
        </div>

        <div text-24 font-bold animated="~ back-in-left" @mouseover="hovering = true" @mouseleave="hovering = false">
          <NuxtLink :to="localePath('/')" decoration-none>
            <Transition
              mode="out-in"
              enter-active-class="animated animated-flip-in-x animated-duration-350"
              leave-active-class="animated animated-flip-out-y animated-duration-350"
            >
              <p
                v-if="hovering"
                bg="clip-text gradient-(to-r from-primary-700 via-accent-900 to-secondary-700)"
                color-transparent
                lh-none
              >
                Baran
              </p>
              <p v-else color-text-900 lh-none>Fledra</p>
            </Transition>
          </NuxtLink>
        </div>

        <p text-5 mt-3 mb-1 animated="~ back-in-left">
          {{ $t('header.whoami') }}
        </p>

        <p text-3 color-text-200 animated="~ back-in-right">
          {{ $t('header.hidden') }}
        </p>
      </div>

      <div flex justify-center items-center gap-2 h-10>
        <ColorModeSwitch w-16 h-full animated="~ back-in-left" />
        <LanguageSwitch w-16 h-full animated="~ back-in-right" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const hovering = ref(false);
</script>

<style scoped>
header {
  /* just in case i want the border to have a bevel */
  --edge-bevel: 0rem;
  --edge-width: 2.307px;

  isolation: isolate;
  background-image: url(/images/avatar.gif);
  clip-path: polygon(0 0, 100% 0%, calc(100% - var(--edge-bevel)) 100%, 0% 100%);
}

header::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  clip-path: polygon(
    calc(100% - var(--edge-width)) 0,
    100% 0%,
    calc(100% - var(--edge-bevel)) 100%,
    calc(100% - var(--edge-bevel) - var(--edge-width)) 100%
  );

  --at-apply: bg-primary-100;
}
</style>
