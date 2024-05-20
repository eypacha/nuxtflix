<template>
  <HeroPosters>
    <v-card class="pa-8" max-width="400" variant="elevated">
      <v-card-title>
        Inicia sesión
      </v-card-title>
      <v-card-text class="py-3">
        <v-form ref="form">
          <v-text-field
            label="Email"
            variant="outlined"
            required
          />
          <v-text-field
            label="Contraseña"
            variant="outlined"
            required
          />
          <v-btn block color="primary"  @click="$router.push('/browse')">
            Iniciar sesión
          </v-btn>
        </v-form>
      </v-card-text>
      <v-card-actions class="d-flex justify-between">
        <v-btn text>¿Olvidaste la contraseña?</v-btn>
      </v-card-actions>
    </v-card>
  </HeroPosters>
</template>