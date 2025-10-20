<script setup lang="ts">
defineProps<{ skillsections: SkillSection[] }>();

const title = 'Habilidades';

type SkillSection = {
  field: string;
  skills: string[];
};
</script>

<template>
  <div>
    <h2 class="text-text-dark text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5 font-heading">
      {{ title }}
    </h2>
    <div
      v-for="(skillsection, index) in skillsections"
      :key="skillsection.field + index"
      class="px-4"
    >
      <about-skill :skillsection="skillsection" />
    </div>
  </div>
</template>
