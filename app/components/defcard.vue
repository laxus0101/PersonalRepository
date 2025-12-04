<template>
<div class="w-full p-6 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-sm">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{props.titulo}}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ props.descripcion }}</p>
</div>
</template>
<script setup>
const props = defineProps({
    titulo: {
        type: String,
        default: 'Titulo de tarjeta'
    },
    descripcion: {
        type: String,
        default: 'Descripcion de la tarjeta'
    }
});
</script>