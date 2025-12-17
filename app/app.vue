<template>
  <div class="">
    <div class="grid grid-rows-[auto,1fr,auto] min-h-screen overflow-x-hidden
    dark:bg-[#2e2459] bg-[#ffffff]
    dark:bg-hero-dark
    bg-hero-light
    ">
      <header>
        <Headercomp/>
      </header>
      <main>
        <NuxtPage/>
      </main>
      <footer>
        <Footercomp/>
      </footer>
    </div>
    <ClientOnly>
      <Teleport to="body">
        <Cortina_inicial/>
      </Teleport>
    </ClientOnly>
  </div>
</template>
<script setup>
useHead({
  title: 'Frontend developer - Emmanuel Gaona',
  meta: [
    { name: 'description', content: 'Portafolio de Emmanuel Gaona, desarrollador web frontend especializado en Nuxt y React.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { charset: 'utf-8' },
  ],
});
import Footercomp from '~/components/footercomp.vue';
import Cortina_inicial from './components/animated_comp/cortina_inicial.vue';
import Headercomp from './components/headercomp.vue';
</script>
<style>
</style>
