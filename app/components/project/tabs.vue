<script setup lang="ts">
import type { projectCardsSchema } from '~~/shared/utils/zod/project';
import type { z } from 'zod';

type TabCards = z.infer<typeof projectCardsSchema>;

const props = defineProps<{ tabCards: TabCards }>();

const selectedCategory = ref('All');

const categories = computed(() => {
  const tags = new Set<string>();
  props.tabCards.forEach((card) => {
    card.tags.forEach((tag) => {
      tags.add(tag);
    });
  });
  return ['All', ...Array.from(tags)];
});

const filteredCards = computed(() => {
  if (selectedCategory.value === 'All') {
    return props.tabCards;
  }
  return props.tabCards.filter(card => card.tags.includes(selectedCategory.value));
});

function selectCategory(category: string) {
  selectedCategory.value = category;
}
</script>

<template>
  <div class="flex justify-center gap-2 md:gap-3 p-3 mb-8 overflow-x-auto">
    <button
      v-for="(category, index) in categories"
      :key="category + index"
      class="cursor-pointer flex h-8 md:h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-3 md:px-4 text-xs md:text-sm font-medium leading-normal transition-colors"
      :class="{ 'bg-primary text-white': selectedCategory === category, 'bg-primary/30 text-text-primary': selectedCategory !== category }"
      @click="selectCategory(category)"
    >
      {{ category }}
    </button>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <project-card
      v-for="(card, index) in filteredCards"
      :key="card.name + index"
      :card="card"
    />
  </div>
</template>
