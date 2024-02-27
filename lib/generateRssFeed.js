import { writeFileSync } from "fs";
import content from "../pages/blogposts.json";

import RSS from "rss";
 
export default async function getRSS() {
    
  const siteURL = "https://aampipes.pk";
  const allBlogs = await content.posts; 
  const feed = new RSS({
    title: "Electric Conduit Pipes and Fittings Manufacturer in Pakistan",
    description: "AAM-Pipes is one of the best and leading manufacturers of electric conduit pipes, fittings, and ducts in Pakistan. We provide quality products at cheap prices.",
    site_url: siteURL,
    feed_url: `${siteURL}/feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, aampipes.pk`,
  });
 
  // function makedate(dated){   
    
  //     var year  = dated.year;    var day  = (dated.dayOfMonth < 10 ? '0':'') + dated.dayOfMonth;    
  //     var month  = ((dated.month+1) < 10 ? '0':'') + (dated.month+1);      
  //      var dt =  year+"-"+month+"-"+day;
  //     return dt; 
  // } 
 
  
  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `${siteURL}/${post.slug}`,
      date: post.lastmod,
      description: post.shortdescription,
    });
  });
   
  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}