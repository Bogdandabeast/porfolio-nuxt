<script setup lang="ts">
export interface Link {
  name: string
  route: string
}

export interface HeaderInfo {
  name: string
  links: Link[]
}

defineProps<{ headerInfo: HeaderInfo }>()
</script>

<template>
  <header class="flex items-center justify-between px-6 py-4 whitespace-nowrap">
    <div class="flex items-center gap-4 text-text-dark">
      <h2 class="font-display text-xl leading-tight font-bold tracking-[-0.015em]">
        {{ headerInfo.name }}
      </h2>
    </div>

    <div class="hidden items-center gap-9 md:flex">
      <NuxtLink
        v-for="(link, index) in headerInfo.links"
        :key="link.name + link.route + index"
        :to="link.route"
        class="font-lato text-sm leading-normal font-medium text-text-dark transition-colors hover:text-primary"
      >
        {{ link.name }}
      </NuxtLink>
    </div>

    <div class="md:hidden">
      <button class="text-text-dark">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>
  </header>
</template>

<style scoped></style>
