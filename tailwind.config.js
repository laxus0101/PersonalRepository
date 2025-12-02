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
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
}