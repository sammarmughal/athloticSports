import { useState, useEffect } from "react";
import FilterBar from "../components/filterbar";
import ProductTable from "../components/productTable";
import MainHeader from "../components/mainheader";
import items from "./products.json";
import Head from "next/head";
const categories = [
  "uPVC CONDUIT PIPES",
  "BEND",
  "HOCKEY BEND",
  "SOCKET",
  "DUCT",
  "WALL BOX",
  "JOINTS",
  "FAN",   
  "LIGHT BOX",
   
];
const sizes = ["1/2", "3/4", "1", "1/1/4", "1/1/2", "2"];
const qualities = ["-", "HMS", "MMS", "LMS"];

export default function OnlineQuote() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuality, setSelectedQuality] = useState(qualities[1]);
  useEffect(() => {
    handleCategoryChange({ target: { value: selectedCategory } });
    //handleQualityChange({ target: { value: selectedQuality } });
    
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log(event.target.value);
    if(event.target.value=="FAN" || event.target.value=="LIGHT BOX" || event.target.value=="WALL BOX" || event.target.value=="JOINTS"){
    setSelectedQuality("") 
    
  } else { setSelectedQuality("HMS") }

  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const [isActive, setisActive] = useState("bt_2");
  const handleQualityChange = (event) => {
    setSelectedQuality(event.target.value);
    setisActive(event.target.id);
  };

  
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
        <title>Premium uPVC Pipes & Fittings in Pakistan | Online Quotation</title>
        <meta
          name="title"
          content="Premium uPVC Pipes & Fittings in Pakistan | Online Quotation"
        />
        <meta
          name="description"
          content="Get instant online quotations for premium uPVC pipes, fittings & ducts in Pakistan. Upgrade your plumbing system with the best products today!"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Sardar Imran" />
        <meta
          itemProp="name"
          content="Premium uPVC Pipes & Fittings in Pakistan | Online Quotation"
        />
        <meta
          itemProp="image"
          content="https://aampipes.pk/_next/image?url=%2Fimages%2Faam-pipes-logo.png&w=128&q=75"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Premium uPVC Pipes & Fittings in Pakistan | Online Quotation"
        />
        <meta
          name="twitter:description"
          content="Get instant online quotations for premium uPVC pipes, fittings & ducts in Pakistan. Upgrade your plumbing system with the best products today!"
        />
        <meta
          name="twitter:image:src"
          content="https://aampipes.pk/_next/image?url=%2Fimages%2Faam-pipes-logo.png&w=128&q=75"
        />
        <meta
          property="og:title"
          content="Premium uPVC Pipes & Fittings in Pakistan | Online Quotation"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://aampipes.pk/_next/image?url=%2Fimages%2Faam-pipes-logo.png&w=128&q=75"
        />
        <meta
          property="og:description"
          content="Get instant online quotations for premium uPVC pipes, fittings & ducts in Pakistan. Upgrade your plumbing system with the best products today!"
        />
        <meta property="og:locale" content="en" />
        <meta
          itemProp="image"
          content="https://aampipes.pk/_next/image?url=%2Fimages%2Faam-pipes-logo.png&w=128&q=75"
        />

        <link rel="canonical" href="https://aampipes.pk/online-quote" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>
    <div>
      <MainHeader pageHeading="ONLINE QUOTATION" />

      <section className="main-sec">
        <div className="content-bx space-y-4">
          <FilterBar
            categories={categories}
            sizes={sizes}
            qualities={qualities}
            selectedCategory={selectedCategory}
            selectedSize={selectedSize}
            selectedQuality={selectedQuality}
            handleCategoryChange={handleCategoryChange}
            handleSizeChange={handleSizeChange}
            handleQualityChange={handleQualityChange}
            isActive={isActive}
          />
          <ProductTable
            items={items.items}
            selectedCategory={selectedCategory}
            selectedSize={selectedSize}
            selectedQuality={selectedQuality}
          />
        </div>
      </section>
    </div>
    </>  );
}
