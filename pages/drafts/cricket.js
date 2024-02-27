import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import { NextSeo } from "next-seo";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { useEffect } from "react";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function productDetailfitting() {
  let [categories] = useState({
    CRICKET: [
      {
        id: 1,
        name: "Cricket Uniform Sample Product 1",
        detail: "Customize Your \Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/1.webp",
        imageAlt: "\Cricket Uniform",
        features: "High Quality Wear",

      },
      {
        id: 2,
        name: "Cricket Uniform Sample Product 2",
        detail: "Customize Your \Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/2.webp",
        imageAlt: "\Cricket Uniform",
        features: "High Quality Wear",

      },
      {
        id: 3,
        name: "Cricket Uniform Sample Product 3",
        detail: "Customize Your \Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/3.webp",
        imageAlt: "\Cricket Uniform",
        features: "High Quality Wear",

      },
      {
        id: 4,
        name: "Cricket Uniform Sample Product 4",
        detail: "Customize Your \Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/4.webp",
        imageAlt: "\Cricket Uniform",
        features: "High Quality Wear",

      },
      {
        id: 5,
        name: "Cricket Uniform Sample Product 5",
        detail: "Customize Your \Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/5.webp",
        imageAlt: "\Cricket Uniform",
        features: "High Quality Wear",

      },
      {
        id: 6,
        name: "Cricket Uniform Sample Product 6",
        detail: "Customize Your \Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/6.webp",
        imageAlt: "\Cricket Uniform",
        features: "High Quality Wear",

      },
      {
        id: 7,
        name: "Cricket Uniform Sample Product 7",
        detail: "Customize Your \Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/7.webp",
        imageAlt: "\Cricket Uniform",
        features: "High Quality Wear",

      },
      {
        id: 8,
        name: "Cricket Uniform Sample Product 8",
        detail: "Customize Your \Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/8.webp",
        imageAlt: "\Cricket Uniform",
        features: "High Quality Wear",

      },
      {
        id: 9,
        name: "Cricket Uniform Sample Product 9",
        detail: "Customize Your \Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/9.webp",
        imageAlt: "\Cricket Uniform",
        features: "High Quality Wear",

      },
      {
        id: 10,
        name: "Cricket Uniform Sample Product 10",
        detail: "Customize Your \Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/10.webp",
        imageAlt: "\Cricket Uniform",
        features: "High Quality Wear",

      },
      {
        id: 11,
        name: "Cricket Uniform Sample Product 11",
        detail: "Customize Your \Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/11.webp",
        imageAlt: "\Cricket Uniform",
        features: "High Quality Wear",

      },
      {
        id: 12,
        name: "Cricket Uniform Sample Product 12",
        detail: "Customize Your \Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/12.webp",
        imageAlt: "Cricket Uniform",
        features: "High Quality Wear",

      },
      {
        id: 13,
        name: "Cricket Uniform Sample Product 13",
        detail: "Customize Your Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/13.webp",
        imageAlt: "Cricket Uniform",
        features: "High Quality Wear",

      },
      {
        id: 14,
        name: "Cricket Uniform Sample Product 14",
        detail: "Customize Your Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/14.webp",
        imageAlt: "Cricket Uniform",
        features: "High Quality Wear",

      },
      {
        id: 15,
        name: "Cricket Uniform Sample Product 15",
        detail: "Customize Your Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/15.webp",
        imageAlt: "Cricket Uniform",
        features: "High Quality Wear",

      },
      {
        id: 16,
        name: "Cricket Uniform Sample Product 16",
        detail: "Customize Your Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/16.webp",
        imageAlt: "Cricket Uniform",
        features: "High Quality Wear",

      },
      {
        id: 17,
        name: "Cricket Uniform Sample Product 17",
        detail: "Customize Your Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/17.webp",
        imageAlt: "Cricket Uniform",
        features: "High Quality Wear",

      },
      {
        id: 18,
        name: "Cricket Uniform Sample Product 18",
        detail: "Customize Your Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/18.webp",
        imageAlt: "Cricket Uniform",
        features: "High Quality Wear",

      },
      {
        id: 19,
        name: "Cricket Uniform Sample Product 19",
        detail: "Customize Your Cricket Dress and order in bulk",
        imageSrc: "/images/products/cricket/19.webp",
        imageAlt: "Cricket Uniform",
        features: "High Quality Wear",

      },

    ],
  });
  useEffect(() => {

    // const element = document.getElementsByClassName('productslink');
    // element[0].classList.add('text-[#01b8ee]')
    const elementb = document.getElementsByClassName('showbackbtn');
    elementb[0].classList.remove('hidden')

  }, []);
  const facetItems = [
    { value: 'American Footballs', label: 'American Footballs', count: 4 , Link: '\ football'},
    { value: 'Baseball', label: 'Baseball', count: 4, Link: '\ baseball' },
    { value: 'Basketball', label: 'Basketball', count: 107, Link: '\ basketball' },
    { value: 'Basketball', label: 'Basketball', count: 107, Link: '\ basketball' },
    { value: 'Cycling', label: 'Cycling', count: 2, Link: '\ cycling' },
    { value: 'Caps', label: 'Caps', count: 2, Link: '\ caps'  },
    { value: 'Cricket', label: 'Cricket', count: 107, Link: '\ cricket' },
    { value: 'Golf', label: 'Golf', count: 4, Link: '\ golf' },
    { value: 'Gym Wear', label: 'Gym Wear', count: 4, Link: '\ gym-wear' },
    { value: 'Hoodies', label: 'Hoodies', count: 6, Link: ' hoodies-and-joggers' },
    { value: 'Ice Hockey', label: 'Ice Hockey', count: 7, Link: '\ ice-hockey' },
    { value: 'Jackets', label: 'Jackets', count: 2, Link: '\ jackets' },
    { value: 'Jackets', label: 'Jackets', count: 2, Link: '\ jackets'  },
    { value: 'Martial & arts', label: 'Martial & arts', count: 2, Link: '\ martial-art' },
    { value: 'Medical Wear', label: 'Medical Wear', count: 15, Link: '\ medical'  },
    { value: 'Rugby', label: 'Rugby', count: 1, Link: '\ rugby' },
    { value: 'Running', label: 'Running', count: 107, Link: '\ running' },
    { value: 'Soccer', label: 'Soccer', count: 107, Link: '\ soccer' },
    { value: 'Softshell jackets', label: 'Softshell jackets', count: 2, Link: '\ softshell-jackets'  },
    { value: 'Sports Bag', label: 'Sports Bag', count: 2, Link: '\ sports-bag'  },
    { value: 'Shorts', label: 'Shorts', count: 38, Link: '\ shorts' },
    { value: 'Socks', label: 'Socks', count: 2, Link: '\ socks'  },
    { value: 'Tennis', label: 'Tennis', count: 52, Link: '\ tennis' },
    { value: 'Track Suits', label: 'Track Suits', count: 2, Link: '\ tracksuits'  },
    { value: 'Winter Caps', label: 'Winter Caps', count: 4, Link: '\ winter-caps' },
    { value: 'Volley ball', label: 'Volley ball', count: 107, Link: '\ volleyball' },

  ];
  const checkboxElements = facetItems.map((item, index) => (
    <div key={index}>
      <input
        name="search"
        className="w-4 h-4 block xl:ml-12 lg:ml-12 sm:ml-4 mt-5 border-2 border-slate-700 lg:py-4 sm:py-4 xl:py-4 placeholder:text-black font-semibold"
        id={`checkbox_${index}`}
        type="checkbox"
      />
      {item.label}
    </div>
  ));
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
        <title>Manufacturers of High-Quality Cricket Uniforms | Athlotic Sports</title>
        <meta
          name="title"
          content="Manufacturers of High-Quality Cricket Uniforms | Athlotic Sports"
        />
        <meta
          name="description"
          content="Leading manufacturers of top-tier cricket uniforms for athletes. Explore our premium athletic sports apparel collection today."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Sardar Imran" />
        <meta
          itemProp="name"
          content="Manufacturers of High-Quality Cricket Uniforms | Athlotic Sports"
        />

        <meta
          name="twitter:title"
          content="Manufacturers of High-Quality Cricket Uniforms | Athlotic Sports"
        />
        <meta
          name="twitter:description"
          content="Leading manufacturers of top-tier Cricket uniforms for athletes. Explore our premium athletic sports apparel collection today."
        />
        <meta name="twitter:image:src" content="/images/logo-athlotic.png" />
        <meta
          property="og:title"
          content="Manufacturers of High-Quality Cricket Uniforms | Athlotic Sports"
        />
        <meta property="og:type" content="article" />

        <meta
          property="og:description"
          content="Leading manufacturers of top-tier cricket uniforms for athletes. Explore our premium athletic sports apparel collection today."
        />
        <meta property="og:locale" content="en" />
        <meta itemProp="image" content="/images/logo-athlotic.png" />

        <link rel="canonical" href="https://athlotic.com/rugby" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader pageHeading="Custom Cricket Sports Uniform Supplier" />

      <section className="main-sec">
        <div className="grid md:grid-cols-1 grid-cols-1 md:gap-4 container mx-auto">
          <div className="content-bx">
            {/* <Link href="/products" title="Products" className="text-slate-400 hover:text-slate-600 w-12 h-12 ml-3 mt-2 hover:-translate-x-3 transition-all duration-300 absolute"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
</Link> */}
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/10 p-1 max-w-lg mx-auto">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm  leading-5 font-bold",
                        "ring-white ring-opacity-60 ring-offset-2   focus:outline-none",
                        selected
                          ? "bg-white shadow text-blue-700"
                          : "text-gray-500 hover:bg-white/[0.12] hover:text-black"
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                {Object.values(categories).map((posts, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={classNames(
                      "rounded-xl bg-white p-3",
                      "ring-white ring-opacity-60 ring-offset-2   focus:outline-none  "
                    )}
                  >
                    {/* <h2 className="mx-auto  text-center mt-2 font-medium text-lg text-indigo-400">
                      {posts[0].qualitydes}
                    </h2> */}
                    <div className="flex">
                      <div id="ctl00_SearchNav_ctl02_divFacet" className="w-[20%] lg:block hidden" data-field="facet-d">
                        <h4 className="relative p-4 font-slate text-xl font-bold uppercase cursor-pointer">
                          Category
                        </h4>
      
                        <div>
                          <input className="w-full p-2 text-sm box-border mr-2 border-2 border-slate-300 text-slate-400" type="text" placeholder="Quick Lookup"  />
                        </div>
                        <ul id="hawkfacet_d" className="mt-3">
                          {facetItems.map((item, index) => (
                            <Link href={`${item.Link}`}>
                            <li key={index}  className="flex">
                              <input
                                name="search"
                                className="w-4 h-4 block ml-2  border-2 border-slate-700 lg:py-4 mt-1 mr-2 sm:py-4 xl:py-4 placeholder:text-black font-semibold"
                                id={`radio_${index}`}
                                type="radio"
                                value={item.value}
                                href= {item.Link}
                              />
                              <a
                              
                                href={`${item.Link}`}                            rel="nofollow"
                              >
                                <span>
                                  {item.label} <span>({item.count})</span>
                                </span>
                              </a>
                            </li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                        <div className="mt-6 ml-2 grid grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                          {posts.map((product) => (
                            <div key={product.id} className="group relative">
                              <div className="w-full min-h-90 rounded-lg border aspect-w-1 aspect-h-1 shadow    overflow-hidden group-hover:opacity-75 group-hover:-translate-y-2 transition-all duration-300 lg:h-60 lg:aspect-none">
                                <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}
                                  className="w-full h-full object-center object-contain hover:object-scale-down lg:w-full lg:h-full"
                                />
                              </div>
                              <div className="mt-4 flex justify-between">
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-700">
                                    <div>
                                      <span
                                        aria-hidden="true"
                                        className="absolute inset-0"
                                      />
                                      {product.name}
                                    </div>
                                  </h3>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {product.details}
                                  </p>
                                </div>
                              </div>
                              <p className="text-sm mt-2 text-stone-500">

                                {product.features}
                              </p>
                            </div>
                          ))}


                        </div>
                      </div>
                      {/* /////////////// */}


                      {/* <div className="flex flex-col mt-12 max-w-5xl mx-auto">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-t from-[#01b8ee] to-blue-400">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-base font-bold text-white uppercase tracking-wider"
                  >
                    ITEMS
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-base font-bold text-white uppercase tracking-wider"
                  >
                    DETAIL
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-base font-bold text-white uppercase tracking-wider"
                  >
                    FEATURES
                  </th>

                   
                   
                  
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-base text-slate-700">
              {posts.map((product) => (
                  <tr key= {product.id} className="odd:bg-slate-100 text-sm">
                    <td className="px-4 py-2 whitespace-nowrap">
                      
                        
                        {product.name}
                        
                        
                      
                    </td>
                    <td className="px-6 py-4">
                    {product.detail}
                    </td>
                    <td className="px-6 py-4">
                    {product.features}
                    </td> 
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div> */}


                      {/* ////////////////////// */}



                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            <Link href="/contact-us"

              className="max-w-xs flex-1 mx-auto mt-10 bg-gradient-to-r from-yellow-500 to-blue-600 hover:from-blue-600 hover:to-yellow-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-lg font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500 sm:w-full"
            >
              Inquire Now
            </Link>

          </div>
          {/* <div className="content-bx">
		         <h2 className="text-2xl font-bold">China Electrical Fittings in Pakistan</h2>
                <p>
              At AA-M Pipes, we offer high-quality China electrical fittings for customers in Pakistan. Our fittings are designed to meet the highest standards of quality, durability, and performance, ensuring that your electrical system remains safe and reliable.<br/>
              Our China electrical fittings are made from premium materials and are built to last. We offer a wide range of fittings, including connectors, couplings, adapters, and more, to meet all of your electrical system needs. Our fittings are designed to be easy to install and maintain, making them ideal for both professional and DIY installations.
              </p>
              <p>Whether you are looking to upgrade your existing electrical system or install a new one, our China electrical fittings are the perfect choice. They are designed to be compatible with a wide range of electrical components and are built to withstand even the harshest environments.<br/>
              At AA-M Pipes, we are committed to providing our customers with the highest level of service and support. We offer competitive pricing, fast shipping, and exceptional customer service to ensure that you are completely satisfied with your purchase. So why wait? Order your China electrical fittings from AA-M Pipes today and experience the ultimate in quality and performance!
              </p>
              <h2 className="text-2xl font-bold">China Fittings Board</h2>
              <p>
              Introducing AA-M Pipes' premium China Fittings Board – the epitome of quality and innovation in the realm of piping solutions. As a leading manufacturer in Pakistan, we take immense pride in presenting our exceptional Fittings Board that is designed to meet the diverse needs of modern construction and infrastructure projects. <br/>
              Crafted with precision and engineered for excellence, our China Fittings Board is a testament to our commitment to delivering top-notch products. Manufactured using state-of-the-art technology and the finest materials, our Fittings Board guarantees unparalleled durability, longevity, and performance. Whether it's for plumbing, HVAC systems, or any other application, our Fittings Board ensures a seamless and reliable connection every time.
              </p>
              <p>
              What sets our China Fittings Board apart is its impeccable design, compatibility, and ease of installation. With a focus on precision engineering, our fittings allow for quick and efficient assembly, reducing labor costs and project timelines. Additionally, the board's robust construction ensures leak-proof joints and a secure fit, providing peace of mind for contractors and builders.
              </p>

              <Link href="/contact-us"
                    
                    className="mt-5 max-w-xs flex-1 mx-auto mt-2 bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-lg font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500 sm:w-full"
                  >
                    Message us!
                  </Link>

		       </div> */}
        </div>
      </section>
    </>
  );
}
