<script lang="ts">
    import { goto } from '$app/navigation';
    import { Button, Badge } from 'flowbite-svelte';
	import type { PageData } from './$types';
	
	export let data: PageData;
    let productInfo = data.filteredProduct[0];
    console.log(data);
    
    function back() {
        goto('/shop')
    }
</script>

<main class="container mx-auto py-8 px-2">
    <Button on:click={back} color="dark" class="my-4">Back</Button>
    <h1 class="text-3xl">{productInfo.name}</h1>
    <Badge color="dark">{productInfo.category}</Badge>
    <p>{productInfo.description}</p>
    <img src={productInfo.image} class="my-2" alt="Product"/>
</main>

<style></style>