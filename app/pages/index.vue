<script setup lang="ts">
import page from '~/assets/data/pages/index.json'

useHead({
  title: page.title,
  meta: [
    {
      name: 'description',
      content: page.description,
    },
  ],
})
</script>

<template>
  <div>
    <main class="flex-grow">
      <div class="px-4 py-10 text-center md:py-20">
        <div class="flex flex-col items-center gap-6">
          <h1
            class="font-display text-4xl leading-tight font-bold tracking-tighter text-text-dark md:text-6xl"
          >
            {{ page.title }}
          </h1>
          <p class="mx-auto max-w-2xl font-body text-base text-text-dark/80 md:text-lg">
            {{ page.description }}
          </p>
          <button
            class="flex h-12 transform cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-base leading-normal font-bold tracking-[0.015em] text-white transition-colors hover:scale-105 hover:bg-primary/90"
            :aria-label="page.button.text"
          >
            <span class="truncate">{{ page.button.text }}</span>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
