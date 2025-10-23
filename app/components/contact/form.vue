<script setup lang="ts">
import { contactFormSchema } from '~~/shared/utils/zod/contact';

import form from '~/assets/data/components/contact-form.json';
import { useContactForm } from '~/composables/use-contact-form';

const formData = contactFormSchema.parse(form);

const {
  nameField,
  emailField,
  messageField,
  userFormConstraintMessages,
  hasError,
  CanSendForm,
} = useContactForm();

const showNameError = computed(() => hasError.name && nameField.value.length > 0);
const showEmailError = computed(() => hasError.email && emailField.value.length > 0);
const showMessageError = computed(() => hasError.message && messageField.value.length > 0);
</script>

<template>
  <form class="flex flex-col gap-6 border p-10">
    <div class="flex flex-col sm:flex-row gap-6">
      <label v-auto-animate class="flex flex-col flex-1">
        <p class="text-base font-medium leading-normal pb-2 text-[var(--text-primary-dark)]">{{ formData.name }}</p>
        <input
          v-model="nameField"
          class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg h-12 placeholder:text-[var(--text-secondary-dark)] p-4 text-base font-normal leading-normal bg-zinc-800 focus:outline-none focus:ring-0"
          :class="{ 'border border-green-300': !hasError.name }"
          :placeholder="formData.name_placeholder"
          required
        >
        <p
          v-if="showNameError"
          class="p-2 bg-zinc-500 border rounded my-1"
        >
          {{ userFormConstraintMessages.name }}
        </p>
      </label>
    </div>
    <label v-auto-animate class="flex flex-col flex-1">
      <p class="text-base font-medium leading-normal pb-2 text-[var(--text-primary-dark)]">{{ formData.email }}</p>
      <input
        v-model="emailField"
        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg h-12 placeholder:text-[var(--text-secondary-dark)] p-4 text-base font-normal leading-normal bg-zinc-800 focus:outline-none focus:ring-0"
        :class="{ 'border border-green-300': !hasError.email, 'border border-red-300': showEmailError }"
        :placeholder="formData.email_placeholder"
        required
        type="email"
      >
      <p
        v-if="showEmailError"
        class="p-2 bg-zinc-500 border rounded my-1"
      >
        {{ userFormConstraintMessages.email }}
      </p>
    </label>
    <label v-auto-animate class="flex flex-col flex-1">
      <p class="text-base font-medium leading-normal pb-2 text-[var(--text-primary-dark)]">{{ formData.message }}</p>
      <textarea
        v-model="messageField"
        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg p-4 text-base font-normal leading-normal bg-.zinc-800 focus:outline-none focus:ring-0"
        :class="{ 'border border-green-300': !hasError.message }"
        :placeholder="formData.message_placeholder"
        required
      />
      <p
        v-if="showMessageError"
        class="p-2 bg-zinc-500 border rounded my-1"
      >
        {{ userFormConstraintMessages.message }}
      </p>
    </label>
    <div>
      <button
        :disabled="!CanSendForm"
        class="h-12 items-center justify-center rounded-lg px-6 font-bold text-white
         bg-primary transition-colors
         hover:scale-105 hover:bg-primary/90
         disabled:bg-gray-500 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {{ formData.submit_button }}
      </button>
    </div>
  </form>
</template>
