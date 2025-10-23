<script setup lang="ts">
import { linkSchema } from '~~/shared/utils/zod/layout';
import { z } from 'zod';

import { links as rawLinks } from '~/assets/data/layout/header.json';
import { useMobileMenu } from '~/composables/use-mobile-menu';

const links = z.array(linkSchema).parse(rawLinks);

const { toggle, toggleMenu } = useMobileMenu();
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
