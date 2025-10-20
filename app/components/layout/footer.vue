<script setup lang="ts">
export type Icon = {
  name: string;
  size: string;
  url: string;
  label: string;
};

export type FooterContent = {
  icons: Icon[];
  text: string;

};

defineProps<{
  footerInfo: FooterContent;
}>();
</script>

<template>
  <div class="flex flex-col gap-6 px-5 py-10 text-center">
    <div class="flex justify-center gap-6">
      <NuxtLink
        v-for="(icon, index) in footerInfo.icons"
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
    </div>
    <p class="font-body text-sm leading-normal font-normal text-text-dark/60">
      {{ footerInfo.text }} {{ new Date().getFullYear() }}
    </p>
  </div>
</template>

<style scoped></style>
