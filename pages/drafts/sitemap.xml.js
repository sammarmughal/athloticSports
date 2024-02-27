import content from "./blogposts.json"; 
function generateSiteMap(posts) {
  

  return `<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="/images/main-sitemap.xsl"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   
<url>
<loc>https://aampipes.pk/</loc>
<lastmod>2023-07-22</lastmod>
<priority>1.00</priority>
</url>
<url>
<loc>https://aampipes.pk/products</loc>
<lastmod>2023-01-22</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://aampipes.pk/free-sample</loc>
<lastmod>2023-07-22</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://aampipes.pk/online-quote</loc>
<lastmod>2023-07-22</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://aampipes.pk/about</loc>
<lastmod>2023-07-22</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://aampipes.pk/contact-us</loc>
<lastmod>2023-07-22</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://aampipes.pk/aampipes.pdf</loc>
<lastmod>2023-07-17</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://aampipes.pk/upvc-conduit-pipes</loc>
<lastmod>2023-07-22</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://aampipes.pk/electric-cable-ducts</loc>
<lastmod>2023-07-22</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://aampipes.pk/upvc-bends-sockets</loc>
<lastmod>2023-07-22</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://aampipes.pk/electric-fittings</loc>
<lastmod>2023-07-22</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://aampipes.pk/privacy-policy</loc>
<lastmod>2023-01-17</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://aampipes.pk/disclaimer</loc>
<lastmod>2023-01-17</lastmod>
<priority>0.80</priority>
</url>

     ${posts
       .map(({ slug,lastmod }) => {
         return `
       <url>
       <loc>${`https://aampipes.pk/blog/${slug}`}</loc>
       <lastmod>${`${lastmod}`}</lastmod>
       </url> 
     `;
       })
       .join("")}
       
   </urlset>

 `;
}
function SiteMap() {}
export async function getServerSideProps({ res }) {
  const posts = content.posts; 
 // const fleet = contentfleet.fleet;   
  const sitemap = generateSiteMap(posts);  
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
}

export default SiteMap;
