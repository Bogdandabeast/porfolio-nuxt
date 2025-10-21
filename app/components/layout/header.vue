<script setup lang="ts">
import type { headerSchema } from '#shared/utils/layout';
import type { z } from 'zod';

type HeaderInfo = z.infer<typeof headerSchema>;

defineProps<{ headerInfo: HeaderInfo }>();
</script>

<template>
  <header class="flex items-center justify-between px-6 py-4 whitespace-nowrap">
    <div class="flex items-center gap-4 text-text-dark">
      <NuxtLink to="/" class="font-display text-xl leading-tight font-bold tracking-tight">
        {{ headerInfo.name }}
      </NuxtLink>
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
