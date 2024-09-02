import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
    console.clear();
	// const post = await getPostFromDatabase(params.slug);

	// if (post) {
	// 	return post;
	// }

	// error(404, 'Not found');
};