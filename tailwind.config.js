module.exports = {
    darkMode:'class',
    content: [
        "./app/components/**/*.{js,vue,ts}",
        "./app/pages/**/*.{js,vue,ts}",
        "./app/app.vue",
        "./error.vue",
        "./node_modules/flowbite/**/*.{js,ts}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                'hero-light': 'linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(164,204,235,1) 25%, rgba(135,232,230,1) 50%, rgba(152,204,235,1) 75%, rgba(255,255,255,1) 100%)',
                'hero-dark': 'linear-gradient(120deg, rgba(46,36,89,1) 9%, rgba(36,50,97,1) 31%, rgba(27,57,87,1) 50%, rgba(46,53,102,1) 75%, rgba(13,19,56,1) 92%)',
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}