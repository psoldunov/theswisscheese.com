import { createClient, groq } from 'next-sanity';
import { uuid } from '@sanity/uuid';

import clientConfig from './config/client-config';

// export async function getAllNews(): Promise<News[]> {
// 	return createClient(clientConfig).fetch(
// 		groq`*[_type == "news"]{
//       _id,
//       _createdAt,
//       name,
//       publishDate,
//       url,
//     }`
// 	);
// }

// export async function getNews(start = 0, end = 6): Promise<News[]> {
// 	return createClient(clientConfig).fetch(
// 		groq`*[_type == "news"] | order(publishDate desc) {
//             _id,
//             _createdAt,
//             name,
//             publishDate,
//             url
//         }[${start}...${end}]`
// 	);
// }

// // export async function getNewsItem(slug: string): Promise<News> {
// // 	return createClient(clientConfig).fetch(
// // 		//[0] is to get the first item in the array
// // 		groq`*[_type == "news" && slug.current == $slug][0]{
// //       _id,
// //       _createdAt,
// //       name,

// //       publishDate,
// //       url,
// //     }`,
// // 		//this is the variable that is passed into the query
// // 		{ slug }
// // 	);
// // }

// export async function getAllPodcasts(): Promise<Podcast[]> {
// 	return createClient(clientConfig).fetch(
// 		groq`*[_type == "podcast"]{
//       _id,
//       _createdAt,
//       name,
//       publishDate,
//       url,
//     }`
// 	);
// }

// export async function getPodcasts(start = 0, end = 6): Promise<Podcast[]> {
// 	return createClient(clientConfig).fetch(
// 		groq`*[_type == "podcast"] | order(publishDate desc) {
//             _id,
//             _createdAt,
//             name,
//             publishDate,
//             url
//         }[${start}...${end}]`
// 	);
// }

// const draftId = `drafts.${uuid()}`;

// export async function submitContactForm({
// 	fname,
// 	lname,
// 	company,
// 	email,
// 	phone,
// 	subject,
// 	message,
// }: {
// 	fname: string;
// 	lname: string;
// 	company: string;
// 	email: string;
// 	phone: string;
// 	subject: string;
// 	message: string;
// }) {
// 	return createClient(clientConfig).create({
// 		_id: draftId,
// 		_type: 'submission',
// 		submissionDate: new Date().toISOString(),
// 		name: `${fname} ${lname}`,
// 		company,
// 		email,
// 		phone,
// 		subject,
// 		message,
// 	});
// }

// // export async function getPodcast(slug: string): Promise<Podcast> {
// // 	return createClient(clientConfig).fetch(
// // 		//[0] is to get the first item in the array
// // 		groq`*[_type == "podcast" && slug.current == $slug][0]{
// //       _id,
// //       _createdAt,
// //       name,
// //       "slug": slug.current,
// //       publishDate,
// //       url,
// //     }`,
// // 		//this is the variable that is passed into the query
// // 		{ slug }
// // 	);
// // }
