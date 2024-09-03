import { writable } from 'svelte/store';

export interface BlogPost {
    id: number,
    title: string,
    date: string
    category: string,
    image: string,
    text: string
}

export let blogPosts = writable<BlogPost[]>(); 

// Function to update the store with new blog posts data
export let updateBlogPosts = (newPosts: any) => {
    blogPosts.set(newPosts);
}