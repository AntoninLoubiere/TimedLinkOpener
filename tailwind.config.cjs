const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#174682',
                    variant: '#5576b7',
                },
                accent: {
                    DEFAULT: '#d6a419',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

module.exports = config;
