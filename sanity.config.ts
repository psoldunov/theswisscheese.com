import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import schemas from './sanity/schemas';
import { deskTool } from 'sanity/desk';

export default defineConfig({
	name: 'default',
	title: 'The Swiss Cheese',
	apiVersion: '2023-03-04',
	projectId: 'owh540dj',
	dataset: 'production',
	basePath: '/admin',
	ignoreBrowserTokenWarning: true,

	plugins: [deskTool(), visionTool()],

	// schema: { types: schemas },
});
