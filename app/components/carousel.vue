<template>
    <div class="w-[70%] py-1">
        <Marquee
            class="gap-[1rem]"
            :reverse="true"
            :fade="true"
            :duration="20"
            >
            <div v-for="(card, index) in content" :key="index" class="flex flex-col items-center bg-neutral-primary-soft px-4 my-1 border border-default rounded-base md:max-w-xl dark:border-gray-700 dark:bg-gray-800 mx-4 shadow-2xl shadow-gray-400/10">
                <img :src=card.img alt="python logo" class="w-6 h-6 md:w-8 md:h-8 mt-2"/>
                <div class="flex flex-col justify-between px-4 py-1 leading-normal">
                    <h5 class="text-md font-bold tracking-tight text-heading dark:text-white">{{ card.text }}</h5>
                    <div>
                    </div>
                </div>
            </div>
        </Marquee>
    </div>
</template>

<script setup>
const content = [
    {
        text: 'JavaScript',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
    },
    {
        text: 'Python',
        img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
    },
    {
        text: 'C#',
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png'
    },
    {
        text: 'Nuxt',
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg'
    },
    {
        text: 'Tailwind',
        img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
    },
    {
        text: 'Flowbite',
        img: 'https://flowbite.com/docs/images/logo.svg'
    },
    {
        text: 'Bootstrap',
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg'
    },
    {
        text: 'React',
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
        text: 'HTML',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
    },
    {
        text: 'CSS',
        img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
    }
];
</script>
