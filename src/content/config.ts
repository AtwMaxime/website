import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		tags: z.string(),
		year: z.string(),
        cover: image(),
        github: z.string().optional(), 
        paper: z.string().optional(),
	arxiv: z.string().optional(),
        
        // NOUVEAU CHAMP : On force une de ces 3 valeurs
        category: z.enum(['paper', 'main', 'side']), 
	}),
});

const journalCollection = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		type: z.string(),
        // Idem ici : image()
        image: image(),
        color: z.string(),
        origin: z.string().optional(),
        cultivar: z.string().optional(),
        vendor: z.string().optional(),
        harvest: z.string().optional(),
        pairing: z.string().optional(),
	}),
});

export const collections = {
	'work': workCollection,
	'journal': journalCollection,
};