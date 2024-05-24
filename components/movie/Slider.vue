<template>
    <v-sheet class="mx-auto mt-2 mb-9" elevation="0" color="transparent" max-width="100vw">
        
        <h3 class="ml-16">{{ props.title }}</h3>
        <v-slide-group v-model="model" class="movie-slider pt-2 pb-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="movie in props.movies" :key="movie.imdbID">
                <nuxt-link :to="`watch/${movie.imdbID}`" class="text-decoration-none">
                    <MovieCard :movie="movie" />
                </nuxt-link>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const nuxtApp = useNuxtApp();
const config = useRuntimeConfig();

interface MovieSearchResult {
  title: string;
  imdbID: string;
  poster?: string;
}

interface Props {
    title?: string,
    movies: MovieSearchResult[]
}

const props = defineProps<Props>();

const model = ref<null>(null);
</script>