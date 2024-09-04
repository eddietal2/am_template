import { writable } from 'svelte/store';

// If Google Sheets structure/columns has changed, update the following files:
// - blog @ +page.server.ts
// - blog[slug] @ +page.server.ts
// - home +layout.server.ts

export interface BlogPost {
    // Google Sheets correlating Columns
    // i.e Column 'A' is the Title for each blog
    // A
    title: string,
    // B
    date: string
    // C
    category: string,
    // D
    image: string,
    // E
    link: string,
    // F
    text: string

    // No Column (generated on the server)
    id: number,
}

export let blogPosts = writable<BlogPost[]>(); 

// Function to update the store with new blog posts data
export let updateBlogPosts = (newPosts: any) => {
    return blogPosts.set(newPosts);
}