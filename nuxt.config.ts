// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  modules: ["vuetify-nuxt-module", "@nuxt/eslint"],
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
});
