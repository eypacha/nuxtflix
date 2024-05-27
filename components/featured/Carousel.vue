<template>
    <v-carousel
        height="calc(100dvh - 300px)"
        cycle
        :interval="10000"
        hide-delimiters
        :show-arrows="false">
        <FeaturedItem
            v-for="movie in props.movies"
            :key="movie.imdbId"
            :imdb-id="movie.imdbId"
            :poster="movie.poster"/>
    </v-carousel>
</template>

<script setup lang="ts">

interface Movie {
    imdbId: string;
    poster?: string;
}

interface Props {
    movies: Movie[]
}

const props = defineProps<Props>();

</script>

<style scoped lang="scss">
.v-carousel {

    &:before,
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 200px;
        z-index: 1;
    }

    &:before {
        top: 0;
        background: linear-gradient(black, transparent);

    }

    &:after {
        bottom: 0;
        background: linear-gradient(transparent, rgb(var(--v-theme-background)))
    }
}
</style>