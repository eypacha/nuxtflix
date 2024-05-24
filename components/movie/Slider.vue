<template>
    <v-slide-group v-model="model" class="movie-slider pt-2 pb-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-for="movie in props.movies" :key="movie.imdbID">
            <nuxt-link :to="`watch/${movie.imdbID}`" class="text-decoration-none">
                <MovieCard :movie="movie" />
            </nuxt-link>
        </v-slide-group-item>
    </v-slide-group>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const nuxtApp = useNuxtApp();
const config = useRuntimeConfig();

interface MovieSearchResult {
  title: string;
  imdbID: string;
  poster?: string;
}

interface Props {
    movies: MovieSearchResult[]
}

const props = defineProps<Props>();

const model = ref<null>(null);
</script>