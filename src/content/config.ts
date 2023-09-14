import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    published: z.string().transform((str) => new Date(str)),
    description: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
