<script lang="ts">
    import { goto } from '$app/navigation';
    import { Button, Badge } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
    console.log(data);

    function affiliateLink() {
        return alert(`Affiliate Link: ${ data.blogInfo.link }\nTODO: Refactor this once we get links`,);
    }

    function back() {
        goto('/blog')
    }
</script>

<main class="container py-8 px-2">
    <div class="w-11/12 lg:w-3/4 xl:w-1/2 mx-auto">
        <Button on:click={back} color="light" class="my-4">Back</Button>
        <h1 class="text-5xl">{data.blogInfo.title}</h1>
        <Badge color="dark">{data.blogInfo.category}</Badge>
        <img src={data.blogInfo.image} class="my-2 w-full" alt="Blog"/>
        <p class="text-lg whitespace-pre-wrap">{data.blogInfo.text}</p>
    </div>
    <div class="w-11/12 lg:w-1/2 mx-auto my-8">
        <Button on:click={affiliateLink} color="green" class="w-full text-lg">Buy Product</Button>
    </div>
</main>

<style></style>