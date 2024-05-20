<template>
    <v-footer class="text-center d-flex flex-column">
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          :icon="icon.name"
          class="mx-4"
          variant="text"
          :aria-label="icon.label"
        ></v-btn>
      </div>
      <v-divider></v-divider>
      <div>
        2024 — <strong>Nuxtflix</strong>
      </div>
    </v-footer>
  </template>
  
  <script>
  export default {
    data: () => ({
      icons: [
        { name: 'mdi-facebook', label: 'Facebook' },
        { name: 'mdi-twitter', label: 'Twitter' },
        { name: 'mdi-linkedin', label: 'LinkedIn' },
        { name: 'mdi-instagram', label: 'Instagram' },
      ],
    }),
  }
  </script>
  