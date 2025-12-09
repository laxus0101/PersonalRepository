<template>
    <div class="lg:w-[80%]">
        <Marquee :reverse="true" :fade="true">
            <div v-for="(card, index) in content" :key="index" class="flex flex-col items-center bg-neutral-primary-soft px-4 py-1 border border-default rounded-base shadow-xs md:flex-row md:max-w-xl md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-2">
                <!--<img class="object-cover w-full rounded-base h-24 md:h-48 md:w-auto"
                    src="" alt=""> -->
                <span>{{ card.img }}</span>
                <div class="flex flex-col justify-between md:p-4 leading-normal">
                    <h5 class="text-xl font-bold tracking-tight text-heading dark:text-white">{{ card.text }}</h5>
                    <!-- <p class="text-body dark:text-white"></p> -->
                    <div>
                    </div>
                </div>
            </div>
        </Marquee>
    </div>
</template>

<script setup>
const content = [
    { text: 'JavaScript', img: '🟨' },
    { text: 'Python', img: '🐍' },
    { text: 'C#', img: '🎮' },
    { text: 'Nuxt', img: '🖥️' },
    { text: 'Tailwind', img: '🎨' },
    { text: 'Flowbite', img: '🧩' },
    { text: 'Bootstrap', img: '📚' },
    { text: 'React', img: '⚛️' },
    { text: 'HTML', img: '🌐' },
    { text: 'CSS', img: '🎨' }
];
</script>
