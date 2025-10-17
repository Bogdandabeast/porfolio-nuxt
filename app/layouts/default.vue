<script setup lang="ts">
import type { HeaderInfo } from '~/components/layout/header.vue'

const json: HeaderInfo = {
  name: 'Bogdan',
  links: [
    {
      name: 'About',
      route: '/about',
    },
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'Services',
      route: '/services',
    },
    {
      name: 'Portfolio',
      route: '/portfolio',
    },
    {
      name: 'Blog',
      route: '/blog',
    },
    {
      name: 'Contact',
      route: '/contact',
    },
    {
      name: 'FAQ',
      route: '/faq',
    },
  ],
}
</script>

<template>
  <div>
    <layout-header :header-info="json" />
    <main><slot /></main>
    <layout-footer />
  </div>
</template>

<style scoped></style>
