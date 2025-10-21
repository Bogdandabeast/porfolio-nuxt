<script setup lang="ts">
import type { skillSectionsSchema } from '~~/shared/utils/zod/about';
import type { z } from 'zod';

type SkillSections = z.infer<typeof skillSectionsSchema>;

defineProps<{
  skillsections: SkillSections;
  title: string;
}>();
</script>

<template>
  <div>
    <h2 class="text-text-dark text-2xl sm:text-3xl font-bold leading-tight tracking-tight px-4 pb-8 pt-5 font-heading">
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
