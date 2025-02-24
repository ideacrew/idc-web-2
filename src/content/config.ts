import { defineCollection, z } from "astro:content";

const workCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    client: z.string(),
    description: z.string(),
    summary: z.string().optional().default(""),
    image: z
      .object({
        src: z.string().default("/images/about-us.svg"),
        alt: z.string().default("Placeholder image"),
      })
      .optional()
      .default({
        src: "/images/about-us.svg",
        alt: "Placeholder image",
      }),
    sortOrder: z.number().default(999),
  }),
});

const leadersCollection = defineCollection({
  type: "content",
  schema: z.object({
    seo: z.object({
      description: z.string(),
    }),
    name: z.string(),
    position: z.string(),
    photo: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    linkedin: z.string().url(),
    sortOrder: z.number().default(999),
  }),
});

const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string(),
    pubDatetime: z.date(),
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    modDatetime: z.date().optional().nullable(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

const jobPostings = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.string(),
    location: z.string(),
    department: z.string(),
    active: z.boolean(),
    description: z.string(),
    responsibilities: z.array(z.string()),
    requirements: z.array(z.string()),
    benefits: z.array(z.string()),
    applicationUrl: z.string(),
    sortOrder: z.number(),
  }),
});

export const collections = {
  work: workCollection,
  leaders: leadersCollection,
  news: newsCollection,
  careers: jobPostings,
};
