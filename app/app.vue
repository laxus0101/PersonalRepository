<template>
  <div class="flex flex-col min-h-screen">
    <main class="flex-grow">
      <NuxtPage/>
    </main>
    <footer class="bg-white dark:bg-gray-900">
      <Footercomp/>
    </footer>
  </div>
</template>
<script setup>
import Footercomp from '~/components/footercomp.vue';

</script>
