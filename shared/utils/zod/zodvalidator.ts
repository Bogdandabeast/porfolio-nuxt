import { fromZodError } from 'zod-validation-error';

export default function zodErrorValidator(data: any, zodObject: any) {
  const result = zodObject.safeParse(data);
  if (!result.success) {
    throw new Error(fromZodError(result).message);
  }
}
