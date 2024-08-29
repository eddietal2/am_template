<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { Button } from 'flowbite-svelte';

    onMount(() => {
      return;
    })
</script>
<main>
  <!-- Header -->
  <div class="mx-auto w-11/12 lg:w-11/12 xl:w-10/12">
    <h1 class="jersey-font page-header">BLOG</h1>
  </div>
  
  <!-- Content -->
  <div class="flex flex-col md:flex-row mx-auto mt-2 h-auto lg:h-40 w-11/12 lg:w-11/12 xl:w-10/12"> 
    
    <!-- Photo -->
    <div class="w-full mb-5 lg:mr-6 md:w-1/2">
      <div class="bg-blue-400 h-96 bg-no-repeat bg-cover">

      </div>
    </div>
    
    <!-- Text and Link -->
    <div class="w-full md:w-1/2">
      <!-- Header -->
        <p class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque perspiciatis vero, earum, minus corporis fugiat nisi distinctio impedit vel, aut aperiam deserunt veniam totam placeat aliquid delectus doloremque repudiandae dolores?
        </p>
  </div>
</main>
<style>

</style>
