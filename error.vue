<template>
  <div class="container">
    <canvas ref="canvas"/>
    <div class="d-flex flex-column justify-center align-center text-white">
      <h1 class="text-h1 font-weight-black mb-2">{{ props.error.statusCode }}</h1>
      <h2 class="text-h5 mb-10">{{ props.error.message }}</h2>
      <v-btn color="primary" @click="goToHome">{{ $t('error.goto_gome')}}</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: {
    type: Object as () => NuxtError,
    required: true,
    default: () => ({
      statusCode: 500,
      message: 'An unknown error occurred'
    })
  }
})

const goToHome = () => clearError({ redirect: '/' })

const ctx = ref<CanvasRenderingContext2D | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);

const noise = {
  scaleFactor: 2.5, // Noise size
  samples: [] as ImageData[],
  sampleIndex: 0,
  scanOffsetY: 0,
  scanSize: 0,
  fps: 50,
  sampleCount: 10
};

const WhiteNoise = () => {
  if (ctx.value && noise.samples.length) {
    ctx.value.putImageData(noise.samples[Math.floor(noise.sampleIndex)], 0, 0);

    noise.sampleIndex += 20 / noise.fps;
    if (noise.sampleIndex >= noise.samples.length) noise.sampleIndex = 0;

    const grd = ctx.value.createLinearGradient(0, noise.scanOffsetY, 0, noise.scanSize + noise.scanOffsetY);
    ctx.value.fillStyle = grd;
    ctx.value.fillRect(0, noise.scanOffsetY, 1920, noise.scanSize + noise.scanOffsetY);
    ctx.value.globalCompositeOperation = "lighter";

    window.requestAnimationFrame(WhiteNoise);
  }
};

const interpolate = (x: number, x0: number, y0: number, x1: number, y1: number) => {
  return y0 + (y1 - y0) * ((x - x0) / (x1 - x0));
};

const generateRandomSample = (context: CanvasRenderingContext2D, w: number, h: number) => {
  const intensity: number[] = [];
  const factor = h / 50;
  const trans = 1 - Math.random() * 0.05;

  const intensityCurve: number[] = [];
  for (let i = 0; i < Math.floor(h / factor) + factor; i++)
    intensityCurve.push(Math.floor(Math.random() * 15));

  for (let i = 0; i < h; i++) {
    const value = interpolate((i / factor), Math.floor(i / factor), intensityCurve[Math.floor(i / factor)], Math.floor(i / factor) + 1, intensityCurve[Math.floor(i / factor) + 1]);
    intensity.push(value);
  }

  const imageData = context.createImageData(w, h);
  for (let i = 0; i < (w * h); i++) {
    const k = i * 4;
    let color = Math.floor(36 * Math.random());
    // Optional: add an intensity curve to try to simulate scan lines
    color += intensity[Math.floor(i / w)];
    imageData.data[k] = imageData.data[k + 1] = imageData.data[k + 2] = color;
    imageData.data[k + 3] = Math.round(255 * trans);
  }
  return imageData;
};

onMounted(() => {
  if (canvas.value) {
    ctx.value = canvas.value.getContext("2d");
    if (ctx.value) {
      canvas.value.width = window.innerWidth;
      canvas.value.height = window.innerHeight;
      noise.scanSize = (canvas.value.offsetHeight / noise.scaleFactor) / 3;

      noise.samples = [];
      for (let i = 0; i < noise.sampleCount; i++)
        noise.samples.push(generateRandomSample(ctx.value, canvas.value.width, canvas.value.height));

      WhiteNoise();
    }
  }
})
</script>

<style scoped lang="scss">
div {
  height: 100dvh;
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  perspective: 1000;
  -webkit-perspective: 1000;
  z-index: -1;
}
</style>