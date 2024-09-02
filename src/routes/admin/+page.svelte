<script lang="ts">
    import { onMount } from 'svelte';
    import type { PageData } from './$types'

    export let data: PageData;

    onMount(() => {
        console.log('Page Data:', data);
        
    })
</script>
<main>
    <h1>Admin</h1>
    {#each data.formattedData as blog}
        <div class="bg-gray-200 my-8 w-full lg:w-1/2">
            <h1>{blog.name}</h1>
            <p>{blog.post}</p>
        </div>
    {/each}
</main>
<style>
    
</style>