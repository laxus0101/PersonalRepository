<template>
<div id="infocard-comp" class="w-full p-6 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-sm">
    <span>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{props.titulo}}</h5>
    </span>
    <span class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ props.descripcion }}</span>
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
<style>
#infocard-comp {
    cursor: pointer;
    filter: blur(10px);
    transition: transform 0.2s ease-in-out, filter 0.2s ease-in-out;
}
#infocard-comp:hover {
    transform: translateY(-10px);
    filter: blur(0px);
}
</style>