<script setup lang="ts">
type SkillSection = {
  field: string;
  skills: string[];
};

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
