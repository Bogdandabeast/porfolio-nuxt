<script lang="ts" setup>
import projectCardData from '~/assets/data/components/project-card.json';

type Card = {
  name: string;
  description: string;
  img: string;
  tags: string[];
};

defineProps<{ card: Card }>();
</script>

<template>
  <div class="group flex flex-col bg-card border border-border rounded-xl shadow-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
    <div class="relative">
      <img
        class="w-full bg-center bg-no-repeat aspect-video bg-cover"
        data-alt="Screenshot of an e-commerce website for sports clothing"
        src="https://owiusmadrid.com/wp-content/uploads/2019/10/Desarrollo-Web.png"
      >
      <div class="absolute inset-0 bg-black/60 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
        <div class="flex gap-4">
          <NuxtLink class="flex items-center gap-2 bg-white/90 text-gray-800 px-6 py-3 md:px-4 md:py-2 rounded-lg text-base md:text-sm font-bold hover:bg-white transition-all transform hover:scale-105" to="#">
            {{ projectCardData.view_project_button }}
          </NuxtLink>
          <NuxtLink class="flex items-center gap-2 bg-gray-800/90 text-white px-6 py-3 md:px-4 md:py-2 rounded-lg text-base md:text-sm font-bold hover:bg-gray-900 transition-all transform hover:scale-105" to="#">
            {{ projectCardData.view_code_button }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="p-6 flex-grow flex flex-col">
      <h3 class="sm:text-sm md:text-xl font-bold leading-normal text-text-primary">
        {{ card.name }}
      </h3>
      <p class="text-text-secondary text-base font-normal leading-normal mt-2 flex-grow">
        {{ card.description }}
      </p>
      <div class="flex flex-wrap gap-2 mt-4">
        <span
          v-for="(tagname, index) in card.tags"
          :key="tagname + index"
          class="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full"
        >{{ tagname }}</span>
      </div>
    </div>
  </div>
</template>

<style>

</style>
