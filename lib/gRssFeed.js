
import fs from 'fs';
import content from "../pages/blogposts.json";
import { Feed } from "feed";
export default async function getRSSFeed() {
    
  const siteURL = "https://aampipes.pk";
  const allBlogs = await content.posts; 

  const feed = new Feed({
    title: "Electric Conduit Pipes and Fittings Manufacturer in Pakistan",
    description: "AAM-Pipes is one of the best and leading manufacturers of electric conduit pipes, fittings, and ducts in Pakistan. We provide quality products at cheap prices.",
    id: siteURL,
    link: siteURL,
    language: "en",
    image: `${siteURL}/aam-pipes-logo.png`, 
    favicon:`${siteURL}/favicon.ico`,  
    copyright:  `All rights reserved ${new Date().getFullYear()}, aampipes.pk`,
    feedLinks: {
         rss2: `${siteURL}/feed.xml`,
         json: `${siteURL}/rss.json`,
         atom: `${siteURL}/atom.xml`,
    },
    generator: 'Getsol Inc.',
    updated: new Date(),
   
  });
  
  
  allBlogs.forEach(post => {
    feed.addItem({
      title: post.title,
      id: `${siteURL}/blog/${post.slug}`,
      link:`${siteURL}/blog/${post.slug}`,
      description: post.shortdescription,
      content: post.article,
      date: new Date(post.lastmod), 
      author: [
        {
          name: post.author,
          email: "hi@najam.me",
          link: "https://aampipes.pk"
        },
         
      ],      
     // date: post.date,
       image: `${siteURL}${post.featured_img}`, 
    });
  });
   
    fs.writeFileSync('./public/feed.xml', feed.rss2());
    fs.writeFileSync('./public/rss.json', feed.json1());
    fs.writeFileSync('./public/atom.xml', feed.atom1());
 

}