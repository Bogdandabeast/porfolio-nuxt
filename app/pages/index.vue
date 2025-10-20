<script setup lang="ts">
import page from '~/assets/data/pages/index.json';

useHead({
  title: page.title,
  meta: [
    {
      name: 'description',
      content: page.description,
    },
  ],
});
</script>

<template>
  <div>
      <div class="px-4 py-10 text-center md:py-20">
          <h1
            class="font-display text-4xl leading-tight font-bold tracking-tighter text-text-dark md:text-6xl"
          >
            {{ page.title }}
          </h1>
          <p class="mx-auto max-w-2xl py-10 font-body text-base text-text-dark/80 md:text-lg">
            {{ page.description }}
          </p>
          <button
            class="h-12 transform cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-base leading-normal font-bold tracking-[0.015em] text-white transition-colors hover:scale-105 hover:bg-primary/90"
            :aria-label="page.button.text"
          ><NuxtLink to="/project">
           {{ page.button.text }}</NuxtLink>
          </button>
        </div>
      </div>
</template>
