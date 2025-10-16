// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  nitro: {
    preset: 'cloudflare_module',

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
  vite: { plugins: [tailwindcss()] },
  css: ['~/assets/css/main.css'],

  modules: ['nitro-cloudflare-dev', '@nuxt/eslint'],

  eslint: {
    checker: true,
    config: {
      standalone: false,
    },
  },
})
