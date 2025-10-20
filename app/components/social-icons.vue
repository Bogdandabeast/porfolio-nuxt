<script setup lang="ts">
import { icons } from '~/assets/data/layout/footer.json';
</script>

<template>
  <NuxtLink
    v-for="(icon, index) in icons"
    :key="icon.name + index"
    :to="icon.url"
    :aria-label="icon.label"
    target="_blank"
    class="text-white"
  >
    <Icon
      :name="icon.name"
      :size="icon.size"
    />
  </NuxtLink>
</template>
