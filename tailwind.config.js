/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {}
    },
    variants: {
        extend: {
            animation: ["focus"]
        },
    },
    plugins: [ require('tailwind-scrollbar-hide')

    ],
};