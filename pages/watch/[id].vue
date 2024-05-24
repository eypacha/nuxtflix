<template>
    <v-container class="fill-height">
        <div v-if="pending">
            Loading..
        </div>

        <v-row v-else-if="movie.response">
            <v-col v-if="movie.poster" cols="4" class="d-flex justify-end">
                <v-img :src="movie.poster" :alt="movie.title" max-width="266"/>
            </v-col>
            <v-col cols="8">
                <h3 class="text-h3">{{ movie.title }}</h3>
                <div class="mb-4 text-primary">
                    {{ movie.runtime }} {{ movie.genre }}
                </div>
                <p> {{ movie.plot }}</p>
            </v-col>
        </v-row>

        <div v-else>
            <h3 class="text-h3 mb-4">No encontramos la película</h3>
            <h4 class="text-h4">Encontrarás otros títulos al <NuxtLink to="/browse">inicio</NuxtLink>
            </h4>
        </div>
    </v-container>
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app';

const nuxtApp = useNuxtApp();
const route = useRoute();
const config = useRuntimeConfig();

definePageMeta({
  validate: async (route) => {
   // Check if the is a valid IMDb ID 
   return typeof route.params.id === 'string' && /^tt\d+$/.test(route.params.id);
  }
})

interface MovieData {
    Response: string;
    Title?: string;
    Runtime?: string;
    Genre?: string;
    Plot?: string;
    Poster?: string;
};

interface Movie {
    response: boolean;
    title?: string;
    runtime?: string;
    genre?: string;
    plot?: string;
    poster?: string;
};

function sanitizeData(value: string): string | undefined {
    return value === 'N/A' ? undefined : value;
}

const { pending, data: movie } = await useFetch('https://omdbapi.com', {
    query: {
        apikey: config.public.omdbApiKey,
        i: route.params.id,
    },
    lazy: false,
    pick: ['response', 'title', 'runtime', 'genre', 'plot', 'poster'],
    getCachedData: (key): Movie => {
        return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    },
    transform: (data: MovieData): Movie => {

        if(data.Response === 'False') return undefined
        
        return {
            response: data.Response === 'True',
            title: data.Title,
            runtime: sanitizeData(data.Runtime),
            genre: sanitizeData(data.Genre),
            plot: sanitizeData(data.Plot),
            poster: sanitizeData(data.Poster)
        };
    },
});
</script>
