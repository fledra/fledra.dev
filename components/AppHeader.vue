<template>
  <header relative h-dvh w="2/5" bg="cover center">
    <div flex="~ col" justify-center items-center w-full h-full bg="background-50/90" backdrop-blur-lg>
      <div relative flex="~ col" w-80 mb-10>
        <p mb-2 animate-in animate-duration-400 slide-in-l-300>{{ $t('header.hello') }}</p>
        <div
          absolute
          top="[-0.6rem]"
          right="[-1.2rem]"
          color-text-300
          animate-in
          animate-duration-400
          animate-delay-150
          slide-in-r-300
        >
          <span block rotate="-25" pl-5 text-3 w-23>{{ $t('header.hoverMe') }}</span>
          <UnoIcon ml-10 text-10 rotate-30 class="i-ph:arrow-bend-right-down-thin" />
        </div>
        <p
          text-24
          font-bold
          text="hover:transparent"
          bg="hover:(clip-text gradient-(to-r from-primary-700 via-accent-900 to-secondary-700))"
          animate-in
          animate-duration-400
          animate-delay-250
          slide-in-l-300
          @mouseover="hovering = true"
          @mouseleave="hovering = false"
        >
          {{ name }}
        </p>
        <p text-5 mt-4 mb-3 animate-in animate-duration-400 animate-delay-350 slide-in-l-300>
          {{ $t('header.whoami') }}
        </p>
        <p text-3 color-text-200 select-none animate-in animate-duration-400 animate-delay-450 slide-in-l-300>
          {{ $t('header.hidden') }}
        </p>
      </div>
      <div flex justify-center items-center gap-2 animate-in animate-duration-400 animate-delay-550 slide-in-r-300>
        <ColorModeSwitch w-16 />
        <LanguageSwitch w-16 />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const hovering = ref(false);
const name = computed(() => (hovering.value ? 'Baran' : 'Fledra'));
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

  --at-apply: bg-primary-300;
}
</style>
