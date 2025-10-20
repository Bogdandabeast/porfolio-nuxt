<script setup lang="ts">
import cards from '@/assets/data/pages/project-cards.json';
import page from '~/assets/data/pages/project.json';
</script>

<template>
  <div>
    <div class="flex flex-col items-center text-center">
      <h2 class="text-4xl md:text-5xl font-black leading-tight tracking-tight text-text-primary">
        {{ page.title }}
      </h2>
      <p class="mt-4 max-w-2xl text-lg text-text-secondary">
        {{ page.description }}
      </p>
    </div>
    <project-tabs :tab-cards="cards" />
  </div>
</template>

<style scoped></style>
