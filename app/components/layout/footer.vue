<script setup lang="ts">
import type { footerSchema } from '~~/shared/utils/zod/layout';
import type { z } from 'zod';

type FooterContent = z.infer<typeof footerSchema>;

defineProps<{
  footerInfo: FooterContent;
}>();
</script>

<template>
  <footer>
    <div class="flex flex-col gap-6 px-5 py-10 text-center">
      <div class="flex justify-center gap-6">
        <social-icons />
      </div>
      <p class="font-body text-sm leading-normal font-normal text-text-dark/60">
        {{ footerInfo.text }} {{ new Date().getFullYear() }}
      </p>
    </div>
  </footer>
</template>

<style scoped></style>
