import { Rule } from 'sanity';

const podcast = {
	name: 'podcast',
	title: 'Podcasts',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (Rule: Rule) => Rule.required(),
		},
		{
			title: 'Publishing date',
			name: 'publishDate',
			type: 'date',
			validation: (Rule: Rule) => Rule.required(),
		},
		{
			name: 'url',
			title: 'URL',
			type: 'url',
			validation: (Rule: Rule) => Rule.required(),
		},
	],
};

export default podcast;
