<script setup lang="ts">
import footerContent from '~/assets/data/layout/footer.json';
import headerContent from '~/assets/data/layout/header.json';

</script>

<template>
  <div>
    <layout-header :header-info="headerContent" />
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <slot />
    </main>
    <layout-footer :footer-info="footerContent" />
  </div>
</template>

<style scoped></style>
