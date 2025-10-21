import { z } from 'zod';

export default function config() {
  z.config(z.locales.es());
}
