<template>
    <v-app-bar app elevation="0" class="pr-4" color="transparent">
        <v-toolbar-title>
            <router-link to="/">
                <v-img src="/img/logo.svg" width="100" contain alt="Nutflix" />
            </router-link>
        </v-toolbar-title>
        <v-spacer />
        <v-btn color="primary" variant="flat" to="/login">Iniciar Sesión</v-btn>
    </v-app-bar>
</template>