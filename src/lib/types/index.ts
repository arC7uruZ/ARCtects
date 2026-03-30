export interface Project {
	slug: string;
	title: string;
	category: 'Residential' | 'Commercial' | 'Cultural';
	year: number;
	location: string;
	description: string;
	shortDescription: string;
	heroImage: string;
	images: string[];
	featured: boolean;
}

export type Category = 'All' | 'Residential' | 'Commercial' | 'Cultural';

export interface TeamMember {
	name: string;
	role: string;
	image: string;
}
