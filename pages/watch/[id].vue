<template>
    <v-container class="watch_route hero" fluid>
        <div class="fill-height d-flex align-center justify-center">

        <v-row v-if="movie && movie.response" justify="center" class="mt-15 mb-10 mt-sm-0 mt-sm-0">
            <v-col cols="12" sm="5" order-sm="2">
                <v-card outlined color="background" class="fill-height d-flex flex-column pa-7" rounded="lg">
                    <v-card-title class="text-h4">{{ movie.title }}</v-card-title>
                    <v-card-subtitle class="mb-4">
                        <div v-if="isGreenInfo" class="text-primary mb-2 gap-dots">
                            <span v-if="movie.rated">{{ movie.rated }}</span>
                            <span v-if="movie.runtime">{{ movie.runtime }}</span>
                            <span v-if="movie.genre">{{ movie.genre }}</span>
                        </div>
                        <div>
                            <span v-if="movie.imdbRating" class="mr-3">
                                <v-icon icon="mdi-star" size="small" color="yellow-darken-2"/> {{ movie.imdbRating }}
                            </span>
                            <span v-if="movie.awards">
                              <v-icon icon="mdi-medal" size="small" color="yellow-darken-2"/> {{ movie.awards }}
                            </span>
                        </div>
                    </v-card-subtitle>
                    <v-card-text class="text-body-1">
                        <p class="plot mb-4">{{ movie.plot }}</p>
                        <p v-if="movie.director" class="mb-1">
                            <span class="text-primary mr-2">{{ $t('watch.director') }}</span> {{ movie.director }}
                        </p>
                        <p v-if="movie.writer" class="mb-1">
                            <span class="text-primary mr-2">{{ $t('watch.writer') }}</span> {{ movie.writer }}
                        </p>
                        <p v-if="movie.actors" class="mb-1">
                            <span class="text-primary mr-2">{{ $t('watch.cast') }}</span> {{ movie.actors }}
                        </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            variant="flat"
                            small
                            icon
                            color="grey-darken-2"
                            to="/browse"
                            :aria-label="$t('watch.go_back')">
                            <v-icon color="background" icon="mdi-chevron-left"/>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col v-if="movie.poster" cols="12" sm="2" class="d-flex justify-center justify-sm-end" order-sm="1">
                <v-img :src="movie.poster" :alt="movie.title" class="movie-poster" max-width="320" rounded="lg"/>
            </v-col>
        </v-row>

        <div v-else>
            <h3 class="text-h3 mb-4">
                {{ $t('watch.no_movie') }}
            </h3>
            <h4 class="text-h4">
                {{ $t('watch.find_other_titles') }} <NuxtLink to="/browse">{{ $t('watch.home') }} </NuxtLink>
            </h4>
        </div>

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
    Rated?: string;
    Runtime?: string;
    Genre?: string;
    Director?: string;
    Writer?: string;
    Actors?: string;
    Plot?: string;
    imdbRating?: string;
    Awards?: string;
    Poster?: string;
};

interface Movie {
    response: boolean;
    title?: string;
    rated?: string;
    runtime?: string;
    genre?: string;
    director?: string;
    writer?: string;
    actors?: string;
    plot?: string;
    imdbRating?: number;
    awards?: string;
    poster?: string;
};

function sanitizeString(value: string): string | undefined {
    return value === 'N/A' ? undefined : value;
};

function sanitizeNumber(value: string): number | undefined {
    return value === 'N/A' ? undefined : parseFloat(value);
};

const { data: movie } = await useFetch('https://omdbapi.com', {
    query: {
        apikey: config.public.omdbApiKey,
        i: route.params.id
    },
    lazy: false,
    pick: ['response', 'title', 'runtime', 'rated', 'genre', 'director', 'writer', 'actors', 'plot', 'poster', 'awards', 'imdbRating'],
    getCachedData: (key): Movie => {
        return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    },
    transform: (data: MovieData): Movie => {

        if(data.Response === 'False') return undefined

        return {
            response: data.Response === 'True',
            title: data.Title,
            runtime: sanitizeString(data.Runtime),
            rated: sanitizeString(data.Rated),
            genre: sanitizeString(data.Genre),
            director: sanitizeString(data.Director),
            writer: sanitizeString(data.Writer),
            actors: sanitizeString(data.Actors),
            plot: sanitizeString(data.Plot),
            poster: sanitizeString(data.Poster),
            awards: sanitizeString(data.Awards),
            imdbRating: sanitizeNumber(data.imdbRating)
        };
    },

});

const isGreenInfo = computed(() => {
  return movie.value?.rated || movie.value?.runtime || movie.value?.genre;
});
</script>

<style scoped lang="scss">
.hero {
    min-height: 100dvh;
    background-image: url(/img/background.jpg);
    background-repeat: repeat;
}

.v-card-title {
    line-height: 1.2 !important;
    white-space: normal !important;
}

.v-card-subtitle {

    .gap-dots {
        gap: .5em;
        white-space: normal !important;

         span:not(:last-child):after {
            content: '•';
            margin-inline: .5em;
        }
    }
    
}

</style>

<style lang="scss">
.movie-poster {
    img {
        object-position: top;
    }
}

.v-list-item__spacer {
    width: 16px !important;
}

</style>