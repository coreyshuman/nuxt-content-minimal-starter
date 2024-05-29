// https://nuxt.com/docs/guide/directory-structure/nuxt.config#nuxt-config-file

export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    [
      "@nuxtjs/color-mode",
      {
        classSuffix: ""
      }
    ],
    ["@nuxt/eslint", {}],
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/stylelint-module",
      {
        /* module options */
      }
    ]
  ],
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
        sepia: "github-light"
      }
    }
  },
  nitro: {
    prerender: {
      ignore: ["/_tailwind"]
    }
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true
  },
  typescript: {
    typeCheck: true,
    strict: true
  }
});
