<template>
  <v-app>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </v-app>
</template>
<script setup lang="ts">
useHead({
  meta: [
    {
      name: 'description', content: 'Unlimited movies and much more',
    }
  ],
})
</script>