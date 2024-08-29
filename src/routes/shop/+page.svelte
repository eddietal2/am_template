<script lang="ts">
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
      name: 'Purrfect Play Mouse',
      category: 'toys',
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
      price: 9.99,
      description: 'A realistic mouse toy that will keep your cat entertained for hours.',
      affiliateLink: 'https://www.example.com/purrfect-play-mouse' // Replace with your affiliate link
    },
    {
      name: 'Salmon & Tuna Feast',
      category: 'food',
      image: 'https://via.placeholder.com/300x200',
      price: 14.99,
      description: 'A delicious and nutritious wet food for your feline friend.',
      affiliateLink: 'https://www.example.com/salmon-tuna-feast'
    },
    {
      name: 'Cozy Cat Condo',
      category: 'accessories',
      image: 'https://via.placeholder.com/300x200',
      price: 49.99,
      description: 'A multi-level cat condo with scratching posts and cozy hiding spots.',
      affiliateLink: 'https://www.example.com/cozy-cat-condo'
    },
    {
      name: 'Hairball Remedy Paste',
      category: 'health',
      image: 'https://via.placeholder.com/300x200',
      price: 7.99,
      description: 'A tasty paste that helps prevent and eliminate hairballs.',
      affiliateLink: 'https://www.example.com/hairball-remedy-paste'
    },
    // Add more products as needed
  ];

  // Function to filter products based on search and category
  $: filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || product.category === selectedCategory)
  );
</script>

<main class="container mx-auto py-8">

  <section>

    <div class="flex flex-col md:flex-row items-center mb-6">
      <h1 class="jersey-font page-header">SHOP</h1>

      <input 
        type="text" 
        bind:value={searchTerm} 
        placeholder="Search for products..."
        class="border border-gray-300 rounded-lg py-2 px-4 mx-4 w-full md:w-1/3" 
      />

      <select 
        bind:value={selectedCategory} 
        class="border border-gray-300 rounded-lg py-2 px-4 w-full md:w-1/5"
      >
        {#each categories as category}
          <option value={category.id}>{category.name}</option>
        {/each}
      </select>
    </div>
  </section>

  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each filteredProducts as product}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <img src={product.image} alt={product.name} class="w-full h-48 object-cover"> 
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{product.name}</h3>
            <p class="text-gray-600 mb-2">{product.description}</p>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-blue-500">${product.price}</span>
              <a href={product.affiliateLink} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Product
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>

</main>