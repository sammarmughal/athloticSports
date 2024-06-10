import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import MainHeader from "../../components/mainheader";
import Head from "next/head";
import content from '../blogposts.json';
import getRSSFeed from "../../lib/gRssFeed";
export default function blogPosts() {


  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=5, shrink-to-fit=no"
          name="viewport"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="generator" content="Getsol Inc." />
        <title>Latest Blog Posts - Read Now on Our Website</title>
        <meta name="title" content="Latest Blog Posts - Read Now on Our Website" />
        <meta name="description" content="Stay informed and up-to-date with our latest blog posts. Explore a wide range of topics, from industry news to expert insights. Read now on our website." />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="Stay informed and up-to-date with our latest blog posts. Explore a wide range of topics, from industry news to expert insights. Read now on our website." />
        <meta itemProp="image" content="https://aampipes.pk/_next/image?url=%2Fimages%2Faam-pipes-logo.png&w=128&q=75" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Latest Blog Posts - Read Now on Our Website" />
        <meta name="twitter:description" content="Stay informed and up-to-date with our latest blog posts. Explore a wide range of topics, from industry news to expert insights. Read now on our website." />
        <meta name="twitter:image:src" content="https://aampipes.pk/_next/image?url=%2Fimages%2Faam-pipes-logo.png&w=128&q=75" />
        <meta property="og:title" content="Latest Blog Posts - Read Now on Our Website" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://aampipes.pk/_next/image?url=%2Fimages%2Fslides%2Fslide-2.jpg&w=1920&q=75" />
        <meta property="og:description" content="" />
        <meta property="og:locale" content="en" />
        <meta itemProp="image" content="https://aampipes.pk/_next/image?url=%2Fimages%2Fslides%2Fslide-2.jpg&w=1920&q=75" />
        <link rel="canonical" href="https://aampipes.pk/blog" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader
        pageHeading="Blog & Updates"
        pageImg="hdr-4.jpg"
      />

      <section className="main-sec container mx-auto pb-10">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4">

          {content.posts.map(post =>

            <div
              key={post.slug}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:-translate-y-2 duration-300"
            >
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  width={400}
                  height={300}
                  src={post.featured_img}
                  alt="Najam Awan Image"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600 capitalize">
                    {post.category}
                  </p>
                  <a href={"blog/" + post.slug} className="block mt-2">
                    <p className="text-base sm:text-xl font-semibold text-gray-900 hover:text-blue-600">
                      {post.title}
                    </p>
                  </a>
                  <p className="mt-3 text-sm sm:text-base text-gray-500">
                    {post.shortdescription}
                  </p>

                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">

                    <span className="sr-only">{post.author}</span>
                    <Image
                      className="h-10 w-10 rounded-full"
                      src={post.authorpic}
                      alt="Najam Awan Image"
                      width={100}
                      height={100}
                    />

                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {post.author}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


        </div>
      </section>
    </>
  );
}
export async function getStaticProps() {

  await getRSSFeed();
  return {
    props: {

    },
  }

}