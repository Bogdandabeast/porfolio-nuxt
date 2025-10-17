<script setup lang="ts">
import footerContent from '~/assets/data/layout/footer.json';
import headerContent from '~/assets/data/layout/header.json';

</script>

<template>
  <div>
    <layout-header :header-info="headerContent" />
    <main><slot /></main>
    <layout-footer :footer-info="footerContent" />
  </div>
</template>

<style scoped></style>
