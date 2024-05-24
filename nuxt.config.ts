// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  runtimeConfig: {
    public: {
      omdbApiKey: process.env.OMDB_API_KEY
    }
  },
  modules: [
    "vuetify-nuxt-module",
    "@nuxt/eslint",
    "@nuxtjs/i18n"
  ],
  vuetify: {
    moduleOptions: {
      // styles: {
      //   configFile: 'assets/styles/settings.scss'
      // }
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: "dark",
        themes: {
          dark: {
            colors: {
              primary: "#00dc82",
              background: "#020420",
            },
          },
        },
      },
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  }
});