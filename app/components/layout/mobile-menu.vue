<script setup lang="ts">
import { links } from '~/assets/data/layout/header.json';

const toggle = ref(false);

const route = useRoute();

watch(() => route.fullPath, () => {
  toggle.value = !toggle.value;
});
</script>

<template>
  <div v-auto-animate class="flex gap-2 fixed z-10 left-5 bottom-0 my-10 ml-2 w-full shadow-md md:hidden">
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
    <nav v-if="!toggle" class="flex items-center  px-4 gap-5">
      <NuxtLink
        v-for="(link, index) in links"
        :key="link.name + link.route + index"
        :to="link.route"
        class="font-lato text-sm leading-normal rounded-lg bg-primary font-medium text-text-dark px-3 py-1"
      >
        {{ link.name }}
      </NuxtLink>
    </nav>
  </div>
</template>
