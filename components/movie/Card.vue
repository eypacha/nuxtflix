<template>
    <v-hover v-slot="{ isHovering, props: hoverProps }">
        <v-card
            v-bind="hoverProps"
            :border="`sm opacity-100 ${isHovering ? 'primary' : 'background'}`"
            rounded="lg" 
            color="background"
            height="200" 
            width="130"
            class="movie mx-2">
            <v-img
            :src="props.movie.poster || '/img/movie-placeholder.png'"
            class="align-end"
            height="200px"
            width="130px"
            :alt="props.movie.title"
            cover
            >
                <v-expand-transition>
                    <v-card-text
                        v-if="isHovering"
                        class="bg-background opacity-80 text-center text-white px-1 py-2">{{ props.movie.title }}</v-card-text>
                </v-expand-transition>
            </v-img>
        </v-card>
    </v-hover>
</template>

<script setup lang="ts">
interface Movie {
  title: string;
  imdbID: string;
  poster?: string;
}

interface Props {
    movie: Movie
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.v-card-text {
    line-height: 1.2;
    text-wrap: balance;
}
</style>