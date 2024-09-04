<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button } from "flowbite-svelte";
  import type { PageData } from './$types'

  let searchTerm = '';
  let selectedCategory = 'all'; 

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'Food', name: 'Food' },
    { id: 'Toys', name: 'Toys' },
    { id: 'Accessories', name: 'Accessories' },
    { id: 'Health', name: 'Health' }
  ];

  // Get Blogs
  export let data: PageData;  
  let blogs = data.formattedBlogs;

  function viewBlog(blog: any) {
    let slug = blog.id;
    goto(`/blog/${slug}`)
    return blog;
  }

  // Pagination Logic
  let currentPage = 1;
  const blogsPerPage = 6;

  $: startIndex = (currentPage - 1) * blogsPerPage;
  $: endIndex = startIndex + blogsPerPage;
  $: displayedBlogs = filteredBlogs.slice(startIndex, endIndex);

  function goToPage(page: number) {
    currentPage = page;

    // Scroll to the bottom of the page
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Optional: for a smooth scrolling animation
    });
}

 // Function to filter blogs based on search and category
  $: filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || blog.category === selectedCategory)
  );

  $: totalPages = Math.ceil(filteredBlogs.length / blogsPerPage)


</script>

<main class="container mx-auto py-8">

  <!-- Search & Categories -->
  <section>
    <div class="flex flex-col md:flex-row items-center mb-6">
      <h1 class="page-header w-full">BLOG</h1>

      <input 
        type="text" 
        bind:value={searchTerm} 
        placeholder="Search for blogs..."
        class="border border-gray-300 rounded-lg py-2 px-4 mx-4 w-full md:w-2/3" 
      />

      <select 
        bind:value={selectedCategory} 
        class="border border-gray-300 rounded-lg py-2 px-4 w-full md:w-1/3"
      >
        {#each categories as category}
          <option value={category.id}>{category.name}</option>
        {/each}
      </select>
    </div>
  </section>

  <!-- blogs -->
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- No Blogs -->
      {#if displayedBlogs.length === 0}
        <p>There are no blogs. Please try again later</p>
      {/if}
      <!-- Blogs -->
       <!-- Comment -->
      {#each displayedBlogs as blog}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <img src={blog.image} alt={blog.title} class="w-full h-48 object-cover"> 
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{blog.title}</h3>
            <p class="text-gray-600 mb-2">{blog.date}</p>
            <div class="flex items-center justify-between">
              <Button on:click={viewBlog(blog)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Blog
              </Button>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section class="flex justify-center mt-8">
    <nav aria-label="Pagination">
      <ul class="inline-flex -space-x-px">
        {#if currentPage > 1}
          <li>
            <button 
              on:click={() => goToPage(currentPage - 1)} 
              class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Previous
            </button>
          </li>
        {/if}
        {#each Array.from({ length: totalPages }, (_, i) => i + 1) as page}
          <li>
            <button 
              on:click={() => goToPage(page)} 
              class={`px-3 py-2 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 
                      dark:border-gray-700 font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                      ${currentPage === page ? 'bg-gray-500 text-white' : 'bg-white dark:bg-gray-800'}`}
            >
              {page}
            </button>
          </li>
        {/each}
        {#if currentPage < totalPages}
          <li>
            <button 
              on:click={() => goToPage(currentPage + 1)} 
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
            </button>
          </li>
        {/if}
      </ul>
    </nav>
  </section>

</main>