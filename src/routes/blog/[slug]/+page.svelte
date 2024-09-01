<script lang="ts">
    import { goto } from '$app/navigation';
    import { Button, Badge } from 'flowbite-svelte';
	import type { PageData } from './$types';
	
	export let data: PageData;
    let blogInfo = data.filteredBlog[0];
    console.log(data);
    
    function back() {
        goto('/blog')
    }
</script>

<main class="container py-8 px-2">
    <div class="w-11/12 lg:w-1/2 mx-auto">
        <Button on:click={back} color="dark" class="my-4">Back</Button>
        <h1 class="text-3xl">{blogInfo.name}</h1>
        <Badge color="dark">{blogInfo.category}</Badge>
        <p class="text-lg">{blogInfo.description}</p>
        <img src={blogInfo.image} class="my-2 w-full" alt="Blog"/>
        <p class="text-lg">{blogInfo.post}</p>
    </div>
</main>

<style></style>