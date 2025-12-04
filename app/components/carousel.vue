<template>
  <div>
      <Vue3Marquee>
          <h1 class="text-gray-900 dark:text-white"
              v-for="(word, index) in helloArray"
              :key="index">
              {{ word }}
          </h1>
      </Vue3Marquee>
  </div>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee'
const helloArray = ['JavaScript ', 'Pyhton ', 'C# ', 'Nuxt ', 'Tailwind ','Bootstrap ', 'React ','HTML ','CSS ']
</script>
