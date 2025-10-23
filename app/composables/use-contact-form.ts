import { z } from 'zod';

export function useContactForm() {
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

  return {
    nameField,
    emailField,
    messageField,
    userFormConstraintMessages,
    hasError,
    CanSendForm,
  };
}
