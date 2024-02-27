import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import MainHeader from "../../components/mainheader";
import { Tab } from "@headlessui/react";
import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import headerTexts from "../../db/headerText.json";
import data from "../../db/productdetails.json";
import facetData from "../../db/facets.json";
import ProductCard from "../../components/ProductCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function productDetailfitting() {
  const router = useRouter();
  const facetItems = facetData.facetItems;
  const category = router.query?.category || "soccer";
  const products = data.products.filter(
    (product) => product.category === category
  );
  
  const headerText = headerTexts.find(header => header.name === category)
  
  useEffect(() => {
    // const element = document.getElementsByClassName('productslink');
    // element[0].classList.add('text-[#01b8ee]')
    const elementb = document.getElementsByClassName("showbackbtn");
    elementb[0].classList.remove("hidden");
  }, []);

  const checkboxElements = facetItems.map((item, index) => (
    <div key={index}>
      <input
        name="search"
        className="w-4 h-4 block  lg:ml-12 sm:ml-4 mt-5 border-2 border-slate-700 sm:py-4  placeholder:text-black font-semibold"
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
        <title>
        {products.title}
        </title>
        <meta
          name="title"
          content={products.detail}
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
          content={products.detail}
        />

        <meta
          name="twitter:title"
          content={products.detail}
        />
        <meta
          name="twitter:description"
          content="Leading manufacturers of top-tier soccer uniforms for athletes. Explore our premium athletic sports apparel collection today."
        />
        <meta name="twitter:image:src" content="/images/logo-athlotic.png" />
        <meta
          property="og:title"
          content={products.detail}
        />
        <meta property="og:type" content="article" />

        <meta
          property="og:description"
          content={products.shortdescription}
        />
        <meta property="og:locale" content="en" />
        <meta itemProp="image" content="/images/logo-athlotic.png" />

        <link rel="canonical" href="https://athlotic.com/soccer" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>
      <MainHeader pageHeading={headerText.value} />

      <section className="main-sec">
        <div className="grid md:grid-cols-1 grid-cols-1 md:gap-4 container mx-auto">
          <div className="content-bx">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/10 p-1 max-w-lg mx-auto">
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm  leading-5 font-bold uppercase",
                      "ring-white ring-opacity-60 ring-offset-2   focus:outline-none",
                      selected
                        ? "bg-white shadow text-blue-700"
                        : "text-gray-500 hover:bg-white/[0.12] hover:text-black"
                    )
                  }
                >
                  {category}
                </Tab>
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel
                  key="category-panel-1"
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2   focus:outline-none  "
                  )}
                >
                  <div className="flex">
                    <div
                      id="ctl00_SearchNav_ctl02_divFacet"
                      className="w-[20%] lg:block hidden"
                      data-field="facet-d"
                    >
                      <h4 className="relative p-4 font-slate text-xl font-bold uppercase cursor-pointer">
                        Category
                      </h4>

                      <div className="my-4">
                        <input
                          className="w-full p-2 text-sm box-border mr-2 border-2 border-slate-300 text-slate-400"
                          type="text"
                          placeholder="Quick Lookup"
                        />
                      </div>
                      <ul id="hawkfacet_d" className="mt-3 flex flex-col  gap-2">
                        {facetItems.map((item, index) => (
                          <Link href={item.Link}>
                            <li key={index} className="flex">
                              {/* <input
                                name="search"
                                className="w-4 h-4 block ml-2  border-2 border-slate-700 lg:py-4 mt-1 mr-2 sm:py-4 xl:py-4 placeholder:text-black font-semibold"
                                id={`radio_${index}`}
                                type="radio"
                                value={item.value}
                                href={item.Link}
                              /> */}
                              
                              <div className="flex">
                                <p className="hover:text-blue-800 hover:underline" >
                                  {item.label} <span>({item.count})</span>
                                </p>
                              </div>
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 ml-2 grid grid-cols-2 gap-y-14 gap-x-8 lg:grid-cols-3 xl:grid-cols-4">
                      {products.map((product) => (
                        <ProductCard product={product} />
                      ))}
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>

            <Link
              href="/contact-us"
              className="max-w-xs flex-1 mx-auto mt-10 bg-gradient-to-r from-yellow-500 to-blue-600 hover:from-blue-600 hover:to-yellow-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-lg font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500 sm:w-full"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
