<script setup lang="ts">
import type { skillSectionSchema } from '~~/shared/utils/zod/about';
import type { z } from 'zod';

type SkillSection = z.infer<typeof skillSectionSchema>;

defineProps<{ skillsection: SkillSection }>();
</script>

<template>
  <div class="mb-6">
    <h3 class="text-text-dark text-xl font-semibold mb-4 font-heading">
      {{ skillsection.field }}
    </h3>
    <div class="flex flex-wrap gap-3">
      <span
        v-for="(skill, index) in skillsection.skills"
        :key="skill + index"
        class="bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full"
      >{{ skill }}</span>
    </div>
  </div>
</template>
