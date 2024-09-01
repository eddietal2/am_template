import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Placeholder for product data
let blogs = [
    {
      id: 1,
      name: 'The Benefits of Catnip for Your Feline Friend',
      category: 'cat behavior',
      image: 'https://via.placeholder.com/300x200',
      description: 'Explore the science behind catnip and how it can enrich your cat\'s life.',
      link: 'https://www.example.com/benefits-of-catnip',
      post: 'Catnip, also known as Nepeta cataria, is a plant that has a fascinating effect on most cats. It contains a chemical called nepetalactone, which triggers a euphoric response in felines. In this blog post, we\'ll delve into the science behind catnip\'s effects, explore its benefits for your cat\'s physical and mental well-being, and provide tips on how to use it safely and effectively.'
    },
    {
      id: 2,
      name: 'Choosing the Right Cat Food: A Comprehensive Guide',
      category: 'cat nutrition',
      image: 'https://via.placeholder.com/300x200',
      description: 'Learn how to select the best food for your cat\'s age, breed, and lifestyle.',
      link: 'https://www.example.com/choosing-cat-food',
      post: 'With countless cat food options available, it can be overwhelming to choose the right one for your furry friend. This comprehensive guide will walk you through the key factors to consider, including your cat\'s age, breed, activity level, and any specific dietary needs. We\'ll also discuss the different types of cat food, such as dry, wet, and raw, and help you decipher ingredient labels to make informed decisions about your cat\'s nutrition.'
    },
    {
      id: 3,
      name: 'Creating a Cat-Friendly Home: Tips and Tricks',
      category: 'cat care',
      image: 'https://via.placeholder.com/300x200',
      description: 'Discover simple ways to make your home a haven for your feline companion.',
      link: 'https://www.example.com/cat-friendly-home',
      post: 'Cats are natural explorers and need a stimulating environment to thrive. In this blog post, we\'ll share practical tips and tricks for creating a cat-friendly home. From providing vertical space with cat trees and shelves to creating cozy hiding spots and enriching their playtime, you\'ll learn how to design a space that caters to your cat\'s instincts and needs.'
    },
    {
      id: 4,
      name: 'Understanding and Preventing Hairballs in Cats',
      category: 'cat health',
      image: 'https://via.placeholder.com/300x200',
      description: 'Learn about the causes of hairballs and effective prevention strategies.',
      link: 'https://www.example.com/preventing-hairballs',
      post: 'Hairballs are a common problem for cats, but they can be uncomfortable and even lead to health issues if left unaddressed. This blog post will explain why cats get hairballs, discuss the signs and symptoms to watch for, and offer practical tips on how to prevent and manage hairballs, including grooming, diet, and lifestyle adjustments.'
    },
    {
      id: 5,
      name: 'Enriching Your Cat\'s Life with Playtime',
      category: 'cat behavior',
      image: 'https://via.placeholder.com/300x200',
      description: 'Discover engaging games and activities to keep your cat entertained and happy.',
      link: 'https://www.example.com/cat-playtime',
      post: 'Playtime is essential for your cat\'s physical and mental well-being. It provides exercise, stimulates their natural instincts, and strengthens the bond between you and your feline friend. In this blog post, we\'ll explore a variety of fun and interactive games and activities that you can enjoy with your cat, from classic toys like feather wands and laser pointers to DIY creations and puzzle feeders.'
    },
    {
      id: 6,
      name: 'The Importance of Dental Care for Cats',
      category: 'cat health',
      image: 'https://via.placeholder.com/300x200',
      description: 'Learn how to maintain your cat\'s oral hygiene and prevent dental problems.',
      link: 'https://www.example.com/cat-dental-care',
      post: 'Just like humans, cats need regular dental care to prevent plaque buildup, gum disease, and other oral health issues. This blog post will guide you through the basics of feline dental care, including brushing techniques, dental treats and toys, and signs of dental problems to watch for. We\'ll also discuss the importance of professional dental cleanings and how to make them a positive experience for your cat.'
    },
    {
      id: 7,
      name: 'Litter Box Training: A Step-by-Step Guide',
      category: 'cat care',
      image: 'https://via.placeholder.com/300x200',
      description: 'Master the art of litter box training for a clean and happy home.',
      link: 'https://www.example.com/litter-box-training',
      post: 'Litter box training is a crucial aspect of cat ownership, but it doesn\'t have to be a struggle. This step-by-step guide will provide you with proven techniques and tips for successfully litter box training your kitten or adult cat. We\'ll cover everything from choosing the right litter box and litter to troubleshooting common problems and ensuring a positive experience for both you and your cat.'
    },
    {
      id: 8,
      name: 'Protecting Your Cat from Fleas and Ticks',
      category: 'cat health',
      image: 'https://via.placeholder.com/300x200',
      description: 'Effective strategies for preventing and treating fleas and ticks in cats.',
      link: 'https://www.example.com/flea-tick-prevention',
      post: 'Fleas and ticks can cause discomfort, skin irritation, and even transmit diseases to your cat. This blog post will provide you with a comprehensive overview of flea and tick prevention and treatment options. We\'ll discuss various products like spot-on treatments, oral medications, and collars, as well as natural alternatives. You\'ll also learn how to identify signs of infestation and take steps to protect your home and other pets.'
    },
    {
      id: 9,
      name: 'Decoding Your Cat\'s Body Language',
      category: 'cat behavior',
      image: 'https://via.placeholder.com/300x200',
      description: 'Learn to understand your cat\'s subtle cues and communication signals.',
      link: 'https://www.example.com/cat-body-language',
      post: 'Cats communicate through a complex language of body postures, vocalizations, and facial expressions. Understanding these signals can help you better connect with your cat, anticipate their needs, and strengthen your bond. In this blog post, we\'ll decode common cat body language cues, from tail positions and ear movements to purrs and meows, empowering you to become a fluent speaker of "cat."'
    },
    {
      id: 10,
      name: 'Homemade Cat Treats: Easy and Healthy Recipes',
      category: 'cat nutrition',
      image: 'https://via.placeholder.com/300x200',
      description: 'Delight your cat with these simple and nutritious homemade treats.',
      link: 'https://www.example.com/homemade-cat-treats',
      post: 'Show your cat some love with these easy and healthy homemade treat recipes! These delicious snacks are made with wholesome ingredients and are sure to please even the pickiest feline palate. From savory tuna bites to crunchy chicken and rice cookies, you\'ll find a variety of options to spoil your cat while keeping their health in mind.'
    },
];

export const load: PageServerLoad = async ({ params }) => {
	let slug = params.slug;
	let filteredBlog = await blogs.filter(blog => {
		return blog.id == Number(slug)
	});
	
	console.log('Filtered Blog:', filteredBlog);
    console.clear();
    console.log('Slug', slug);
	
	return {filteredBlog};
};