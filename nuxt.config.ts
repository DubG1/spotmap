// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
plugins: [
],
  devtools: { enabled: true },
  typescript: {
      typeCheck: true
    }
})
