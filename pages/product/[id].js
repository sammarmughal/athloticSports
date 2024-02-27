import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import MainHeader from "../../components/mainheader";
import data from "../../db/productdetails.json";

export default function Product() {
  const router = useRouter();
  const id = router.query.id;
  console.log({ id });

  const product = data.products.find((product) => product.id === Number(id));
  console.log({ product });
  return (
    <>
      <div>
      <Head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=5, shrink-to-fit=no"
          name="viewport"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="generator" content="Getsol Inc." />
        <title>
        {product.title}
        </title>
        <meta
          name="title"
          content={product.detail}
        />
        <meta
          name="description"
          content="Leading manufacturers of top-tier soccer uniforms for athletes. Explore our premium athletic sports apparel collection today."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Sardar Imran" />
        <meta
          itemProp="name"
          content={product.detail}
        />

        <meta
          name="twitter:title"
          content={product.detail}
        />
        <meta
          name="twitter:description"
          content="Leading manufacturers of top-tier soccer uniforms for athletes. Explore our premium athletic sports apparel collection today."
        />
        <meta name="twitter:image:src" content="/images/logo-athlotic.png" />
        <meta
          property="og:title"
          content={product.detail}
        />
        <meta property="og:type" content="article" />

        <meta
          property="og:description"
          content={product.shortdescription}
        />
        <meta property="og:locale" content="en" />
        <meta itemProp="image" content="/images/logo-athlotic.png" />

        <link rel="canonical" href="https://athlotic.com/soccer" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>
      <MainHeader pageHeading={product.name}/>
        {/* <h1>Single Product Page</h1>
        <code>{JSON.stringify(product)}</code> */}
        <section className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
         
          <div class="mt-6 flex px-4 sm:mt-16 sm:px-0 lg:mt-0">


            <div className="mt-10 hover:-translate-y-2 duration-300">
              <img src={product.imageSrc} alt={product.imageAlt} width={392} height={428} />
            </div>

            <div class="mt-8 mx-auto flex flex-col rounded-lg shadow-lg overflow-hidden hover:-translate-y-2 duration-300 w-[40%]">
              <div class="items-center">

                <div className='ml-6 mt-6'>
                  <h1 class="text-2xl font-bold tracking-tight text-gray-900">{product.name}</h1>
                </div>
                <div class="flex items-center ml-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    aria-hidden="true" class="text-amber-500 h-5 w-5 flex-shrink-0">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                    </path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-amber-500 h-5 w-5 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-amber-500 h-5 w-5 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-gray-300 h-5 w-5 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-gray-300 h-5 w-5 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                </div>
              </div>
              <div class="mt-6 text-justify"><div class="space-y-6 text-base text-gray-700"><p className='px-4 pb-4'>We offer low minimum order quantity and the best lead time. We have strict quality control checks to ensure customer satisfaction. Get your sportswear and activewear products manufactured conveniently and quickly. First, get your samples approved, once approved, they will go through the production process</p>
               <p className="px-4 pb-4">We aim to provide the best quality as per our customer expectations Digital Printing, Sublimation, Screen Printing, Emboss Printing, Metal Foil Printing, High-Density Printing, DTG Printing, Heat Transfer, Crackle Printing, Reflective Printing any Design As Per Requirement.</p></div>
              </div>
              <Link href="/contact-us"

                className="max-w-xs flex-1 h-10 mx-auto my-6 bg-gradient-to-r from-yellow-500 to-blue-600 hover:from-blue-600 hover:to-yellow-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-lg font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500 sm:w-full"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export async function getStaticPaths() {

  const paths = data.products.map((product) => {
    const slug = product.id.toString();
    return { params: { id: slug } };
  });
  console.log(paths)
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log(params)
  const currentPath = params.id;
  console.log(currentPath);
  const product = data.products.find((product) => product.id.toString() === currentPath)
    || {
    notfound: true,
  };
  return { props: { product } };
}


// export default function ProductDetail({ product }) {
//     let [categories] = useState({
//         BASEBALL: [
//             {
//                 id: 1,
//                 name: "Baseball Uniform Sample Product 1",
//                 detail: "Customize Your \Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/1.webp",
//                 imageAlt: "\Baseball Uniform",
//                 features: "High Quality Wear",

//             },
//             {
//                 id: 2,
//                 name: "Baseball Uniform Sample Product 2",
//                 detail: "Customize Your Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/2.webp",
//                 imageAlt: "Baseball Uniform",
//                 features: "High Quality Wear",
//                 onClick: "\product/[productid]"

//             },
//             {
//                 id: 3,
//                 name: "Baseball Uniform Sample Product 3",
//                 detail: "Customize Your Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/3.webp",
//                 imageAlt: "Baseball Uniform",
//                 features: "High Quality Wear",

//             },
//             {
//                 id: 4,
//                 name: "Baseball Uniform Sample Product 4",
//                 detail: "Customize Your Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/4.webp",
//                 imageAlt: "Baseball Uniform",
//                 features: "High Quality Wear",

//             },
//             {
//                 id: 5,
//                 name: "Baseball Uniform Sample Product 5",
//                 detail: "Customize Your Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/5.webp",
//                 imageAlt: "Baseball Uniform",
//                 features: "High Quality Wear",

//             },
//             {
//                 id: 6,
//                 name: "Baseball Uniform Sample Product 6",
//                 detail: "Customize Your Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/6.webp",
//                 imageAlt: "Baseball Uniform",
//                 features: "High Quality Wear",

//             },
//             {
//                 id: 7,
//                 name: "Baseball Uniform Sample Product 7",
//                 detail: "Customize Your Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/7.webp",
//                 imageAlt: "Baseball Uniform",
//                 features: "High Quality Wear",

//             },
//             {
//                 id: 8,
//                 name: "Baseball Uniform Sample Product 8",
//                 detail: "Customize Your Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/8.webp",
//                 imageAlt: "Baseball Uniform",
//                 features: "High Quality Wear",

//             },
//             {
//                 id: 9,
//                 name: "Baseball Uniform Sample Product 9",
//                 detail: "Customize Your Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/9.webp",
//                 imageAlt: "Baseball Uniform",
//                 features: "High Quality Wear",

//             },
//             {
//                 id: 10,
//                 name: "Baseball Uniform Sample Product 10",
//                 detail: "Customize Your Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/10.webp",
//                 imageAlt: "Baseball Uniform",
//                 features: "High Quality Wear",

//             },
//             {
//                 id: 11,
//                 name: "Baseball Uniform Sample Product 11",
//                 detail: "Customize Your Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/11.webp",
//                 imageAlt: "Baseball Uniform",
//                 features: "High Quality Wear",

//             },
//             {
//                 id: 12,
//                 name: "Baseball Uniform Sample Product 12",
//                 detail: "Customize Your Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/12.webp",
//                 imageAlt: "Baseball Uniform",
//                 features: "High Quality Wear",

//             },
//             {
//                 id: 13,
//                 name: "Baseball Uniform Sample Product 13",
//                 detail: "Customize Your Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/13.webp",
//                 imageAlt: "Baseball Uniform",
//                 features: "High Quality Wear",

//             },
//             {
//                 id: 14,
//                 name: "Baseball Uniform Sample Product 14",
//                 detail: "Customize Your Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/14.webp",
//                 imageAlt: "Baseball Uniform",
//                 features: "High Quality Wear",

//             },
//             {
//                 id: 15,
//                 name: "Baseball Uniform Sample Product 15",
//                 detail: "Customize Your Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/15.webp",
//                 imageAlt: "Baseball Uniform",
//                 features: "High Quality Wear",

//             },
//             {
//                 id: 16,
//                 name: "Baseball Uniform Sample Product 16",
//                 detail: "Customize Your Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/16.webp",
//                 imageAlt: "Baseball Uniform",
//                 features: "High Quality Wear",

//             },
//             {
//                 id: 17,
//                 name: "Baseball Uniform Sample Product 17",
//                 detail: "Customize Your Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/17.webp",
//                 imageAlt: "Baseball Uniform",
//                 features: "High Quality Wear",

//             },
//             {
//                 id: 18,
//                 name: "Baseball Uniform Sample Product 18",
//                 detail: "Customize Your Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/18.webp",
//                 imageAlt: "Baseball Uniform",
//                 features: "High Quality Wear",

//             },
//             {
//                 id: 19,
//                 name: "Baseball Uniform Sample Product 19",
//                 detail: "Customize Your Baseball Dress and order in bulk",
//                 imageSrc: "/images/products/baseball/19.webp",
//                 imageAlt: "Baseball Uniform",
//                 features: "High Quality Wear",

//             },

//         ],
//     });

//     const router = useRouter();

//     if (router.isFallback) {
//         return <div>Loading...</div>;
//     }
//     return (
//         <>
//             <Head>
//                 <meta charSet="utf-8" />
//                 <meta
//                     content="width=device-width, initial-scale=1.0, maximum-scale=5, shrink-to-fit=no"
//                     name="viewport"
//                 />
//                 <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
//                 <meta name="generator" content="Getsol Inc." />
//                 <title>{`${post.title}`}</title>
//                 <meta name="title" content={post.title} />
//                 <meta name="description" content={post.shortdescription} />
//                 <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
//                 <meta name="robots" content="index, follow" />
//                 <meta name="revisit-after" content="1 days" />
//                 <meta name="author" content="Najam Awan" />
//                 <meta itemProp="name" content={post.title} />
//                 <meta itemProp="image" content={post.featured_img} />
//                 <meta name="twitter:card" content="summary" />
//                 <meta name="twitter:title" content={post.title} />
//                 <meta name="twitter:description" content={post.shortdescription} />
//                 <meta name="twitter:image:src" content={post.featured_img} />
//                 <meta property="og:title" content={post.title} />
//                 <meta property="og:type" content="article" />
//                 <meta property="og:image" content={post.featured_img} />
//                 <meta property="og:description" content={post.shortdescription} />
//                 <meta property="og:locale" content="en" />
//                 <meta itemProp="image" content={post.featured_img} />
//                 <link
//                     rel="canonical"
//                     href={"https://aampipes.pk/blog/" + post.slug}
//                 />
//                 <link rel="preconnect" href="//www.google-analytics.com" as="script" />
//                 <meta name="google" content="notranslate" />
//             </Head>
//             <section>
//                 <div class="mt-10 flex px-4 sm:mt-16 sm:px-0 lg:mt-0">

//                     {categories.map(product => {

//                         <div>
//                             <img src={product.imageSrc} alt={product.imageAlt} />
//                         </div>
//                     }
//                     )}
//                     <div className='ml-6'>
//                         <h1 class="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
//                     </div>
//                     <div class="mt-36 flex flex-col rounded-lg shadow-lg overflow-hidden hover:-translate-y-2 duration-300 w-[35%]">
//                         <div class="flex items-center">
//                             <div class="flex items-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
//                                     aria-hidden="true" class="text-amber-500 h-5 w-5 flex-shrink-0">
//                                     <path stroke-linecap="round" stroke-linejoin="round"
//                                         d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
//                                     </path>
//                                 </svg>
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-amber-500 h-5 w-5 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-amber-500 h-5 w-5 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-gray-300 h-5 w-5 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-gray-300 h-5 w-5 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
//                             </div>
//                         </div>
//                         <div class="mt-6 text-justify"><div class="space-y-6 text-base text-gray-700"><p className='px-4 pb-4'>We offer low minimum order quantity and the best lead time. We have strict quality control checks to ensure customer satisfaction. Get your sportswear and activewear products manufactured conveniently and quickly. First, get your samples approved, once approved, they will go through the production process</p>
//                         </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export async function getStaticPaths() {
//     // Make sure content exists and has the products property
//     const paths =
//         content && Array.isArray(content.products)
//             ? content.products.map((product) => ({
//                 params: { slug: product.slug },
//             }))
//             : [];

//     return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//     const currentPath = `${params.slug}`;

//     if (!content || !content.products || !Array.isArray(content.products)) {
//         return { props: { product: { notfound: true } } };
//     }

//     const product = content.products.find((product) => product.slug === currentPath);

//     if (!product) {
//         return { props: { product: { notfound: true } } };
//     }

//     return { props: { product } };
// }
