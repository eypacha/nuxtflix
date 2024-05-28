<template>
  <ParallaxSection height="100dvh" class="login_route">
    <v-card class="pa-8" max-width="400" variant="elevated">
      <v-card-title>
        {{ $t('user.signin') }}
      </v-card-title>
      <v-card-text class="py-3">
        <v-form ref="form">
          <v-text-field
            :label="$t('user.email')"
            variant="outlined"
            required
          />
          <v-text-field
            :label="$t('user.password')"
            variant="outlined"
            required
          />
          <v-btn block color="primary"  @click="$router.push('/browse')">
            {{ $t('user.login_button') }}
          </v-btn>
        </v-form>
      </v-card-text>
      <v-card-actions class="d-flex justify-between">
        <v-btn>{{ $t('user.forgot_password') }}</v-btn>
      </v-card-actions>
    </v-card>
  </ParallaxSection>
</template>