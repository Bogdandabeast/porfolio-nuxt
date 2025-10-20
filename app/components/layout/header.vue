<script setup lang="ts">
import { ref } from 'vue';

export type Link = {
  name: string;
  route: string;
};

export type HeaderInfo = {
  name: string;
  links: Link[];
};

defineProps<{ headerInfo: HeaderInfo }>();

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <header class="flex items-center justify-between px-6 py-4 whitespace-nowrap">
    <div class="flex items-center gap-4 text-text-dark">
      <span class="font-display text-xl leading-tight font-bold tracking-[-0.015em]">
        {{ headerInfo.name }}
      </span>
    </div>

    <nav class="hidden items-center gap-9 md:flex">
      <NuxtLink
        v-for="(link, index) in headerInfo.links"
        :key="link.name + link.route + index"
        :to="link.route"
        class="font-lato text-sm leading-normal font-medium text-text-dark transition-colors hover:text-primary"
      >
        {{ link.name }}
      </NuxtLink>
    </nav>

    <div class="md:hidden">
      <button
        class="text-text-dark"
        aria-label="Open menu"
        :aria-expanded="isMenuOpen.toString()"
        @click="toggleMenu"
      >
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>

    <div v-if="isMenuOpen" class="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
      <nav class="flex flex-col items-center gap-4 p-4">
        <NuxtLink
          v-for="(link, index) in headerInfo.links"
          :key="link.name + link.route + index"
          :to="link.route"
          class="font-lato text-sm leading-normal font-medium text-text-dark transition-colors hover:text-primary"
          @click="toggleMenu"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
