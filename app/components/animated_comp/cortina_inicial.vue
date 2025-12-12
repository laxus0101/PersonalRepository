<template>
  <div v-if="showOverlay" class="flex flex-row top-0 z-20 w-full h-full fixed pointer-events-none">
    <span v-for="i in cant_spans" :key="i" :class="['bg-gray-700  w-full transition-all ease-out mx-0',
      startAnimation ? 'h-0' : 'h-full'
    ]"
    :style="{
      transition: `${animation_duration + (i*delay_per_span) }ms`
    }">
    </span>
  </div>
</template>

<script setup>
//variables para controlar la animacion al inicio
const showOverlay = ref(true);
const startAnimation = ref(false);
//definir la cantidad de spans
const cant_spans = ref(10);
//definir la cantidad de tiempo que hay de delay entre cada span(en ms)
const delay_per_span = ref(300);
//definir el tiempo de duracion de la animacion(en ms)
const animation_duration = ref(700);


function AnimationHandler(){
  document.body.style.overflow = 'hidden'
  setTimeout(() => {
    startAnimation.value = true
  }, 1)
  setTimeout(() => {
    showOverlay.value = false
    document.body.style.overflow = ''
  }, (cant_spans.value * delay_per_span.value) + animation_duration.value )
}

onMounted(() => {
  AnimationHandler();
})
</script>

<style>
</style>