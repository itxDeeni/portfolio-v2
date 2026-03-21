// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxt/content'],
    css: ['~/assets/main.css'],
    app: {
        head: {
            title: 'Zahradeen Muazu | Software Engineer',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Portfolio of Zahradeen Muazu, a Software Engineer building scalable softwares and applications.' }
            ],
            link: [
                { rel: 'canonical', href: 'https://zahradeen.com' },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    }
})
