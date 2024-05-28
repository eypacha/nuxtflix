<template>
    <v-sheet class="mx-auto mt-2 mb-9" elevation="0" color="transparent" width="fit-content" max-width="100%">
        <h3 class="ml-16">{{ props.title }}</h3>
        <MovieSlider :movies="searchResults"/>
    </v-sheet>
</template>

<script setup lang="ts">

const nuxtApp = useNuxtApp();
const config = useRuntimeConfig();

interface Props {
    title: string,
    searchTerm: string
}

const props = defineProps<Props>();

interface SearchResult {
    Title: string;
    imdbID: string;
    Poster: string;
}

interface SearchResponse {
    Response: string;
    Search?: SearchResult[];
}

interface MovieSearchResult {
    title: string;
    imdbID: string;
    poster?: string;
}

function sanitizeData(value: string): string | undefined {
    return value === 'N/A' ? undefined : value;
}

const { data: searchResults } = await useFetch('https://omdbapi.com', {
    query: {
        apikey: config.public.omdbApiKey,
        s: props.searchTerm,
        type: 'movie'
    },
    lazy: false,
    getCachedData: (key): SearchResponse => {
        return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    },
    transform: (data: SearchResponse): MovieSearchResult[] => {
        if (data.Response === 'True' && data.Search) {
            return data.Search.map(result => ({
                title: result.Title,
                imdbID: result.imdbID,
                poster: sanitizeData(result.Poster),
            }));
        }
        return [];
    },
});
</script>