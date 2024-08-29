<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { Button } from 'flowbite-svelte';
    function testerLink() {
        window.open('https://forms.gle/SWN4pGnP4crNx78e7', '_blank');
    }

    onMount(() => {
      return;
    })
</script>
<main>

    <section class="bg-gray-100 py-12"> 
      <div class="container mx-auto text-center">
        <h1 class="text-4xl font-bold mb-4">Welcome to [Your Pet Store Name]!</h1>
        <p class="text-lg">Find everything your furry friend needs to live a happy, healthy life.</p>
        </div>
    </section>
  
    <section class="bg-gray-200 container mx-auto py-8">
      <h2 class="text-3xl font-bold mb-6 text-center">Shop by Category</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white rounded-lg shadow p-4">
          <h3 class="text-xl font-semibold mb-2">Dogs</h3>
          <ul>
            <li>Food</li>
            <li>Toys</li>
            <li>Accessories</li>
            <li>Health</li>
          </ul>
        </div>
        </div>
    </section>
  
    <section class="bg-gray-300 container mx-auto py-8">
      <h2 class="text-3xl font-bold mb-6 text-center">Featured Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        </div>
    </section>
  
    <section class="bg-gray-400 container mx-auto py-8">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">From Our Blog</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          </div>
        <div class="mt-6">
          <a href="/blog" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read More</a>
        </div>
      </div>
    </section>
  
  </main>
<style>
    #logo {
        opacity: 0;
        animation: fade-in-hor 600ms ease 500ms forwards;
    }
    #info {
        opacity: 0;
        animation: fade-in-ver 600ms ease 1000ms forwards;
    }
    @keyframes fade-in-hor {
        0% {
            transform: translateX(-1.25rem);
        }
        100% {
            opacity: 1;
            transform: translateX(0rem);
        }
    }
    @keyframes fade-in-ver {
        0% {
            transform: translateY(1.25rem);
        }
        100% {
            opacity: 1;
            transform: translateY(0rem);
        }
    }
</style>