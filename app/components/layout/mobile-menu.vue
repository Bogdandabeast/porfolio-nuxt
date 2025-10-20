<script setup lang="ts">
import { links } from '~/assets/data/layout/header.json';

const toggle = ref(false);
</script>

<template>
  <div v-auto-animate class="flex gap-10">
    <Icon
      v-if="toggle"
      name="ci:hamburger-lg"
      size="40"
      @click="toggle = !toggle"
    />
    <Icon
      v-if="!toggle"
      name="streamline:interface-setting-menu-2-button-parallel-horizontal-lines-menu-navigation-staggered-three-hamburger"
      size="30"
      @click="toggle = !toggle"
    />
    <nav v-if="!toggle" class="items-center gap-5">
      <NuxtLink
        v-for="(link, index) in links"
        :key="link.name + link.route + index"
        :to="link.route"
        class="font-lato text-sm leading-normal font-medium text-text-dark transition-colors hover:text-primary gap-3"
      >
        {{ link.name }}
      </NuxtLink>
    </nav>
  </div>
</template>
