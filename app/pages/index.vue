<template>
  <div id="mainbody" class="py-24 sm:py-4">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-8 border border-red-500">
      <div class="mx-auto px-10 lg:mx-0 grid grid-cols-2 grid-rows-2 gap-0 items center">
        <h2
          class="self-center sm:text-6xl sm:text-white-400 text-4xl font-semibold tracking-tight text-dark dark:text-white">
          Emmanuel Gaona</h2>
        <p
          class="mt-5 text-xl font-medium text-pretty text-gray-600 dark:text-gray-100 sm:text-xl/8 col-start-1 row-start-2">
          Hola, soy Emmanuel 👋
          <br>Desarrollador Web Frontend
        </p>
        <div id="ContenedorImagen" class="flex justify-center items-center row-span-2 col-start-2 row-start-1">
          <div id="ImgPerfil">
          </div>
        </div>
      </div>
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none border border-red-500 mb-5">
        <p class="mb-3 text-gray-600 dark:text-gray-200 text-xl"> "Soy un desarrollador web especializado en frontend
          con
          experiencia en <strong class="font-bold text-gray-900 dark:text-white"> Nuxt</strong>, y actualmente
          aprendiendo <strong class="font-bold text-gray-900 dark:text-white"> React</strong>. Me apasiona crear
          interfaces limpias y funcionales."
        </p>
      </div>
    </div>
    <div class="flex flex-wrap justify-center mx-auto max-w-7xl px-6 lg:px-8 mb-8 border border-red-500">
      <Defcard />
      <Defcard />
      <Defcard />
    </div>
    <div class="flex flex-wrap justify-center mx-auto max-w-7xl px-6 lg:px-8 border border-red-500">

    </div>
  </div>
</template>

<script setup>
import Defcard from '~/components/defcard.vue';

</script>

<style>
#ContenedorImagen #ImgPerfil {
  width: 400px;
  height: 400px;
  background-image: url("/img/profilepic.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 50%;
}
</style>
