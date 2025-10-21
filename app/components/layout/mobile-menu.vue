<script setup lang="ts">
import { linkSchema } from '~~/shared/utils/zod/layout';
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { z } from 'zod';

import { links as rawLinks } from '~/assets/data/layout/header.json';

const links = z.array(linkSchema).parse(rawLinks);

const toggle = ref(false);
const route = useRoute();

function toggleMenu() {
  toggle.value = !toggle.value;
}

function closeMenuIfOpened() {
  if (toggle.value) {
    toggle.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', closeMenuIfOpened);
});

onUnmounted(() => {
  document.removeEventListener('click', closeMenuIfOpened);
});

watch(() => route.fullPath, () => {
  toggle.value = false;
});
</script>

<template>
  <div
    v-auto-animate="{ easing: 'linear' }"
    class="flex gap-2 fixed z-10 left-5 bottom-0 my-10 ml-2 w-full shadow-md md:hidden"
  >
    <Icon
      v-if="toggle"
      name="streamline:interface-setting-menu-2-button-parallel-horizontal-lines-menu-navigation-staggered-three-hamburger"
      size="30"
      @click.stop="toggleMenu"
    />
    <Icon
      v-else
      name="ci:hamburger-lg"
      size="30"
      @click.stop="toggleMenu"
    />
    <nav v-if="toggle" class="flex items-center px-4 gap-5">
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
