<script setup lang="ts">
import form from '~/assets/data/components/contact-form.json';
</script>

<template>
  <form class="flex flex-col gap-6 border p-10">
    <div class="flex flex-col sm:flex-row gap-6">
      <label class="flex flex-col flex-1">
        <p class="text-base font-medium leading-normal pb-2 text-[var(--text-primary-dark)]">{{ form.name }}</p>
        <input
          class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg h-12 placeholder:text-[var(--text-secondary-dark)] p-[15px] text-base font-normal leading-normal bg-zinc-800"
          :placeholder="form.name_placeholder"
          required=""
          value=""
        >
      </label>
    </div>
    <label class="flex flex-col flex-1">
      <p class="text-base font-medium leading-normal pb-2 text-[var(--text-primary-dark)]">{{ form.email }}</p>
      <input
        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg h-12 placeholder:text-[var(--text-secondary-dark)] p-[15px] text-base font-normal leading-normal bg-zinc-800"
        :placeholder="form.email_placeholder"
        required=""
        type="email"
        value=""
      >
    </label>
    <label class="flex flex-col flex-1">
      <p class="text-base font-medium leading-normal pb-2 text-[var(--text-primary-dark)]">{{ form.message }}</p>
      <textarea
        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg min-h-36 placeholder:text-[var(--text-secondary-dark)] p-[15px] text-base font-normal leading-normal bg-zinc-800"
        :placeholder="form.message_placeholder"
        required=""
      />
    </label>
    <div>
      <button class="h-12 transform cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-base leading-normal font-bold tracking-[0.015em] text-white transition-colors hover:scale-105 hover:bg-primary/90">
        <span class="truncate">{{ form.submit_button }}</span>
      </button>
    </div>
  </form>
</template>
