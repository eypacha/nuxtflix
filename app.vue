<template>
  <v-app>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </v-app>
</template>
<script setup lang="ts">
useHead({
  title: 'Nuxtflix',
  meta: [
    {
      name: 'description', content: 'Películas ilimitadas y mucho más'
    }
  ],
})
</script>