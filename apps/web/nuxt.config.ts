import { sentryVitePlugin } from "@sentry/vite-plugin";
import type { DefineNuxtConfig } from "nuxt/config";
import docsVersionsJSON from "./content/docs/.versions.json";

const description =
  "Official home of Mystical Agriculture, Pickle Tweaks, Iron Jetpacks, Extended Crafting, Mystical Agradditions, Mystical Customization, More Buckets and Cucumber Library!";

export default defineNuxtConfig(<Partial<DefineNuxtConfig>>{
  app: {
    head: {
      htmlAttrs: {
        lang: "en"
      },
      bodyAttrs: {
        class:
          "antialiased font-sans text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: description
        },
        { property: "og:title", content: "Blake's Mods" },
        {
          property: "og:description",
          content: description
        },
        {
          name: "twitter:title",
          content: "Blake's Mods"
        },
        {
          name: "twitter:description",
          content: description
        },
        {
          name: "msapplication-TileColor",
          content: "#ffffff"
        },
        {
          name: "theme-color",
          content: "#ffffff"
        }
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png"
        }
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-TQZGMBRJEM",
          async: true
        },
        {
          src: "/js/gtag.js"
        },
        {
          src: "/js/theme.js"
        }
      ]
    }
  },
  css: ["~/assets/css/main.scss"],
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "@sentry/nuxt/module",
    "@vueuse/nuxt",
    "nuxt-og-image",
    "@nuxtjs/sitemap" // sitemap module must be last
  ],
  build: {
    sourcemaps: "hidden"
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: ["/", ...docsVersionsJSON.slice(1).map(v => `/docs/${v}`)]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler"
        }
      }
    }
  },
  content: {
    highlight: {
      preload: ["java", "json5"],
      theme: {
        default: "github-light",
        dark: "github-dark"
      }
    }
  },
  site: {
    url: "https://blakesmods.com"
  },
  ogImage: {
    componentDirs: ["ogimage"],
    fonts: ["Montserrat:400"]
  },
  googleFonts: {
    families: {
      Montserrat: true,
      Rowdies: true
    }
  },
  sentry: {
    sourceMapsUploadOptions: {
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN
    }
  },
  ui: {
    global: true,
    icons: ["heroicons", "simple-icons"],
    safelistColors: [
      "white",
      "black",
      "red",
      "green",
      "blue",
      "yellow",
      "purple"
    ]
  }
});
