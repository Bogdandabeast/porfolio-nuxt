<script setup lang="ts">
export type Link = {
  name: string;
  route: string;
};

export type HeaderInfo = {
  name: string;
  links: Link[];
  aria_label: string;
};

defineProps<{ headerInfo: HeaderInfo }>();
</script>

<template>
  <header class="flex items-center justify-between px-6 py-4 whitespace-nowrap">
    <div class="flex items-center gap-4 text-text-dark">
      <span class="font-display text-xl leading-tight font-bold tracking-tight">
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
  </header>
</template>

<style scoped></style>
