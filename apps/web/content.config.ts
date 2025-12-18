import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: "page",
      source: "docs/**/*.md",
      schema: z.object({
        category: z.string(),
        hidden: z.boolean().optional().default(false)
      })
    }),
    wiki: defineCollection({
      type: "page",
      source: "wiki/**/*.md",
      schema: z.object({
        version: z.string().optional(),
        sort: z.number(),
        icon: z.string().optional(),
        category: z.string(),
        hidden: z.boolean().optional().default(false)
      })
    })
  }
});
