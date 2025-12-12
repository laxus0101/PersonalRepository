<template>
  <div id="mainbody" class="py-4 w-screen mt-7 overflow-x-hidden">
    <div class="px-6 lg:px-8 mb-8 max-w-7xl mx-auto flex flex-col ">
      <div class="px-1 sm:px-10 lg:mx-0 grid grid-cols-2 grid-rows-2 gap-0">
        <h2
          data-aos="zoom-in-down"
          data-aos-duration="1500"
          data-aos-offset="0"
          data-aos-once="false"
          data-aos-delay="800"
          class="self-center text-3xl sm:text-5xl md:text-6xl text-dark dark:text-white font-semibold tracking-tight">
          Emmanuel Gaona</h2>
        <p
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-offset="0"
          data-aos-once="false"
          data-aos-delay="800"
          class="mt-4 text-xl font-medium text-pretty text-gray-600 dark:text-gray-100 sm:text-xl/8 col-start-1 row-start-2">
          Hola, soy Emmanuel 👋
          <br>Desarrollador Web Frontend
        </p>
        <div
          data-aos="flip-right"
          data-aos-duration="1500"
          data-aos-once="false"
          data-aos-offset="0"
          data-aos-delay="800"
          id="ContenedorImagen" class="flex justify-center items-center row-span-2 col-start-2 row-start-1 mt-5 sm:mt-2">
          <div id="ImgPerfil" class="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full" style="
              background-image: url('/img/profilepic.jpg');
              background-size: cover;
              background-position: center;">
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-once="false"
        data-aos-offset="100"
        data-aos-delay="800"
        class="mt-10 lg:mx-0 mb-5 ">
        <p class="mb-3 text-gray-600 dark:text-gray-200 text-xl"> "Soy un desarrollador web especializado en frontend
          con
          experiencia en <strong class="font-bold text-gray-900 dark:text-white"> Nuxt</strong>, y actualmente
          aprendiendo <strong class="font-bold text-gray-900 dark:text-white"> React</strong>. Me apasiona crear
          interfaces limpias y funcionales."
        </p>
      </div>
    </div>
    <div
    data-aos="fade"
    data-aos-duration="1500"
    data-aos-once="false"
    data-aos-offset="0"
    data-aos-delay="800"
    class="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 lg:px-8 mb-8 max-w-7xl mx-auto ">
      <Defcard class="" v-for="tarjeta in contenidoTrajetas" :titulo=tarjeta.titulo :descripcion=tarjeta.descripcion />
    </div>

    <div data-aos="fade-right" data-aos-duration="2000" class="px-6 block mx-0 md:mx-auto max-w-7xl ">
      <p class="dark:text-white text-gray-900 text-xl font-bold text-center mb-4">Mis herramientas</p>
      <Carousel class="md:mx-auto mx-0"/>
    </div>

  </div>
</template>

<script setup>
import Defcard from '~/components/defcard.vue';
const contenidoTrajetas = ref([
  {
    titulo: 'Hablidades Frontend',
    descripcion: 'Experiencia en HTML, CSS, JavaScript, Vue.js, Nuxt.js, React.js, Tailwind CSS, Bootstrap, Responsive Design y Accesibilidad Web.'
  },
  {
    titulo: 'Hablidades Diseño',
    descripcion: 'Diseño UI/UX, creacion de interfaces atractivas y funcionales.'
  },
  {
    titulo: 'Hablidades Backend',
    descripcion: "Conocimientos en Node.js, Express.js, bases de datos SQL, consumo de API's REST y GraphQl ."
  }
]);
</script>

<style>

</style>
