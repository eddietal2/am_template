<script lang="ts">
    import { goto } from "$app/navigation";
    import { Button } from "flowbite-svelte";

  let searchTerm = '';
  let selectedCategory = 'all'; 

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'food', name: 'Food' },
    { id: 'toys', name: 'Toys' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'health', name: 'Health' }
  ];

  // Placeholder for product data
  let products = [
  {
    id: 1,
    name: 'Purrfect Play Mouse',
    category: 'toys',
    image: 'https://via.placeholder.com/300x200',
    price: 9.99,
    description: 'A realistic mouse toy that will keep your cat entertained for hours.',
    affiliateLink: 'https://www.example.com/purrfect-play-mouse'
  },
  {
    id: 2,
    name: 'Salmon & Tuna Feast',
    category: 'food',
    image: 'https://via.placeholder.com/300x200',
    price: 14.99,
    description: 'A delicious and nutritious wet food for your feline friend.',
    affiliateLink: 'https://www.example.com/salmon-tuna-feast'
  },
  {
    id: 3,
    name: 'Cozy Cat Condo',
    category: 'accessories',
    image: 'https://via.placeholder.com/300x200',
    price: 49.99,
    description: 'A multi-level cat condo with scratching posts and cozy hiding spots.',
    affiliateLink: 'https://www.example.com/cozy-cat-condo'
  },
  {
    id: 4,
    name: 'Hairball Remedy Paste',
    category: 'health',
    image: 'https://via.placeholder.com/300x200',
    price: 7.99,
    description: 'A tasty paste that helps prevent and eliminate hairballs.',
    affiliateLink: 'https://www.example.com/hairball-remedy-paste'
  },
  {
    id: 5,
    name: 'Feather Wand Teaser',
    category: 'toys',
    image: 'https://via.placeholder.com/300x200',
    price: 5.99,
    description: 'An interactive toy with colorful feathers to stimulate your cat\'s hunting instincts.',
    affiliateLink: 'https://www.example.com/feather-wand-teaser'
  },
  {
    id: 6,
    name: 'Chicken & Rice Dry Food',
    category: 'food',
    image: 'https://via.placeholder.com/300x200',
    price: 29.99,
    description: 'A high-quality dry food formulated for adult cats.',
    affiliateLink: 'https://www.example.com/chicken-rice-dry-food'
  },
  {
    id: 7,
    name: 'Self-Cleaning Litter Box',
    category: 'accessories',
    image: 'https://via.placeholder.com/300x200',
    price: 129.99,
    description: 'A convenient and hygienic litter box that automatically cleans itself.',
    affiliateLink: 'https://www.example.com/self-cleaning-litter-box'
  },
  {
    id: 8,
    name: 'Flea & Tick Collar',
    category: 'health',
    image: 'https://via.placeholder.com/300x200',
    price: 19.99,
    description: 'A long-lasting collar that protects your cat from fleas and ticks.',
    affiliateLink: 'https://www.example.com/flea-tick-collar'
  },
  {
    id: 9,
    name: 'Laser Pointer Toy',
    category: 'toys',
    image: 'https://via.placeholder.com/300x200',
    price: 12.99,
    description: 'A fun and interactive laser pointer toy to keep your cat active.',
    affiliateLink: 'https://www.example.com/laser-pointer-toy'
  },
  {
    id: 10,
    name: 'Tuna & Shrimp Gourmet Pâté',
    category: 'food',
    image: 'https://via.placeholder.com/300x200',
    price: 3.49,
    description: 'A gourmet wet food with a delectable blend of tuna and shrimp.',
    affiliateLink: 'https://www.example.com/tuna-shrimp-pate'
  },
  {
    id: 11,
    name: 'Ceramic Water Fountain',
    category: 'accessories',
    image: 'https://via.placeholder.com/300x200',
    price: 24.99,
    description: 'A stylish and hygienic water fountain to encourage your cat to drink more.',
    affiliateLink: 'https://www.example.com/ceramic-water-fountain'
  },
  {
    id: 12,
    name: 'Dental Chew Treats',
    category: 'health',
    image: 'https://via.placeholder.com/300x200',
    price: 6.99,
    description: 'Tasty treats that help reduce plaque and tartar buildup.',
    affiliateLink: 'https://www.example.com/dental-chew-treats'
  },
  {
    id: 13,
    name: 'Catnip-Filled Kick Stick',
    category: 'toys',
    image: 'https://via.placeholder.com/300x200',
    price: 4.99,
    description: 'A fun and stimulating kick stick filled with organic catnip.',
    affiliateLink: 'https://www.example.com/catnip-kick-stick'
  },
  {
    id: 14,
    name: 'Indoor Cat Grass Kit',
    category: 'food',
    image: 'https://via.placeholder.com/300x200',
    price: 8.99,
    description: 'A kit for growing fresh, healthy grass for your indoor cat.',
    affiliateLink: 'https://www.example.com/indoor-cat-grass-kit'
  },
  {
    id: 15,
    name: 'Window Perch with Suction Cups',
    category: 'accessories',
    image: 'https://via.placeholder.com/300x200',
    price: 17.99,
    description: 'A comfortable perch that attaches securely to any window.',
    affiliateLink: 'https://www.example.com/window-perch'
  },
  {
    id: 16,
    name: 'Probiotic Supplements for Cats',
    category: 'health',
    image: 'https://via.placeholder.com/300x200',
    price: 15.99,
    description: 'Probiotic supplements to support digestive health and immunity.',
    affiliateLink: 'https://www.example.com/probiotic-supplements'
  },
  {
    id: 17,
    name: 'Interactive Treat Puzzle',
    category: 'toys',
    image: 'https://via.placeholder.com/300x200',
    price: 19.99,
    description: 'A challenging puzzle that dispenses treats as your cat plays.',
    affiliateLink: 'https://www.example.com/treat-puzzle'
  },
  {
    id: 18,
    name: 'Grain-Free Salmon Cat Food',
    category: 'food',
    image: 'https://via.placeholder.com/300x200',
    price: 34.99,
    description: 'A premium grain-free cat food with real salmon as the first ingredient.',
    affiliateLink: 'https://www.example.com/grain-free-salmon-food'
  },
  {
    id: 19,
    name: 'Stylish Cat Carrier Backpack',
    category: 'accessories',
    image: 'https://via.placeholder.com/300x200',
    price: 59.99,
    description: 'A comfortable and fashionable backpack for carrying your cat.',
    affiliateLink: 'https://www.example.com/cat-carrier-backpack'
  },
  {
    id: 20,
    name: 'Calming Cat Spray',
    category: 'health',
    image: 'https://via.placeholder.com/300x200',
    price: 12.99,
    description: 'A natural spray to help reduce stress and anxiety in cats.',
    affiliateLink: 'https://www.example.com/calming-cat-spray'
  }
  ]

  function viewProduct(product: any) {
    console.log(product);
    let slug = product.id;
    goto(`/shop/${slug}`)
    return product;
  }

  // Pagination Logic
  let currentPage = 1;
  const productsPerPage = 6;

  $: startIndex = (currentPage - 1) * productsPerPage;
  $: endIndex = startIndex + productsPerPage;
  $: displayedProducts = filteredProducts.slice(startIndex, endIndex);

  function goToPage(page: number) {
    currentPage = page;

    // Scroll to the bottom of the page
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Optional: for a smooth scrolling animation
    });
}

 // Function to filter products based on search and category
  $: filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || product.category === selectedCategory)
  );

  $: totalPages = Math.ceil(filteredProducts.length / productsPerPage)


</script>

<main class="container mx-auto py-8 px-2">

  <!-- Search & Categories -->
  <section>
    <div class="flex flex-col md:flex-row items-center mb-6">
      <h1 class="page-header w-full">SHOP</h1>

      <input 
        type="text" 
        bind:value={searchTerm} 
        placeholder="Search for products..."
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

  <!-- Products -->
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each displayedProducts as product}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <img src={product.image} alt={product.name} class="w-full h-48 object-cover"> 
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{product.name}</h3>
            <p class="text-gray-600 mb-2">{product.description}</p>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-blue-500">${product.price}</span>
              <Button on:click={viewProduct(product)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Product
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