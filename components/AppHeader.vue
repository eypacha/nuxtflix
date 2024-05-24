<template>
    <v-app-bar app elevation="0" class="pr-4" :color="bg">
        <v-toolbar-title>
            <router-link to="/">
                <v-img src="/img/logo.svg" width="100" contain alt="Nutflix" />
            </router-link>
        </v-toolbar-title>
        <v-spacer />
        <v-btn v-if="isIndexPage" color="primary" variant="flat" to="/login">Iniciar Sesión</v-btn>
    </v-app-bar>
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app'

const route = useRoute()

const isIndexPage = computed((): boolean => route.path === '/');

const bg = ref<string>('transparent');

const changeColor = ():void => {
  if (window.scrollY > 100) {
    bg.value = 'rgb(var(--v-theme-background))';
  } else {
    bg.value = 'transparent';
  }
};

onMounted(() => {
  window.addEventListener('scroll', changeColor);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', changeColor);
});
</script>

<style scoped>
header {
    transition: background-color 400ms;
}
</style>