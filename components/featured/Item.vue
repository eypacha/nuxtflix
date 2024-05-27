<template>
    <v-carousel-item
            :src="props.poster || movie.poster"
            cover
            reverse-transition="fade-transition"
            transition="fade-transition">
            <v-sheet height="100%" class="bg-transparent d-flex justify-center" >
                <div class="wrapper d-flex fill-height align-center justify-center">
                    <v-container fluid>
                        <h3 class="text-h2 font-weight-bold mb-5">{{movie.title}}</h3>
                        <p class="mb-5">{{ movie.plot }}</p>
                        <v-btn
                            :to="`/watch/${props.imdbId}`"
                            color="primary">{{ $t('browse.more_info')}}</v-btn>
                    </v-container>
                </div>
            </v-sheet>
        </v-carousel-item>
</template>

<script setup lang="ts">

interface Props {
    imdbId: string,
    poster?: string
}

const props = defineProps<Props>();

const nuxtApp = useNuxtApp();
const config = useRuntimeConfig();

interface MovieData {
    Response: string;
    Title?: string;
    Plot?: string;
    Poster?: string;
};

interface Movie {
    response: boolean;
    title?: string;
    plot?: string;
    poster?: string;
};

function sanitizeString(value: string): string | undefined {
    return value === 'N/A' ? undefined : value;
};

const { data: movie } = await useFetch('https://omdbapi.com', {
    query: {
        apikey: config.public.omdbApiKey,
        i: props.imdbId
    },
    lazy: false,
    pick: ['response', 'title', 'plot', 'poster'],
    getCachedData: (key): Movie => {
        return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    },
    transform: (data: MovieData): Movie => {

        if(data.Response === 'False') return undefined

        return {
            response: data.Response === 'True',
            title: data.Title,
            plot: sanitizeString(data.Plot),
            poster: sanitizeString(data.Poster)
        };
    },
});
</script>

<style scoped lang="scss">
.wrapper {

    width:100%;
    max-width:1460px;

    p {
        max-width: 450px;
        text-shadow: 1px 1px rgba(0,0,0,0.5);
        
    }
}
</style>