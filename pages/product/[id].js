import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import MainHeader from "../../components/mainheader";
import data from "../../db/productdetails.json";
import React,{useState} from "react";
export default function Product() {
  const router = useRouter();
  const id = router.query.id;
  console.log({ id });
  const [selectedSize, setSelectedSize] = useState('m');
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
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

        <section className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
          <div className="mt-6 flex px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <div className="mt-10 hover:-translate-y-2  duration-300">
              <Image className="rounded-3xl" src={product.imageSrc} alt={product.imageAlt} width={392} height={428} />
            </div>
            <div className="mt-8 mx-auto flex flex-col rounded-lg shadow-lg overflow-hidden hover:-translate-y-2 duration-300 w-[40%]">
              <div className="items-center">
                <div className='ml-6 mt-6'>
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900">{product.name}</h1>
                </div>
                <div className="flex items-center ml-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    aria-hidden="true" className="text-amber-500 h-5 w-5 flex-shrink-0">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                    </path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="text-amber-500 h-5 w-5 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="text-amber-500 h-5 w-5 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="text-gray-300 h-5 w-5 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="text-gray-300 h-5 w-5 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                </div>
              </div>
              <div className="mt-6 text-justify"><div className="space-y-6 text-base text-gray-700"><p className='px-4 pb-4'>We offer low minimum order quantity and the best lead time. We have strict quality control checks to ensure customer satisfaction. Get your sportswear and activewear products manufactured conveniently and quickly. First, get your samples approved, once approved, they will go through the production process</p>
                <p className="px-4 pb-4">We aim to provide the best quality as per our customer expectations Digital Printing, Sublimation, Screen Printing, Emboss Printing, Metal Foil Printing, High-Density Printing, DTG Printing, Heat Transfer, Crackle Printing, Reflective Printing any Design As Per Requirement.</p></div>
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200 w-[90%] mx-auto">
                <div className="space-x-2 flex text-sm">
                  <label>
                    <input
                      className="sr-only peer"
                      name="size"
                      type="radio"
                      value="xs"
                      checked={selectedSize === 'xs'}
                      onChange={handleSizeChange}
                    />
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white ${selectedSize === 'xs' ? 'font-semibold bg-slate-900 text-white' : ''}`}>
                      XS
                    </div>
                  </label>
                  <label>
                    <input
                      className="sr-only peer"
                      name="size"
                      type="radio"
                      value="s"
                      checked={selectedSize === 's'}
                      onChange={handleSizeChange}
                    />
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center  hover:bg-slate-900 hover:text-white text-slate-700 ${selectedSize === 's' ? 'font-semibold bg-slate-900 text-white' : ''}`}>
                      S
                    </div>
                  </label>
                  <label>
                    <input
                      className="sr-only peer"
                      name="size"
                      type="radio"
                      value="m"
                      checked={selectedSize === 'm'}
                      onChange={handleSizeChange}
                    />
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center  hover:bg-slate-900 hover:text-white text-slate-700 ${selectedSize === 'm' ? 'font-semibold bg-slate-900 text-white' : ''}`}>
                      M
                    </div>
                  </label>
                  <label>
                    <input
                      className="sr-only peer"
                      name="size"
                      type="radio"
                      value="l"
                      checked={selectedSize === 'l'}
                      onChange={handleSizeChange}
                    />
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center  hover:bg-slate-900 hover:text-white text-slate-700 ${selectedSize === 'l' ? 'font-semibold bg-slate-900 text-white' : ''}`}>
                      L
                    </div>
                  </label>
                  <label>
                    <input
                      className="sr-only peer"
                      name="size"
                      type="radio"
                      value="xl"
                      checked={selectedSize === 'xl'}
                      onChange={handleSizeChange}
                    />
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center  hover:bg-slate-900 hover:text-white text-slate-700 ${selectedSize === 'xl' ? 'font-semibold bg-slate-900 text-white' : ''}`}>
                      XL
                    </div>
                  </label>
                </div>
              </div>
              <Link href="/cart"><button className="w-[90%] flex justify-center mx-auto py-1 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none  cursor-pointer mb-8"> Add to Cart</button></Link>
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
