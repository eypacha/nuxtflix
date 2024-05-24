<template>
    <v-container class="pa-0" :fluid="true">
        <ParallaxSection class="mb-10" height="calc(100dvh - 300px)" />
        
        <MovieSection v-for="(movie, index) in movies" :key="index" :search-term="movie.searchTerm" :title="movie.title"/>
    </v-container>
</template>

<script setup lang="ts">

const movies = [
    {
        searchTerm: 'avengers',
        title: 'The Avengers'
    },
    {
        searchTerm: 'batman',
        title: 'Batmania'
    },
    {
        searchTerm: 'lego',
        title: 'Made with bricks'
    },
    {
        searchTerm: 'star wars',
        title: 'In a galaxy far, far away...'
    },
    {
        searchTerm: 'pink panther',
        title: 'Pink!'
    },
]
</script>