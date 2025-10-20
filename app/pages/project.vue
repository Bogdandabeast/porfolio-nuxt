<script setup lang="ts">
import cards from '@/assets/data/pages/project-cards.json';
</script>

<template>
  <div>
    <div class="flex flex-col items-center text-center">
      <h2 class="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-text-primary">
        Mis Proyectos
      </h2>
      <p class="mt-4 max-w-2xl text-lg text-text-secondary">
        Una selección de mis trabajos más recientes y relevantes en el desarrollo front-end.
      </p>
    </div>
    <project-tabs :tab-cards="cards" />
  </div>
</template>

<style scoped></style>
