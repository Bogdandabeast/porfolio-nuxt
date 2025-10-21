<script setup lang="ts">
import { indexSchema } from '~~/shared/utils/zod/index';

import page from '~/assets/data/pages/index.json';

const pageData = indexSchema.parse(page);

useHead({
  title: pageData.title,
  meta: [
    {
      name: 'description',
      content: pageData.description,
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
        {{ pageData.title }}
      </h1>
      <p class="mx-auto max-w-2xl py-10 font-body text-base text-text-dark/80 md:text-lg">
        {{ pageData.description }}
      </p>
      <button
        class="h-12 transform cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-base leading-normal font-bold tracking-normal text-white transition-colors hover:scale-105 hover:bg-primary/90"
        :aria-label="pageData.button.text"
      >
        <NuxtLink to="/project">
          {{ pageData.button.text }}
        </NuxtLink>
      </button>
    </div>
  </div>
</template>
