import type { projectCardsSchema } from '~~/shared/utils/zod/project';
import type { z } from 'zod';

type TabCards = z.infer<typeof projectCardsSchema>;

export function useProjectTabs(tabCards: TabCards) {
  const ALL_PROJECTS_CATEGORY = 'All';
  const selectedCategory = ref(ALL_PROJECTS_CATEGORY);

  const categories = computed(() => {
    const tags = new Set<string>();
    tabCards.forEach((card) => {
      card.tags.forEach((tag) => {
        tags.add(tag);
      });
    });
    return [ALL_PROJECTS_CATEGORY, ...Array.from(tags)];
  });

  const filteredCards = computed(() => {
    if (selectedCategory.value === ALL_PROJECTS_CATEGORY) {
      return tabCards;
    }
    return tabCards.filter(card => card.tags.includes(selectedCategory.value));
  });

  function selectCategory(category: string) {
    selectedCategory.value = category;
  }

  return {
    selectedCategory,
    categories,
    filteredCards,
    selectCategory,
  };
}
