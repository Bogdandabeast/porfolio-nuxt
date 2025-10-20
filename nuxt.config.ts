// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({

  modules: ['nitro-cloudflare-dev', '@nuxt/eslint', '@nuxt/icon'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',

  nitro: {
    preset: 'cloudflare_module',

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
  vite: { plugins: [tailwindcss()] },

  eslint: {
    checker: true,
    config: {
      standalone: false,
      stylistic: false,
    },
  },
});
