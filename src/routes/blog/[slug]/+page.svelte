<script lang="ts">
    import { goto } from '$app/navigation';
    import { Button, Badge } from 'flowbite-svelte';
	import type { PageData } from './$types';
    import type { BlogPost } from '../../../stores/blogStore';
    import { blogPosts } from '../../../stores/blogStore';

	export let data: PageData;
    let blogInfo: BlogPost = {
        id: 0,
        title: '',
        date: '',
        category: '',
        image: '',
        text: ''
    };
    blogPosts.subscribe((posts: any) => {
        console.log('Posts for BlogStore:', posts);
        console.log('Slug', data);
        let matchedBlog = posts.filter((post: any) => {
            let postID = String(post.id);
            console.log(postID);
            return postID == data.slug
        });
        console.log('Matched Blog:', matchedBlog[0]);
        blogInfo.id = matchedBlog[0].id
        blogInfo.title = matchedBlog[0].title
        blogInfo.date = matchedBlog[0].date
        blogInfo.category = matchedBlog[0].category
        blogInfo.image = matchedBlog[0].image
        blogInfo.text = matchedBlog[0].text
        
    })

    function back() {
        goto('/blog')
    }
</script>

<main class="container py-8 px-2">
    <div class="w-11/12 lg:w-1/2 mx-auto">
        <Button on:click={back} color="light" class="my-4">Back</Button>
        <h1 class="text-5xl">{blogInfo.title}</h1>
        <Badge color="dark">{blogInfo.category}</Badge>
        <img src={blogInfo.image} class="my-2 w-full" alt="Blog"/>
        <p class="text-lg whitespace-pre-wrap">{blogInfo.text}</p>
    </div>
    <div class="w-11/12 lg:w-1/2 mx-auto my-8">
        <Button color="green" class="w-full text-lg">Buy Product</Button>
    </div>
</main>

<style></style>