<template>
    <v-container class="fill-height">
        MOVIE DETAILS FOR {{ route.params.id }}
    </v-container>
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app'

const route = useRoute()
</script>
