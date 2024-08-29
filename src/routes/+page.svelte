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
  <!-- Hero Section -->
  <section 
    class="bg-white p-2"> 
    <h1 class="text-2xl font-bold">Welcome to Pet Care Direct!</h1>
    <p class="text-lg">Find everything your furry friend needs to live a happy, healthy life.</p>
    <img src="https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg" alt="" srcset="">
  </section>
  
  <!-- Categories -->
  <section class="bg-gray-201 container mx-auto py-8 mt-16">
      <h2 class="text-5xl font-bold mb-6">Shop by Category</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white text-center rounded-lg shadow p-4">
          <h3 class="text-3xl font-semibold mb-2">Food</h3>
        </div>
        <div class="bg-white text-center rounded-lg shadow p-4">
          <h3 class="text-3xl font-semibold mb-2">Litter</h3>
        </div>
        <div class="bg-white text-center rounded-lg shadow p-4">
          <h3 class="text-3xl font-semibold mb-2">Clearning</h3>
        </div>
        <div class="bg-white text-center rounded-lg shadow p-4">
          <h3 class="text-3xl font-semibold mb-2">Accessories</h3>
        </div>
      </div>
  </section>

  <!-- Products -->
  <section class="bg-gray-301 container mx-auto py-8 mt-16">
      <h2 class="text-5xl font-bold mb-6">Featured Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <img src="https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg" alt="Product Name" class="w-full h-48 object-cover"> 
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Product Name</h3>
            <p class="text-gray-600 mb-2">Brief product description highlighting key features and benefits</p>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-blue-500">$Price</span>
              <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Product
              </a>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <img src="https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg" alt="Product Name" class="w-full h-48 object-cover"> 
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Product Name</h3>
            <p class="text-gray-600 mb-2">Brief product description highlighting key features and benefits</p>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-blue-500">$Price</span>
              <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Product
              </a>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <img src="https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg" alt="Product Name" class="w-full h-48 object-cover"> 
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Product Name</h3>
            <p class="text-gray-600 mb-2">Brief product description highlighting key features and benefits</p>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-blue-500">$Price</span>
              <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Product
              </a>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <img src="https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg" alt="Product Name" class="w-full h-48 object-cover"> 
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Product Name</h3>
            <p class="text-gray-600 mb-2">Brief product description highlighting key features and benefits</p>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-blue-500">$Price</span>
              <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Product
              </a>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <img src="https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg" alt="Product Name" class="w-full h-48 object-cover"> 
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Product Name</h3>
            <p class="text-gray-600 mb-2">Brief product description highlighting key features and benefits</p>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-blue-500">$Price</span>
              <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Product
              </a>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <img src="https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg" alt="Product Name" class="w-full h-48 object-cover"> 
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Product Name</h3>
            <p class="text-gray-600 mb-2">Brief product description highlighting key features and benefits</p>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-blue-500">$Price</span>
              <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Product
              </a>
            </div>
          </div>
        </div>
      </div>
  </section>

  <!-- Blogs -->
  <section class="bg-gray-401 container mx-auto py-8 mt-16">
    <h2 class="text-5xl font-bold mb-6">Featured Blogs</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
        <img src="https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg" alt="Product Name" class="w-full h-48 object-cover"> 
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">Product Name</h3>
          <p class="text-gray-600 mb-2">Brief product description highlighting key features and benefits</p>
          <div class="flex items-center justify-between">
            <span class="text-lg font-bold text-blue-500">$Price</span>
            <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Product
            </a>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
        <img src="https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg" alt="Product Name" class="w-full h-48 object-cover"> 
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">Product Name</h3>
          <p class="text-gray-600 mb-2">Brief product description highlighting key features and benefits</p>
          <div class="flex items-center justify-between">
            <span class="text-lg font-bold text-blue-500">$Price</span>
            <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Product
            </a>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
        <img src="https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg" alt="Product Name" class="w-full h-48 object-cover"> 
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">Product Name</h3>
          <p class="text-gray-600 mb-2">Brief product description highlighting key features and benefits</p>
          <div class="flex items-center justify-between">
            <span class="text-lg font-bold text-blue-500">$Price</span>
            <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Product
            </a>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
        <img src="https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg" alt="Product Name" class="w-full h-48 object-cover"> 
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">Product Name</h3>
          <p class="text-gray-600 mb-2">Brief product description highlighting key features and benefits</p>
          <div class="flex items-center justify-between">
            <span class="text-lg font-bold text-blue-500">$Price</span>
            <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Product
            </a>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
        <img src="https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg" alt="Product Name" class="w-full h-48 object-cover"> 
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">Product Name</h3>
          <p class="text-gray-600 mb-2">Brief product description highlighting key features and benefits</p>
          <div class="flex items-center justify-between">
            <span class="text-lg font-bold text-blue-500">$Price</span>
            <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Product
            </a>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
        <img src="https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg" alt="Product Name" class="w-full h-48 object-cover"> 
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">Product Name</h3>
          <p class="text-gray-600 mb-2">Brief product description highlighting key features and benefits</p>
          <div class="flex items-center justify-between">
            <span class="text-lg font-bold text-blue-500">$Price</span>
            <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Product
            </a>
          </div>
        </div>
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