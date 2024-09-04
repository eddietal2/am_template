import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { blogPosts, type BlogPost } from '../stores/blogStore';

export const load: PageServerLoad = async ({ params }) => {
    await blogPosts.subscribe((blogs: BlogPost[]): BlogPost[]  => {
        return blogs;
    })   
};