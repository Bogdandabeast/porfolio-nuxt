<script setup lang="ts">
type Category = {
  name: string;
}

defineProps<{ categories: Category[] }>();

</script>

<template>
  <div class="flex justify-center gap-2 md:gap-3 p-3 mb-8 overflow-x-auto">
    <button
      v-for="(category, index) in categories"
      :key="category.name + index"
      class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 bg-primary/30 text-text-primary text-sm font-medium leading-normal transition-colors"
    >
      {{ category.name }}
    </button>
  </div>
</template>

<style scoped>

</style>
