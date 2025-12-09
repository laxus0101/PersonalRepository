<template>
    <div class="w-[70%]">
        <Marquee :reverse="true" :fade="true">
            <div v-for="(card, index) in content" :key="index" class="flex flex-col items-center bg-neutral-primary-soft px-4 py-1 border border-default rounded-base shadow-xs md:max-w-xl dark:border-gray-700 dark:bg-gray-800 mx-2">
                <span>{{ card.img }}</span>
                <div class="flex flex-col justify-between md:p-4 leading-normal">
                    <h5 class="text-xl font-bold tracking-tight text-heading dark:text-white">{{ card.text }}</h5>
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
