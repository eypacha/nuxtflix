<template>
    <v-parallax src="/img/background.jpg" :height="props.height">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
     <slot />
    </div>
  </v-parallax>
</template>

<script setup lang="ts">
interface Props {
    height: string
}

const props = defineProps<Props>();
</script>