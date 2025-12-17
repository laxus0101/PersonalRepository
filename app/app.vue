<template>
  <div class="">
    <div class="grid grid-rows-[auto,1fr,auto] min-h-screen overflow-x-hidden
    dark:bg-[#2e2459] bg-[#FFFFFF]
    dark:bg-[linear-gradient(120deg,rgba(46,36,89,1)9%,rgba(36,50,97,1)31%,rgba(27,57,87,1)50%,rgba(46,53,102,1)75%,rgba(13,19,56,1)92%);]
    bg-[linear-gradient(120deg,rgba(255,255,255,1)0%,rgba(164,204,235,1)25%,rgba(135,232,230,1)50%,rgba(152,204,235,1)75%,rgba(255,255,255,1)100%);]
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
