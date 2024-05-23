import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import MainHeader from "../../components/mainheader";
import { Tab } from "@headlessui/react";
import { useEffect } from "react";
import { fetchProducts } from "../../lib/data";
import headerTexts from "../../db/headerText.json";
import facetData from "../../db/facets.json";
import ProductCard from "../../components/ProductCard"; // Ensure this path is correct

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export async function getServerSideProps() {
  try {
    const products = await fetchProducts();
    return { props: { products } };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { props: { products: [] } };
  }
}

export default function ProductDetailFitting({ products }) {
  const router = useRouter();
  const facetItems = facetData.facetItems;
  const category = router.query?.category || "soccer";

  // Normalize category to ensure consistent comparison
  const normalizedCategory = category.trim().toLowerCase();

  // Normalize product category for comparison, adding checks
  const filteredProducts = products.filter(
    (product) => product.category && product.category.trim().toLowerCase() === normalizedCategory
  );

  console.log('Category:', category);
  console.log('Products:', products);
  console.log('Filtered Products:', filteredProducts);

  const headerText = headerTexts.find(header => header.name === category);

  useEffect(() => {
    const elementb = document.getElementsByClassName("showbackbtn");
    if (elementb[0]) {
      elementb[0].classList.remove("hidden");
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=5, shrink-to-fit=no"
          name="viewport"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="generator" content="Getsol Inc." />
        <title>
          {headerText ? headerText.value : "Default Heading"}
        </title>
        <meta
          name="title"
          content="Product Details"
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
          content="Product Details"
        />
        <meta
          name="twitter:title"
          content="Product Details"
        />
        <meta
          name="twitter:description"
          content="Leading manufacturers of top-tier soccer uniforms for athletes. Explore our premium athletic sports apparel collection today."
        />
        <meta name="twitter:image:src" content="/images/logo-athlotic.png" />
        <meta
          property="og:title"
          content="Product Details"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Leading manufacturers of top-tier soccer uniforms for athletes. Explore our premium athletic sports apparel collection today."
        />
        <meta property="og:locale" content="en" />
        <meta itemProp="image" content="/images/logo-athlotic.png" />
        <link rel="canonical" href="https://athlotic.com/soccer" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>
      <MainHeader pageHeading={headerText ? headerText.value : "Default Heading"} />
      <section className="main-sec">
        <div className="grid md:grid-cols-1 grid-cols-1 md:gap-4 container mx-auto">
          <div className="content-bx">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/10 p-1 max-w-lg mx-auto">
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm leading-5 font-bold uppercase",
                      "ring-white ring-opacity-60 ring-offset-2 focus:outline-none",
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
                    "ring-white ring-opacity-60 ring-offset-2 focus:outline-none"
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
                      <ul id="hawkfacet_d" className="mt-3 flex flex-col gap-2">
                        {facetItems.map((item, index) => (
                          <Link href={item.Link} key={index}>
                            <li className="flex">
                              <div className="flex">
                                <p className="hover:text-blue-800 hover:underline">
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
                        <ProductCard product={product} key={product.id} />
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
