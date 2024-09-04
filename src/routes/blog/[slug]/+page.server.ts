import type { PageServerLoad } from './$types';
import { blogPosts } from '../../../stores/blogStore';
import type { BlogPost } from '../../../stores/blogStore';

let blogInfo: BlogPost = {
    id: 0,
    title: '',
    date: '',
    category: '',
    image: '',
    link: '',
    text: ''
};

export const load: PageServerLoad = async ({ params }) => {

  // Match Blog (id) with Slug
  await blogPosts.subscribe((posts: any) => {
      console.log(posts);
      
      let slug = params.slug;

      let matchedBlog = posts.filter((post: BlogPost) => {
          let postID = String(post.id);
          return postID == slug
      });

      console.log('Blog Post Slug:', slug);
      console.log('Matched Blog:', matchedBlog[0].title);

      if(matchedBlog !== null) {
        blogInfo.id = matchedBlog[0].id
        blogInfo.title = matchedBlog[0].title
        blogInfo.date = matchedBlog[0].date
        blogInfo.category = matchedBlog[0].category
        blogInfo.image = matchedBlog[0].image
        blogInfo.link = matchedBlog[0].link
        blogInfo.text = matchedBlog[0].text
        return;
      } else {

        console.log('There was no match!');
        return;
      }
      
  })
  return { blogInfo };
  
};