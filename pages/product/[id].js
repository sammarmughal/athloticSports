import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image"; // Make sure Image is imported
import { fetchProducts } from "../../lib/data";
import MainHeader from "../../components/mainheader";
import React, { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const products = await fetchProducts();
    const product = products.find((product) => product.id.toString() === id) || null;
    return { props: { product } };
  } catch (error) {
    console.error("Error fetching product:", error);
    return { props: { product: null } };
  }
}

export default function Product({ product }) {
  const router = useRouter();
  const id = router.query.id;
  const [selectedSize, setSelectedSize] = useState("m");

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=5, shrink-to-fit=no" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="generator" content="Getsol Inc." />
        <title>{product.title}</title>
        <meta name="title" content={product.detail} />
        <meta
          name="description"
          content="Leading manufacturers of top-tier soccer uniforms for athletes. Explore our premium athletic sports apparel collection today."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Sardar Imran" />
        <meta itemProp="name" content={product.detail} />
        <meta name="twitter:title" content={product.detail} />
        <meta
          name="twitter:description"
          content="Leading manufacturers of top-tier soccer uniforms for athletes. Explore our premium athletic sports apparel collection today."
        />
        <meta name="twitter:image:src" content="/images/logo-athlotic.png" />
        <meta property="og:title" content={product.detail} />
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
      <MainHeader pageHeading={product.name} />
      <section className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <div className="mt-6 flex px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <div className="mt-10 hover:-translate-y-2  duration-300">
            <Image className="rounded-3xl" src={product.imageSrc} alt={product.imageAlt} width={392} height={428} />
          </div>
          <div className="mt-8 mx-auto flex flex-col rounded-lg shadow-lg overflow-hidden hover:-translate-y-2 duration-300 w-[40%]">
            <div className="items-center">
              <div className="ml-6 mt-6">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">{product.name}</h1>
              </div>
              <div className="flex items-center ml-6">
                {/* Rating stars */}
              </div>
            </div>
            <div className="mt-6 text-justify">
              <div className="space-y-6 text-base text-gray-700">
                <p className="px-4 pb-4">{product.description}</p>
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200 w-[90%] mx-auto">
              <div className="space-x-2 flex text-sm">
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="xs"
                    checked={selectedSize === "xs"}
                    onChange={handleSizeChange}
                  />
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white ${
                      selectedSize === "xs" ? "font-semibold bg-slate-900 text-white" : ""
                    }`}
                  >
                    XS
                  </div>
                </label>
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="s"
                    checked={selectedSize === "s"}
                    onChange={handleSizeChange}
                  />
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center  hover:bg-slate-900 hover:text-white text-slate-700 ${
                      selectedSize === "s" ? "font-semibold bg-slate-900 text-white" : ""
                    }`}
                  >
                    S
                  </div>
                </label>
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="m"
                    checked={selectedSize === "m"}
                    onChange={handleSizeChange}
                  />
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center  hover:bg-slate-900 hover:text-white text-slate-700 ${
                      selectedSize === "m" ? "font-semibold bg-slate-900 text-white" : ""
                    }`}
                  >
                    M
                  </div>
                </label>
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="l"
                    checked={selectedSize === "l"}
                    onChange={handleSizeChange}
                  />
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center  hover:bg-slate-900 hover:text-white text-slate-700 ${
                      selectedSize === "l" ? "font-semibold bg-slate-900 text-white" : ""
                    }`}
                  >
                    L
                  </div>
                </label>
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="xl"
                    checked={selectedSize === "xl"}
                    onChange={handleSizeChange}
                  />
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center  hover:bg-slate-900 hover:text-white text-slate-700 ${
                      selectedSize === "xl" ? "font-semibold bg-slate-900 text-white" : ""
                    }`}
                  >
                    XL
                  </div>
                </label>
              </div>
            </div>
            <Link href="/cart">
              <button className="w-[90%] flex justify-center mx-auto py-1 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none  cursor-pointer mb-8">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
