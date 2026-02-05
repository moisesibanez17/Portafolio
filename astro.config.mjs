import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://moisesibanez17.github.io',
    base: '/portafolio',
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [react()],
    output: 'static',
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
});
