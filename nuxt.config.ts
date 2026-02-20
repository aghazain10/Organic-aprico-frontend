export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },

    modules: [
        "@pinia/nuxt",
        "@nuxtjs/tailwindcss",
        "pinia-plugin-persistedstate/nuxt",
    ],

    app: {
        head: {
            title: "Organic Aprico - Pure Mountain Power",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    name: "description",
                    content:
                        "Discover authentic Shilajit sourced from Skardu's Himalayan mountains at Organic Aprico.",
                },
            ],
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;700&family=Oswald:wght@200;400;500;600;700&family=Golos+Text:wght@800&family=Epilogue:wght@800&display=swap",
                },
            ],
        },
    },

    css: ["~/assets/css/main.css"],

    typescript: {
        strict: true,
        typeCheck: false,
    },
});
