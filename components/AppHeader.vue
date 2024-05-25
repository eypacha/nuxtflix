<template>
    <v-app-bar app elevation="0" class="pr-4" :color="bg">
        <v-toolbar-title>
            <router-link to="/">
                <v-img src="/img/logo.svg" width="100" contain alt="Nutflix" />
            </router-link>
        </v-toolbar-title>
        <v-spacer />
        <v-menu location="start">
          <template #activator="{ props }">
            <v-btn icon="mdi-translate" v-bind="props" class="mr-2" />
          </template>
          <v-list class="mr-2" density="compact">
            <v-list-item :active="locale === 'en'" @click="setLocale('en')" >
              <v-list-item-title>English</v-list-item-title>
            </v-list-item>
            <v-list-item :active="locale === 'es'" @click="setLocale('es')">
              <v-list-item-title>Español</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn v-if="isIndexPage" color="primary" variant="flat" to="/login">{{ $t('user.login_button') }}</v-btn>
    </v-app-bar>
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app';
const { locale, setLocale } = useI18n();

const route = useRoute();

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