<script lang="ts">
    import { goto } from '$app/navigation';
    import { Button } from 'flowbite-svelte';
    import type { PageData } from './$types'
    
    export let data: PageData; 
    console.log(data);

    function viewBlog(blog: any) {
      let slug = blog.id;
      goto(`/blog/${slug}`)
      return blog;
    }

    
</script>
<main>
  <!-- Hero Section -->
  <section class="bg-white px-2 pt-4"> 
    <div class="container flex mx-auto">
      <div class="flex"> 
        <!-- Photo and Welcome Message -->
        <div class="w-full">
          <h1 class="text-3xl font-bold">Welcome to Pet Care Direct!</h1>
          <p class="text-lg">Find everything your furry friend needs to live a happy, healthy life.</p>
          <img src="https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg" alt="" srcset=""></div>
      
        </div>
        <!-- Call to Action (CTA) -->
        <div class="flex w-full items-center justify-center">
          <div class="bg-gray-100 p-8 rounded shadow-md text-center">
            <p class="text-xl py-2">Call to Action (CTA) message about why you should hit this button.</p>
            <Button color="dark">CTA Button</Button>
          </div>
        </div>
    </div>
  </section>
  
  <!-- Categories -->
  <section class="bg-gray-201 container mx-auto px-2 py-8 mt-16">
      <h2 class="text-3xl font-bold mb-6">Shop by Category</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white rounded-lg shadow p-4">
          <p class="text-xl font-semibold mb-2">Food</p>
          <div class="bg-gray-100 w-full h-40"></div>
        </div>
        <div class="bg-white rounded-lg shadow p-4">
          <p class="text-xl font-semibold mb-2">Litter</p>
          <div class="bg-gray-100 w-full h-40"></div>
          <div></div>
        </div>
        <div class="bg-white rounded-lg shadow p-4">
          <p class="text-xl font-semibold mb-2">Clearning</p>
          <div class="bg-gray-100 w-full h-40"></div>
          <div></div>
        </div>
        <div class="bg-white rounded-lg shadow p-4">
          <p class="text-xl font-semibold mb-2">Accessories</p>
          <div class="bg-gray-100 w-full h-40"></div>
          <div></div>
        </div>
      </div>
  </section>

  <!-- Products -->
  <!-- <section class="bg-gray-301 container mx-auto px-2 py-8 mt-16">
      <h2 class="text-3xl font-bold mb-6">Featured Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <img src="https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg" alt="Product Name" class="w-full h-48 object-cover"> 
          <div class="p-4">
            <p class="text-xl mb-2 text-[#666] font-bold">Product Name</p>
            <p class="text-gray-600 mb-2">Brief product description highlighting key features and benefits</p>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-green-500">$25</span>
              <Button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Product
              </Button>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <img src="https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg" alt="Product Name" class="w-full h-48 object-cover"> 
          <div class="p-4">
            <p class="text-xl mb-2 text-[#666] font-bold">Product Name</p>
            <p class="text-gray-600 mb-2">Brief product description highlighting key features and benefits</p>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-green-500">$25</span>
              <Button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Product
              </Button>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <img src="https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg" alt="Product Name" class="w-full h-48 object-cover"> 
          <div class="p-4">
            <p class="text-xl mb-2 text-[#666] font-bold">Product Name</p>
            <p class="text-gray-600 mb-2">Brief product description highlighting key features and benefits</p>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-green-500">$25</span>
              <Button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Product
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-16">
        <Button on:click={()=> {goto('/shop')}} class="w-56 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View All Products</Button>
      </div>
  </section> -->

  <!-- Blogs -->
  <section class="bg-gray-401 container mx-auto px-2 py-8 mt-16">
    <h2 class="text-3xl font-bold mb-6">Featured Blogs</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- svelte-ignore empty-block -->
      {#each data.formattedData as blog}    
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
        <img src={blog.image} alt="Product Name" class="w-full h-48 object-cover"> 
        <div class="p-4">
          <p class="text-xl mb-2 text-[#666] font-bold">{blog.title}</p>
          <div class="flex items-center justify-between">
            <Button on:click={viewBlog(blog)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Blog
            </Button>
          </div>
        </div>
        </div>
      {/each}

    </div>
    <div class="text-center mt-16">
      <Button on:click={()=> {goto('/blog')}} class="w-56 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View All Blogs</Button>
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