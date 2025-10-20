<script setup lang="ts">
import contact from '~/assets/data/pages/contact.json';
</script>

<template>
  <div class="flex flex-col md:flex-row gap-12 my-10">
    <div class="w-full md:w-1/2">
      <div class="flex flex-col gap-4 mb-8">
        <p class="text-4xl font-black leading-tight tracking-[-0.033em] text-[var(--text-primary-dark)]">
          {{ contact.title }}
        </p>
        <p class="text-base font-normal leading-normal text-[var(--text-secondary-dark)]">
          {{ contact.description }}
        </p>
        <contact-form />
      </div>
    </div>
    <div class="w-full md:w-1/2 md:pl-10 flex flex-col justify-start mt-8 md:mt-0">
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold text-[var(--text-primary-dark)] mb-2">
            {{ contact.find_me }}
          </h3>
          <div class="flex space-x-4">
            <social-icons />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-[var(--text-primary-dark)] mb-2">
            {{ contact.email_title }}
          </h3>
          <a class="flex items-center gap-2 text-[var(--primary-color)] hover:underline" :href="`mailto:${contact.email}`">
            <span class="material-symbols-outlined text-xl">email</span>
            <span class="text-base font-medium">{{ contact.email }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
