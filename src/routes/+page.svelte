<script lang="ts">
    import { goto } from '$app/navigation';
    import { Button, FloatingLabelInput } from 'flowbite-svelte';
    import type { PageData } from './$types'
    
    export let data: PageData; 
    console.log(data);

    function viewBlog(blog: any) {
      let slug = blog.id;
      goto(`/blog/${slug}`)
      return blog;
    }

    // Email List
    interface EmailLister {
      name: string,
      email: string,
      phone: string,
    }
    let emailLister: EmailLister = {
      name: '',
      email: '',
      phone: '',
    };

    function emailListSubmit() {
      console.log('Adding to Email List ...');
    }
    
</script>
<main>

  <!-- Hero Section -->
  <section class="bg-white px-2 pt-4"> 
    <div class="container flex mx-auto">
      
      <!-- Info -->
      <div class="w-full"> 
        <!-- Photo and Welcome Message -->
        <div class="w-full">
          <h1 class="text-3xl font-bold">{data.formattedLandingPageData[0].ctaHeader}</h1>
          <img src="https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg" alt="" srcset=""></div>
      </div>

      <!-- Email List -->
      <div class="w-full">
        <div class="bg-gray-100 p-8 rounded shadow-md">
            <FloatingLabelInput 
              bind:value={emailLister.name}
              maxlength="100"
              name="name"
              classInput={"text-black dark:text-black"}
              type="text">
              First & Last
            </FloatingLabelInput>
            <FloatingLabelInput 
              bind:value={emailLister.email}
              maxlength="100"
              name="email"
              classInput={"text-black dark:text-black"}
              type="email">
              Email
            </FloatingLabelInput>
            <Button class="mt-8" on:click={emailListSubmit} color="dark">Sign Up</Button>
        </div>
      </div>
    </div>
  </section>
  
  <!-- About -->
  <section class="bg-gray-201  mx-auto px-2 py-8 mt-16">
      <div class="flex container mx-auto">

        <!-- Text -->
        <div class="w-full">
          <h2 class="text-3xl font-bold mb-6">About</h2>
          <p class="text-sm lg:text-lg">{data.formattedLandingPageData[0].about}</p>
        </div>

        <!-- Photo -->
        <div class="w-full h-96 bg-no-repeat bg-cover" style="background-image: url({data.formattedLandingPageData[0].aboutSectionPhoto});">
        </div>
      </div>
  </section>

  <!-- Blogs -->
  <section class="bg-gray-401 container mx-auto px-2 py-8 mt-16">
    <h2 class="text-3xl font-bold mb-6">Featured Blogs</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- svelte-ignore empty-block -->
      {#each data.formattedBlogs as blog}    
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