<template>
  <div id="mainbody" class="py-4">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
      <div class="mx-auto px-1 sm:px-10 lg:mx-0 grid grid-cols-2 grid-rows-2 gap-0 items center">
        <h2
          class="self-center text-3xl sm:text-5xl md:text-6xl text-dark dark:text-white font-semibold tracking-tight">
          Emmanuel Gaona</h2>
        <p
          class="mt-5 text-xl font-medium text-pretty text-gray-600 dark:text-gray-100 sm:text-xl/8 col-start-1 row-start-2">
          Hola, soy Emmanuel 👋
          <br>Desarrollador Web Frontend
        </p>
        <div id="ContenedorImagen" class="flex justify-center items-center row-span-2 col-start-2 row-start-1 mt-2">
          <div id="ImgPerfil"
            class="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full"
            style="
              background-image: url('/img/profilepic.jpg');
              background-size: cover;
              background-position: center;"
            >
          </div>
        </div>
      </div>
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none mb-5">
        <p class="mb-3 text-gray-600 dark:text-gray-200 text-xl"> "Soy un desarrollador web especializado en frontend
          con
          experiencia en <strong class="font-bold text-gray-900 dark:text-white"> Nuxt</strong>, y actualmente
          aprendiendo <strong class="font-bold text-gray-900 dark:text-white"> React</strong>. Me apasiona crear
          interfaces limpias y funcionales."
        </p>
      </div>
    </div>
    <div class="flex flex-wrap gap-2 mx-auto max-w-7xl px-6 lg:px-8 mb-8">
      <Defcard class="grow" v-for="tarjeta in contenidoTrajetas" :titulo=tarjeta.titulo :descripcion=tarjeta.descripcion />
    </div>
    <div class="flex flex-wrap justify-center mx-auto max-w-7xl px-6 lg:px-8 mb-8">

    </div>
  </div>
</template>

<script setup>
import Defcard from '~/components/defcard.vue';
const contenidoTrajetas = ref([
  {
    titulo: 'Amo mucho a mi novia',
    descripcion: 'No sabes lo mucho que te amo mi amor, eres lo mejor que me ha pasado en la vida y quiero pasar el resto de mis dias a tu lado. Te amo con todo mi corazon y siempre lo hare.'
  },
  {
    titulo: '¿Por que mi novia es la mejor?',
    descripcion: 'Mi novia es la mejor porque siempre me apoya en todo lo que hago, me hace reir cuando estoy triste y me motiva a ser una mejor persona. Ademas, es hermosa por dentro y por fuera, no hay momento del dia en el que no piense en ella.'
  },
  {
    titulo: 'Raones por las que deberias de ver Lord of the Rings conmigo',
    descripcion: 'Lord of the Rings es una de las mejores sagas de peliculas jamas creadas. La historia es epica, los personajes son inolvidables y los efectos visuales son impresionantes. Ademas, la banda sonora es simplemente espectacular y te transporta a otro mundo. Verla conmigo seria una experiencia unica que nunca olvidaras.'
  }
]);
</script>

<style>
</style>
