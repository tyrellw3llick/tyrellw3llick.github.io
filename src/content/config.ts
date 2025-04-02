import { defineCollection, z } from 'astro:content';

const postCollecion = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		image: z
			.object({
				src: z.string(),
				alt: z.string(),
			})
			.optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = {
	posts: postCollecion,
};
