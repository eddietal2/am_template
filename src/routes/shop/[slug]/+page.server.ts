import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

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

export const load: PageServerLoad = async ({ params }) => {
	let slug = params.slug;
	let filteredProduct = await products.filter(product => {
		return product.id == Number(slug)
	});
	
	console.log('Filtered Product:', filteredProduct);
    console.clear();
    console.log('Slug', slug);
	
	return {filteredProduct};
};