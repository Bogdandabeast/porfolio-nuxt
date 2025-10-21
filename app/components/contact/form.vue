<script setup lang="ts">
import { contactFormSchema } from '~~/shared/utils/zod/contact';
import { z } from 'zod';

import form from '~/assets/data/components/contact-form.json';

const formData = contactFormSchema.parse(form);

const nameField = ref('');
const emailField = ref('');
const messageField = ref('');

const validFormFieldSchema = {
  name: z
    .string()
    .min(2)
    .max(50),

  email: z
    .email()
    .min(3)
    .toLowerCase(),

  message: z
    .string()
    .min(10)
    .max(255)
    .trim(),
};
const userFormConstraintMessages = {
  name: 'El nombre debe tener entre 2 y 50 caracteres',
  email: 'Debes introducir un correo electrónico válido',
  message: 'El mensaje debe tener entre 10 y 255 caracteres',
};

const hasError = reactive({
  name: computed(() => {
    return !validFormFieldSchema.name.safeParse(nameField.value).success;
  }),
  email: computed(() => {
    return !validFormFieldSchema.email.safeParse(emailField.value).success;
  }),
  message: computed(() => {
    return !validFormFieldSchema.message.safeParse(messageField.value).success;
  }),

});

const CanSendForm = computed(() => {
  return !hasError.name && !hasError.email && !hasError.message;
});
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
          v-if="hasError.name"

          class="p-2 bg-zinc-500 border rounded my-1"
        > {{ userFormConstraintMessages.name }}</p>
      </label>
    </div>
    <label v-auto-animate class="flex flex-col flex-1">
      <p class="text-base font-medium leading-normal pb-2 text-[var(--text-primary-dark)]">{{ formData.email }}</p>
      <input
        v-model="emailField"
        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg h-12 placeholder:text-[var(--text-secondary-dark)] p-4 text-base font-normal leading-normal bg-zinc-800 focus:outline-none focus:ring-0"
        :class="{ 'border border-green-300': !hasError.email }"
        :placeholder="formData.email_placeholder"
        required
        type="email"
      >
      <p
        v-if="hasError.email"

        class="p-2 bg-zinc-500 border rounded my-1"
      > {{ userFormConstraintMessages.email }}</p>
    </label>
    <label v-auto-animate class="flex flex-col flex-1">
      <p class="text-base font-medium leading-normal pb-2 text-[var(--text-primary-dark)]">{{ formData.message }}</p>
      <textarea
        v-model="messageField"
        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg p-4 text-base font-normal leading-normal bg-zinc-800 focus:outline-none focus:ring-0"
        :class="{ 'border border-green-300': !hasError.message }"
        :placeholder="formData.message_placeholder"
        required
      />
      <p
        v-if="hasError.message"

        class="p-2 bg-zinc-500 border rounded my-1"
      > {{ userFormConstraintMessages.message }}</p>
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
