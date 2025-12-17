<template>
  <div id="mainbody" class="py-2 sm:py-12 w-screen overflow-x-hidden overflow-y-auto">
    <section
    class="
    pb-10
    "
    >
      <div class="px-0 lg:px-8 mb-8 max-w-7xl mx-0 sm:mx-auto flex flex-col">
        <div class="px-2 sm:px-10 mx-0 sm:mx-10 grid grid-cols-2 grid-rows-2 gap-0 mt-5 ">
          <h2
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            data-aos-offset="0"
            data-aos-once="false"
            data-aos-delay="800"
            class="self-center text-2xl sm:text-5xl md:text-6xl text-dark dark:text-white font-semibold tracking-tight">
            Emmanuel Gaona</h2>
          <div
            data-aos="fade"
            data-aos-duration="1500"
            data-aos-offset="0"
            data-aos-once="false"
            data-aos-delay="800"
            class="col-start-1 row-start-2 ">
            <p
              class="mt-4 sm:mt-10 text-xl font-medium text-pretty text-gray-600 dark:text-gray-100 sm:text-xl/8">
              Hola, soy Emmanuel 👋
            </p>
            <p id="writing-effect" class="mt-32 sm:mt-10 font-medium text-pretty dark:text-gray-100 text-xl after:whitespace-nowrap" :style="contentValues">
            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="1500"
            data-aos-once="false"
            data-aos-offset="0"
            data-aos-delay="800"
            id="ContenedorImagen" class="flex justify-center items-center row-span-2 col-start-2 row-start-1 sm:mt-2">
            <div id="ImgPerfil" class="w-[250px] h-[350px] sm:w-[300px] sm:h-[400px] rounded-full" style="
                background-image: url(/img/profilepic.png);
                background-size: cover;
                background-position: center;">
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-once="false"
          data-aos-offset="-80"
          data-aos-delay="800"
          class="mt-16 mx-1 lg:mx-0 mb-5 ">
          <p class="mb-3 text-gray-600 dark:text-gray-200 text-md sm:text-2xl"> "Soy un desarrollador web especializado en frontend
            con
            experiencia en <strong class="font-bold text-gray-900 dark:text-white"> Nuxt</strong>, y actualmente
            aprendiendo <strong class="font-bold text-gray-900 dark:text-white"> React</strong>. Me apasiona crear
            interfaces limpias y funcionales."
          </p>
        </div>
      </div>
    </section>
    <section class="box-border">
      <div
      data-aos="fade"
      data-aos-duration="1500"
      data-aos-once="false"
      data-aos-offset="0"
      class="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 lg:px-8 mb-8 max-w-7xl mx-auto py-10">
        <Defcard class="" v-for="tarjeta in contenidoTrajetas" :titulo=tarjeta.titulo :descripcion=tarjeta.descripcion />
      </div>
    </section>
    <section class="box-border">
      <div data-aos="fade-right" data-aos-duration="2000" class="px-6 block mx-0 md:mx-auto max-w-7xl py-10">
        <p class="dark:text-white text-gray-900 text-xl font-bold text-center mb-4">Mis herramientas</p>
        <Carousel class="md:mx-auto mx-0"/>
      </div>
    </section>
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

const contentValues = {
  '--var1': '"Desarrollador Web Frontend"',
  '--var2': '"Diseñador UX/UI"',
  '--var3': '"Programador apasionado"',
}
</script>

<style>
#writing-effect{
  display: inline-block;
}

#writing-effect::after{
  content: '';
  display: inline-block;
  animation: typing 10s steps(30) infinite;
  animation-delay: 2s;
  overflow: hidden;
  width: 0;
}

/* .noparallax{
  z-index: 999;
}

.parallaxhero{
  transform-style: preserve-3d;
  position: relative;
} */

@keyframes typing {
  /* Paso 1 y 4 */
  /* Inicia/vuelve a width 0 para que no se vea */
  0%,33% {
    width: 0;
    content: var(--var1);
  }
  /* Paso 2 */
  /* Se extiende el width */
  15%{
    width: 100%;
  }
  /* Paso 3 */
  /* Se deja un tiempo para que se lea*/
  24%{
    width: 100%;
  }
  33.1%,60% {
    width: 0;
    content: var(--var2);
  }
  41.1%{
    width: 100%;
  }
  50%{
    width: 100%;
  }
  60.1%,100% {
    width: 0;
    content: var(--var3);
  }
  75.1%{
    width: 100%;
  }
  85%{
    width: 100%;
  }

}

</style>
