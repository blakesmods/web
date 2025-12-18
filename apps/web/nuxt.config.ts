import docsVersionsJSON from "./content/docs/.versions.json";
import wikiCategoriesJSON from "./content/wiki/.categories.json";

const description =
  "Official home of Mystical Agriculture, Pickle Tweaks, Iron Jetpacks, Extended Crafting, Mystical Agradditions, Mystical Automation, Mystical Customization, More Buckets and Cucumber Library!";

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en"
      },
      bodyAttrs: {
        class: "antialiased font-sans bg-default"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: description },
        { property: "og:title", content: "Blake's Mods" },
        { property: "og:description", content: description },
        { name: "twitter:title", content: "Blake's Mods" },
        { name: "twitter:description", content: description },
        { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "theme-color", content: "#ffffff" }
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
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "@sentry/nuxt/module",
    "@vueuse/nuxt",
    "@nuxtjs/sitemap" // sitemap module must be last
  ],
  sourcemap: {
    client: "hidden"
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: ["/", ...docsVersionsJSON.slice(1).map(v => `/docs/${v}`)]
    }
  },
  content: {
    build: {
      markdown: {
        highlight: {
          langs: ["json", "json5", "zenscript"],
          theme: {
            default: "github-light",
            dark: "github-dark"
          }
        }
      }
    }
  },
  hooks: {
    "content:file:afterParse"(ctx) {
      const { file, content } = ctx;
      // automatically add category to wiki articles based on directory
      if (file.id.startsWith("wiki")) {
        const dir = file.dirname?.split("/").pop();
        if (dir) {
          content.category = (wikiCategoriesJSON as any)[dir] || dir;
        } else {
          content.category = "Uncategorized";
        }
      }
    }
  },
  site: {
    url: "https://blakesmods.com"
  },
  googleFonts: {
    families: {
      Montserrat: true,
      Rowdies: true
    }
  },
  sentry: {
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
    authToken: process.env.SENTRY_AUTH_TOKEN
  },
  ui: {
    content: true,
    theme: {
      colors: [
        "primary",
        "secondary",
        "success",
        "info",
        "error",
        "warning",
        "neutral"
      ]
    }
  }
});
