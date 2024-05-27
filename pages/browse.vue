<template>
    <FeaturedCarousel :movies="featured"/>

        <MovieSection
            v-for="(section, index) in sections"
            :key="index"
            :search-term="section.searchTerm"
            :title="section.title"/>
</template>

<script setup lang="ts">

const featured = [
    {
        imdbId: 'tt1160419',
        poster: '/img/featured/dune_background.jpg'
    },
    {
        imdbId: 'tt15398776',
        poster: '/img/featured/oppenheimer_background.jpg'
    },
    {
        imdbId: 'tt0816692',
        poster: '/img/featured/interstellar_background.jpg'
    },
]

const sections = [
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