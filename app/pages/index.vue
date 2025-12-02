<template>
  <div id="mainbody" class="py-24 sm:py-4">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 border border-red-500">
      <div class="mx-auto px-10 lg:mx-0 grid grid-cols-2 grid-rows-2 gap-0 items center">
        <h2 class="self-center sm:text-6xl sm:text-white-400 text-4xl font-semibold tracking-tight text-dark dark:text-white">Emmanuel Gaona</h2>
        <p class="mt-5 text-xl font-medium text-pretty text-gray-600 dark:text-gray-100 sm:text-xl/8 col-start-1 row-start-2">
          Hola, soy Emmanuel 👋
          <br>Desarrollador Web Frontend
        </p>
        <div id="ContenedorImagen" class="flex justify-center items-center row-span-2 col-start-2 row-start-1">
          <div id="ImgPerfil">
          </div>
        </div>
      </div>
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none border border-red-500 mb-5">
        <p class="mb-3 text-gray-600 dark:text-gray-200 text-xl"> "Soy un desarrollador web especializado en frontend con
          experiencia en <strong
            class="font-bold text-gray-900 dark:text-white"> Nuxt</strong>, y actualmente aprendiendo <strong
            class="font-bold text-gray-900 dark:text-white"> React</strong>. Me apasiona crear interfaces limpias y funcionales."</p>
        <!--           <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <a v-for="link in links" :key="link.name" :href="link.href">{{ link.name }} <span aria-hidden="true">&rarr;</span></a>
          </div> -->
        <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.name" class="flex flex-col-reverse gap-1">
            <dt class="text-base/7 text-gray-300">{{ stat.name }}</dt>
            <dd class="text-4xl font-semibold tracking-tight text-white">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="flex flex-wrap justify-center mx-auto max-w-7xl px-6 lg:px-8 border border-red-500">
      <Defcard class=""/>
      <Defcard class=""/>
      <Defcard class=""/>
    </div>
  </div>
</template>

<script setup>

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'stat', value: '?' },
  { name: 'stat', value: '?' },
  { name: 'stat', value: '?' },
  { name: 'stat', value: '?' },
]

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
