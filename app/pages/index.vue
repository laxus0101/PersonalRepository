<template>
  <div id="mainbody" class="relative isolate overflow-hidden bg-white dark:bg-gray-900 py-24 sm:py-32">
    <!--       <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
        <div class="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="border border-red-500 absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0" aria-hidden="true">
        <div class="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div> -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8 border border-red-500">
      <div class="mx-auto  lg:mx-0 grid grid-cols-2 grid-rows-2 gap-4">
        <h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Emmanuel Gaona Acevedo</h2>
        <p class="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8 col-start-1 row-start-2">
          Hola, soy Emmanuel 👋
          <br>Desarrollador Web Frontend
        </p>
        <div class="flex bg-red-50 justify-center items-center row-span-2 col-start-2 row-start-1">
          <h1 class="">Foto de perfil</h1>
        </div>
      </div>
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none border border-red-500 mb-5">
        <p class="mb-3 text-gray-500 dark:text-gray-400"> "Soy un desarrollador web especializado en frontend con experiencia en <strong class="font-semibold text-gray-900 dark:text-white">Vue</strong>,<strong class="font-semibold text-gray-900 dark:text-white"> Nuxt</strong>, y actualmente aprendiendo <strong class="font-semibold text-gray-900 dark:text-white"> React</strong>. Me apasiona crear interfaces limpias, rápidas y funcionales."</p>
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
    <div class="mx-auto max-w-7xl px-6 lg:px-8 border border-red-500">
      <Defcard />
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
