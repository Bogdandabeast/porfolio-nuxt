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
    class="flex gap-2 fixed z-10 right-5 bottom-0 my-10 shadow-md md:hidden"
    :class="{ 'bg-background-dark/90 border rounded-2xl p-2': toggle, 'opacity-100': !toggle }"
  >
    <Icon
      v-if="toggle"
      name="material-symbols:cancel-rounded"
      size="28"
      @click.stop="toggleMenu"
    />
    <Icon
      v-else
      name="ci:hamburger-lg"
      size="30"
      @click.stop="toggleMenu"
    />
    <nav v-if="toggle" class="flex flex-col items-start px-4 gap-5 my-2">
      <NuxtLink
        v-for="(link, index) in links"
        :key="link.name + link.route + index"
        :to="link.route"
        class="font-lato text-sm leading-normal font-medium text-text-dark px-3 py-1"
      >
        {{ link.name }}
      </NuxtLink>
    </nav>
  </div>
</template>
