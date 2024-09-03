import { error } from '@sveltejs/kit';
import { google } from 'googleapis'; 
import type { PageServerLoad } from './$types';
import { blogPosts } from '../../../stores/blogStore';


export const load: PageServerLoad = async ({ params }) => {
  console.log('Blog Post Slug:', params.slug);
  return { slug: params.slug };
  
};