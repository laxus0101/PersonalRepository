<template>
  <div class="flex justify-end content-center pe-14 py-1 fixed w-full top-0 bg-cyan-200 dark:bg-gray-700 z-10">
    <button @click.prevent="toggleDarkmode()" type="button"
      class="text-gray-500 inline-flex items-center justify-center dark:text-gray-400 w-10 h-10 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm border border-gray-300 dark:border-gray-600 dark:shadow-gray-900/40 dark:shadow-lg shadow-gray-900/20 shadow-lg">
      <svg class="block dark:hidden w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
        fill="currentColor" viewBox="0 0 18 20">
        <path
          d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z">
        </path>
      </svg>
      <svg class="hidden dark:block w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
        fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z">
        </path>
      </svg>
      <span class="sr-only">Toggle dark mode</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
const toggleDarkmode = () => {
  document.documentElement.classList.toggle('dark');
};
const darkmode = ref(true);
</script>