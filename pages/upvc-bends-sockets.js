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
export default function productDetailbends() {
  let [categories] = useState({
    HMS: [
      {
        id: 1,
        name: "BEND 1/2",
        href: "aampipes-upvc-pipes-1",
        imageSrc: "/images/bend-3by4.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        quality: "HMS",
        specs: "HEAVY MECHANICAL STRESS",
        usage: "CONCEALED OR UNDER GROUND WIRING",
        qualitydes: "HEAVY MECHANICAL STRESS",
      },
      {
        id: 2,
        name: "BEND 3/4",
        href: "product-detail",
        imageSrc: "/images/bend-3by4.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "HMS",
        specs: "HEAVY MECHANICAL STRESS",
        usage: "CONCEALED OR UNDER GROUND WIRING",
      },
      {
        id: 3,
        name: "BEND 1 ",
        href: "product-detail",
        imageSrc: "/images/bend-3by4.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "HMS",
        specs: "HEAVY MECHANICAL STRESS",
        usage: "CONCEALED OR UNDER GROUND WIRING",
      },
      {
        id: 4,
        name: "BEND 1/1/4",
        href: "product-detail",
        imageSrc: "/images/bend-3by4.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "HMS",
        specs: "HEAVY MECHANICAL STRESS",
        usage: "CONCEALED OR UNDER GROUND WIRING",
      },
      {
        id: 5,
        name: "BEND 1/1/2",
        href: "product-detail",
        imageSrc: "/images/bend-3by4.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "HMS",
        specs: "HEAVY MECHANICAL STRESS",
        usage: "CONCEALED OR UNDER GROUND WIRING",
      },
      {
        id: 6,
        name: "BEND 2",
        href: "product-detail",
        imageSrc: "/images/bend-3by4.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "HMS",
        specs: "HEAVY MECHANICAL STRESS",
        usage: "CONCEALED OR UNDER GROUND WIRING",
      },
      {
        id: 7,
        name: "HOCKEY BEND 3/4 ",
        href: "product-detail",
        imageSrc: "/images/bend-3by4-inch-back.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "HMS",
        specs: "HEAVY MECHANICAL STRESS",
        usage: "CONCEALED OR UNDER GROUND WIRING",
      },
      {
        id: 8,
        name: "SOCKET 1/2",
        href: "aampipes-upvc-pipes-1",
        imageSrc: "/images/socke1-1by2.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        quality: "HMS",
        specs: "HEAVY MECHANICAL STRESS",
        usage: "CONCEALED OR UNDER GROUND WIRING",
        qualitydes: "HEAVY MECHANICAL STRESS",
      },
      {
        id: 9,
        name: "SOCKET 3/4",
        href: "product-detail",
        imageSrc: "/images/socke1-1by2.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "HMS",
        specs: "HEAVY MECHANICAL STRESS",
        usage: "CONCEALED OR UNDER GROUND WIRING",
      },
      {
        id: 10,
        name: "SOCKET 1 ",
        href: "product-detail",
        imageSrc: "/images/socke1-1by2.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "HMS",
        specs: "HEAVY MECHANICAL STRESS",
        usage: "CONCEALED OR UNDER GROUND WIRING",
      },
      {
        id: 11,
        name: "SOCKET 1/1/4",
        href: "product-detail",
        imageSrc: "/images/socke1-1by2.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "HMS",
        specs: "HEAVY MECHANICAL STRESS",
        usage: "CONCEALED OR UNDER GROUND WIRING",
      },
      {
        id: 12,
        name: "SOCKET 1/1/2",
        href: "product-detail",
        imageSrc: "/images/socke1-1by2.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "HMS",
        specs: "HEAVY MECHANICAL STRESS",
        usage: "CONCEALED OR UNDER GROUND WIRING",
      },
      {
        id: 13,
        name: "SOCKET 2",
        href: "product-detail",
        imageSrc: "/images/socke1-1by2.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "HMS",
        specs: "HEAVY MECHANICAL STRESS",
        usage: "CONCEALED OR UNDER GROUND WIRING",
      },
    ],
    MMS: [
      {
        id: 1,
        name: "BEND 1/2",
        href: "product-detail",
        imageSrc: "/images/bend-1-1by2-inch.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "MMS",
        specs: "MEDIUM MECHANICAL STRESS",
        usage: "SUITABLE FOR WALL WIRING",
        qualitydes: "MEDIUM MECHANICAL STRESS",
      },
      {
        id: 2,
        name: "BEND 3/4",
        href: "product-detail",
        imageSrc: "/images/bend-1-1by2-inch.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "MMS",
        specs: "MEDIUM MECHANICAL STRESS",
        usage: "SUITABLE FOR WALL WIRING",
      },
      {
        id: 3,
        name: "BEND 1",
        href: "product-detail",
        imageSrc: "/images/bend-1-1by2-inch.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "MMS",
        specs: "MEDIUM MECHANICAL STRESS",
        usage: "SUITABLE FOR WALL WIRING",
      },
      {
        id: 4,
        name: "BEND 1/1/4",
        href: "product-detail",
        imageSrc: "/images/bend-1-1by2-inch.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "MMS",
        specs: "MEDIUM MECHANICAL STRESS",
        usage: "SUITABLE FOR WALL WIRING",
      },
      {
        id: 5,
        name: "BEND 1/1/2",
        href: "product-detail",
        imageSrc: "/images/bend-1-1by2-inch.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "MMS",
        specs: "MEDIUM MECHANICAL STRESS",
        usage: "SUITABLE FOR WALL WIRING",
      },
      {
        id: 6,
        name: "BEND 2",
        href: "product-detail",
        imageSrc: "/images/bend-1-1by2-inch.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "MMS",
        specs: "MEDIUM MECHANICAL STRESS",
        usage: "SUITABLE FOR WALL WIRING",
      },
      {
        id: 7,
        name: "SOCKET 1/2",
        href: "product-detail",
        imageSrc: "/images/socke1-1by2.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "MMS",
        specs: "MEDIUM MECHANICAL STRESS",
        usage: "SUITABLE FOR WALL WIRING",
        qualitydes: "MEDIUM MECHANICAL STRESS",
      },
      {
        id: 8,
        name: "SOCKET 3/4",
        href: "product-detail",
        imageSrc: "/images/socke1-1by2.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "MMS",
        specs: "MEDIUM MECHANICAL STRESS",
        usage: "SUITABLE FOR WALL WIRING",
      },
      {
        id: 9,
        name: "SOCKET 1",
        href: "product-detail",
        imageSrc: "/images/socke1-1by2.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "MMS",
        specs: "MEDIUM MECHANICAL STRESS",
        usage: "SUITABLE FOR WALL WIRING",
      },
      {
        id: 10,
        name: "SOCKET 1/1/4",
        href: "product-detail",
        imageSrc: "/images/socke1-1by2.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "MMS",
        specs: "MEDIUM MECHANICAL STRESS",
        usage: "SUITABLE FOR WALL WIRING",
      },
      {
        id: 11,
        name: "SOCKET 1/1/2",
        href: "product-detail",
        imageSrc: "/images/socke1-1by2.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "MMS",
        specs: "MEDIUM MECHANICAL STRESS",
        usage: "SUITABLE FOR WALL WIRING",
      },
      {
        id: 12,
        name: "SOCKET 2",
        href: "product-detail",
        imageSrc: "/images/socke1-1by2.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "MMS",
        specs: "MEDIUM MECHANICAL STRESS",
        usage: "SUITABLE FOR WALL WIRING",
      },
    ],
    LMS: [
      {
        id: 1,
        name: "BEND 1/2",
        href: "product-detail",
        imageSrc: "/images/bend-3by4.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "LMS",
        specs: "LOW MECHANICAL STRESS",
        usage: "OPEN OR SURFACE WIRING",
        qualitydes: "LOW MECHANICAL STRESS",
      },
      {
        id: 2,
        name: "BEND 3/4",
        href: "product-detail",
        imageSrc: "/images/bend-3by4.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "LMS",
        specs: "LOW MECHANICAL STRESS",
        usage: "OPEN OR SURFACE WIRING",
      },
      {
        id: 3,
        name: "BEND 1",
        href: "product-detail",
        imageSrc: "/images/bend-3by4.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "LMS",
        specs: "LOW MECHANICAL STRESS",
        usage: "OPEN OR SURFACE WIRING",
      },
      {
        id: 4,
        name: "BEND 1/1/4",
        href: "product-detail",
        imageSrc: "/images/bend-3by4.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "LMS",
        specs: "LOW MECHANICAL STRESS",
        usage: "OPEN OR SURFACE WIRING",
      },
      {
        id: 5,
        name: "BEND 1/1/2",
        href: "product-detail",
        imageSrc: "/images/bend-3by4.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "LMS",
        specs: "LOW MECHANICAL STRESS",
        usage: "OPEN OR SURFACE WIRING",
      },
      {
        id: 6,
        name: "BEND 2",
        href: "product-detail",
        imageSrc: "/images/bend-3by4.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "LMS",
        specs: "LOW MECHANICAL STRESS",
        usage: "OPEN OR SURFACE WIRING",
      },
      {
        id: 7,
        name: "HOCKEY BEND 3/4 ",
        href: "product-detail",
        imageSrc: "/images/bend-3by4-inch-back.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "LMS",
        specs: "LOW MECHANICAL STRESS",
        usage: "OPEN OR SURFACE WIRING",
      },
      {
        id: 8,
        name: "SOCKET 1/2",
        href: "product-detail",
        imageSrc: "/images/socke1-1by2.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "LMS",
        specs: "LOW MECHANICAL STRESS",
        usage: "OPEN OR SURFACE WIRING",
        qualitydes: "LOW MECHANICAL STRESS",
      },
      {
        id: 9,
        name: "SOCKET 3/4",
        href: "product-detail",
        imageSrc: "/images/socke1-1by2.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "LMS",
        specs: "LOW MECHANICAL STRESS",
        usage: "OPEN OR SURFACE WIRING",
      },
      {
        id: 10,
        name: "SOCKET 1",
        href: "product-detail",
        imageSrc: "/images/socke1-1by2.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "LMS",
        specs: "LOW MECHANICAL STRESS",
        usage: "OPEN OR SURFACE WIRING",
      },
      {
        id: 11,
        name: "SOCKET 1/1/4",
        href: "product-detail",
        imageSrc: "/images/socke1-1by2.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "LMS",
        specs: "LOW MECHANICAL STRESS",
        usage: "OPEN OR SURFACE WIRING",
      },
      {
        id: 12,
        name: "SOCKET 1/1/2",
        href: "product-detail",
        imageSrc: "/images/socke1-1by2.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "LMS",
        specs: "LOW MECHANICAL STRESS",
        usage: "OPEN OR SURFACE WIRING",
      },
      {
        id: 13,
        name: "SOCKET 2",
        href: "product-detail",
        imageSrc: "/images/socke1-1by2.jpg",
        imageAlt: "AAM Pipes - uPVC Pipe ",
        price: "",
        color: "Off White",
        quality: "LMS",
        specs: "LOW MECHANICAL STRESS",
        usage: "OPEN OR SURFACE WIRING",
      },
       
    ],
  });
  useEffect(() => {

    // const element = document.getElementsByClassName('productslink');
    // element[0].classList.add('text-[#01b8ee]')
    const elementb = document.getElementsByClassName('showbackbtn');
    elementb[0].classList.remove('hidden')
      
  }, []);
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
        <title>uPVC Bends and Sockets Manufacturer in Pakistan</title>
        <meta
          name="title"
          content="uPVC Bends and Sockets Manufacturer in Pakistan"
        />
        <meta
          name="description"
          content="Best and leading Manufacturer / Supplier and Wholeseller of uPVC Bends and Sockets in Pakistan. We provide quality products at cheap prices."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Sardar Imran" />
        <meta
          itemProp="name"
          content="uPVC Bends and Sockets Manufacturer in Pakistan"
        />

        <meta
          name="twitter:title"
          content="uPVC Bends and Sockets Manufacturer in Pakistan"
        />
        <meta
          name="twitter:description"
          content="Best and leading Manufacturer / Supplier and Wholeseller of uPVC Bends and Sockets in Pakistan. We provide quality products at cheap prices."
        />
        <meta name="twitter:image:src" content="https://aampipes.pk/_next/image?url=%2Fimages%2Faam-pipes-logo.png&w=256&q=75" />
        <meta
          property="og:title"
          content="uPVC Bends and Sockets Manufacturer in Pakistan"
        />
        <meta property="og:type" content="article" />

        <meta
          property="og:description"
          content="Best and leading Manufacturer / Supplier and Wholeseller of uPVC Bends and Sockets in Pakistan. We provide quality products at cheap prices."
        />
        <meta property="og:locale" content="en" />
        <meta itemProp="image" content="https://aampipes.pk/_next/image?url=%2Fimages%2Faam-pipes-logo.png&w=256&q=75" />

        <link rel="canonical" href="https://aampipes.pk/upvc-bends-sockets" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader pageHeading="uPVC BENDS & SOCKETS MANUFACTURER" />

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
                    <h2 className="mx-auto  text-center mt-2 font-medium text-lg text-indigo-400">
                      {posts[0].qualitydes}
                    </h2>
                    <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                      {posts.map((product) => (
                        <div key={product.id} className="group relative">
                          <div className="w-full min-h-60 rounded-lg border bg-gray-200 aspect-w-1 aspect-h-1 shadow    overflow-hidden group-hover:opacity-75 group-hover:-translate-y-2 transition-all duration-300 lg:h-60 lg:aspect-none">
                            <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
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
                                  {product.name+'"'}
                                </div>
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">
                                {product.quality}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm mt-2 text-stone-500">
                            <span className="font-semibold">USAGE :</span>{" "}
                            {product.usage}
                          </p>
                        </div>
                      ))}

                      
                    </div>

                           {/* /////////////// */}

                           
    <div className="flex flex-col mt-12 max-w-5xl mx-auto">
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
                    SPECIFICATION
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-base font-bold text-white uppercase tracking-wider"
                  >
                    USAGE
                  </th>
                   
                  
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-base text-slate-700">
              {posts.map((product) => (
                  <tr key= {product.id} className="odd:bg-slate-100 text-sm">
                    <td className="px-4 py-2 whitespace-nowrap">
                      
                        
                        {product.name+'"'}
                        
                        
                      
                    </td>
                    <td className="px-6 py-4">
                    {product.quality}
                    </td>
                    <td className="px-6 py-4">
                    {product.specs}
                    </td> 
                    <td className="px-6 py-4">
                    {product.usage}
                    </td> 
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


                          {/* ////////////////////// */}



                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            <Link href="/contact-us"
                    
                    className="max-w-xs flex-1 mx-auto mt-2 bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-lg font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500 sm:w-full"
                  >
                    Inquire Now
                  </Link>
                       
          </div>
		  <h2 className="text-2xl font-bold">uPVC Bends & Sockets Manufacturer in Pakistan</h2>
				  <p>
				  AA-M Pipes is a leading manufacturer of uPVC bends and sockets. With its commitment to producing high-quality products and its advanced manufacturing processes, AA-M Pipes has established itself as a leading provider of uPVC bends and sockets in the market. The company uses premium-grade materials to ensure that each and every bend and socket produced is of the highest quality. Additionally, AA-M Pipes offers a wide range of products to suit different requirements and applications, making it the go-to source for contractors, builders, and DIY enthusiasts. Whether you need uPVC bends and sockets for plumbing, irrigation, or any other purpose, you can trust AA-M Pipes to provide you with the best products in the market.
				  </p>
        </div>
      </section>
    </>
  );
}
