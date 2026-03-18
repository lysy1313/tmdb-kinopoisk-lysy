import { toast } from 'react-toastify';
import z from 'zod';

export const zodValidation = <T>(result: T, dataSchema: z.ZodTypeAny) => {
  try {
    dataSchema.parse(result);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.table(error.issues);
      toast('Zod error. Смотри консоль', { type: 'error', position: 'top-center', theme: 'dark' });
    }
    throw error;
  }

  return result;
};
