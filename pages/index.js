import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { Component, useState, useEffect } from "react";
import plainBlue from "../public/plainblue.png";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { NextSeo } from "next-seo";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import AFlogo from "../public/images/logos/AmericanFootball.png";
import Baseball from "../public/images/logos/Baseball.png";
import Basketball from "../public/images/logos/Basketball.png";
import Cricket from "../public/images/logos/Cricket.png";
import Cycling from "../public/images/logos/Cycling.png";
import Golf from "../public/images/logos/Golf.png";
import Icehockey from "../public/images/logos/Icehockey.png";
import Rugby from "../public/images/logos/Rugby.png";
import Soccer from "../public/images/logos/Soccer.png";
import Tennis from "../public/images/logos/Tennis.png";
import Hoodies from "../public/images/logos/Hoodies.png";
import Jackets from "../public/images/logos/Jackets.png";
import SportsBra from "../public/images/logos/SportsBra.png";
import MartialandArts from "../public/images/logos/MartialandArts.png";
import Sweatshirts from "../public/images/logos/Sweatshirts.png";
import socks from "../public/images/logos/socks.png";
import T_shirt from "../public/images/logos/T-shirt.png";
import caps from "../public/images/logos/caps.png";
import Shorts from "../public/images/logos/Shorts.png";
import content from "../db/blogposts.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
const faqs = [
  {
    question: "What types of uniforms and activewear do you manufacture?",
    answer:
      "We specialize in manufacturing a wide range of sports uniforms and activewear, including but not limited to: Soccer jerseys and shorts, Basketball uniforms, Tennis outfits, Gym and fitness wear, Running apparel, Cycling jerseys and shorts, Yoga clothing, Team tracksuits, Performance-oriented sportswear for various sports.",
  },
  {
    question: "Can you create custom designs and logos for organizations?",
    answer:
      "Yes, we offer custom design and logo services for organizations. Our experienced design team can work with you to create unique designs and incorporate logos, team names, and branding elements into the uniforms and activewear..",
  },

  {
    question: "What materials do you use for manufacturing?",
    answer:
      "We use a variety of high-quality materials depending on the specific requirements of the products. Common materials include moisture-wicking fabrics, polyester, spandex blends, and eco-friendly options. The choice of material can be tailored to meet performance, comfort, and sustainability needs.",
  },

  {
    question: "What is the typical production lead time for orders?",
    answer:
      "The production lead time can vary depending on the complexity of the order, the quantity, and the customization involved. Typically, our lead times range from 4 to 8 weeks. However, we can provide more accurate timelines upon discussing the specifics of your order.",
  },
];

const faqsb = [
  {
    question: "Do you have minimum order quantity (MOQ) requirements?",
    answer:
      "Yes, we have MOQ requirements, which can vary depending on the type of product and customization. We can provide MOQ details when you inquire about a specific order.",
  },

  {
    question: "What sports accessories do you manufacture?",
    answer:
      "We manufacture a range of sports accessories, including but not limited to: Sports bags, Hats and caps, Socks, Compression sleeves, Gloves, Headbands and wristbands, Arm sleeves, Shin guards (for soccer), Athletic belts.",
  },

  {
    question: "Can you provide samples of your products?",
    answer:
      "Yes, we can provide samples of our products upon request. Sample availability and pricing may vary based on the specific items you are interested in. Contact our sales team for more information on obtaining samples.",
  },

  {
    question: "What quality control measures do you have in place?",
    answer:
      "We have a comprehensive quality control process in place to ensure the highest quality standards for our products. This includes quality checks at various stages of production, from material inspection to final product evaluation. We also conduct performance and durability testing to ensure our sportswear and accessories meet or exceed industry standards. Our commitment to quality is central to our manufacturing process.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  let touchStartX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const minSwipeDistance = 50; // Adjust this value as needed

    if (touchStartX - touchEndX > minSwipeDistance) {
      // Swipe left (next slide)
      nextSlide();
    } else if (touchEndX - touchStartX > minSwipeDistance) {
      // Swipe right (previous slide)
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  useEffect(() => {
    // Add event listeners for navigation on mobile devices
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      // Remove event listeners when the component unmounts
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);
  const sliderSettings = {
    arrows: true,
    autoplaySpeed: 2500,
    dots: false,
    autoplay: true,
    infinite: true,
    adaptiveHeight: true,
    pauseOnHover: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    fade: false,
    touchThreshold: 5,
  };
  const sliderItems = [

    <Link href="/products/football">
      <div className="px-6">
        <Image
          src={AFlogo}
          alt="AF logo"
          className="logo"
          width={60}
          height={60}
        />
        <h2 className="text-center text-white font-montserrat font-semibold">
          Amercian <br></br> Football
        </h2>
      </div>
    </Link>,
    <Link href="/baseball">
      <div className="px-6">
        <Image
          src={Baseball}
          alt="Baseball logo"
          className="logo"
          width={60}
          height={60}
        />
        <h2 className="text-center text-white font-montserrat font-semibold">
          Baseball
        </h2>
      </div>
    </Link>,
    <Link href="/products/basketball">
      <div className="px-6">
        <Image
          src={Basketball}
          alt="Basketball logo"
          className="logo"
          width={72}
          height={60}
        />
        <h2 className="text-center text-white font-montserrat font-semibold">
          Basketball
        </h2>
      </div>
    </Link>,
    <Link href="/products/soccer">
      <div className="px-6">
        <Image
          src={Soccer}
          alt="Soccer logo"
          className="logo"
          width={60}
          height={60}
        />
        <h2 className="text-center text-white font-montserrat font-semibold">
          Soccer
        </h2>
      </div>
    </Link>,
    <Link href="/products/rugby">
      <div className="px-6">
        <Image
          src={Rugby}
          alt="Rugby logo"
          className="logo"
          width={60}
          height={60}
        />
        <h2 className="text-center text-white font-montserrat font-semibold">
          Rugby
        </h2>
      </div>
    </Link>,
    <Link href="/products/icehockey">
      <div className="px-6">
        <Image
          src={Icehockey}
          alt="Icehockey logo"
          className="logo"
          width={47}
          height={60}
        />
        <h2 className="text-center text-white font-montserrat font-semibold">
          Ice hockey
        </h2>
      </div>
    </Link>,
    <Link href="/products/golf">
      <div className="px-6">
        <Image
          src={Golf}
          alt="Golf logo"
          className="logo"
          width={65}
          height={60}
        />
        <h2 className="text-center text-white font-montserrat font-semibold">
          Golf
        </h2>
      </div>
    </Link>,
    <Link href="/products/tennis">
      <div className="px-6">
        <Image
          src={Tennis}
          alt="Tennis logo"
          className="logo"
          width={42}
          height={60}
        />
        <h2 className="text-center text-white font-montserrat font-semibold">
          Tennis
        </h2>
      </div>
    </Link>,
    <Link href="/products/cycling">
      <div className="px-6">
        <Image
          src={Cycling}
          alt="Cycling logo"
          className="logo"
          width={70}
          height={60}
        />
        <h2 className="text-center text-white font-montserrat font-semibold">
          Cycling{" "}
        </h2>
      </div>
    </Link>,
    <Link href="/products/cricket">
      <div className="px-6">
        <Image
          src={Cricket}
          alt="Cricket logo"
          className="logo"
          width={37}
          height={60}
        />
        <h2 className="text-center text-white font-montserrat font-semibold">
          Cricket
        </h2>
      </div>
    </Link>,
    // Add more slider items here as needed
  ];
  const sliderItems2 = [
    <Link href="/products/hoddies">
      <div className="px-7">
        <Image
          src={Hoodies}
          alt="Hoodies logo"
          className="logo"
          width={55}
          height={60}
        />
        <h2 className="text-center text-white font-montserrat font-semibold">
          Hoodies
        </h2>
      </div>
    </Link>,
  
    <Link href="/products/medical">
      <div className="px-7">
        <Image
          src={SportsBra}
          alt="SportsBra logo"
          className="logo"
          width={74}
          height={60}
        />
        <h2 className="text-center text-white font-montserrat font-semibold">
          Medical
        </h2>
      </div>
    </Link>,
    <div className="px-7">
      <Image
        src={MartialandArts}
        alt="Martial and arts logo"
        className="logo"
        width={48}
        height={60}
      />
      <h2 className="text-center text-white font-montserrat font-semibold">
        Martial & <br></br> Arts
      </h2>
    </div>,
    <div className="px-7">
      <Image
        src={Sweatshirts}
        alt="Softshell jackets logo"
        className="logo"
        width={60}
        height={60}
      />
      <h2 className="text-center text-white font-montserrat font-semibold">
        Softshell <br></br> Jackets
      </h2>
    </div>,
    <div className="px-7">
      <Image
        src={socks}
        alt="Socks logo"
        className="logo"
        width={48}
        height={60}
      />
      <h2 className="text-center text-white font-montserrat font-semibold">
        Socks
      </h2>
    </div>,

    <Link href="/products/tracksuits">
      <div className="px-7">
        <Image
          src="/images/logos/T-shirt.png"
          alt="T_shirt logo"
          className="logo"
          width={65}
          height={60}
        />
        <h2 className="text-center text-white font-montserrat font-semibold">
          Tracksuits
        </h2>
      </div>
    </Link>,
    <Link href="/products/caps">
    <div className="px-7">
      <Image
        src={caps}
        alt="Caps logo"
        className="logo"
        width={47}
        height={60}
      />
      <h2 className="text-center text-white font-montserrat font-semibold">
        Caps
      </h2>
    </div>
    </Link>,

    <Link href="/products/shorts">
      <div className="px-7">
        <Image
          src={Shorts}
          alt="Shorts logo"
          className="logo"
          width={77}
          height={60}
        />
        <h2 className="text-center text-white font-montserrat font-semibold">
          Shorts{" "}
        </h2>
      </div>
    </Link>,
  ];
  return (
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
          Global Sports Gear Hub: Uniforms, Activewear & Accessories
        </title>
        <meta
          name="title"
          content="Global Sports Gear Hub: Uniforms, Activewear & Accessories"
        />
        <meta
          name="description"
          content="Discover top-quality sports uniforms, activewear, and accessories for champions worldwide. Your source for sporting success!"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Sardar Imran" />
        <meta
          itemProp="name"
          content="Global Sports Gear Hub: Uniforms, Activewear & Accessories"
        />

        <meta
          name="twitter:title"
          content="Global Sports Gear Hub: Uniforms, Activewear & Accessories"
        />
        <meta
          name="twitter:description"
          content="Discover top-quality sports uniforms, activewear, and accessories for champions worldwide. Your source for sporting success!"
        />
        <meta name="twitter:image:src" content="/images/logo-athlotic.png" />
        <meta
          property="og:title"
          content="Global Sports Gear Hub: Uniforms, Activewear & Accessories"
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/images/logo-athlotic.png" />
        <meta
          property="og:description"
          content="Discover top-quality sports uniforms, activewear, and accessories for champions worldwide. Your source for sporting success!"
        />
        <meta property="og:locale" content="en" />
        <meta itemProp="image" content="/images/logo-athlotic.png" />

        <link rel="canonical" href="https://athlotic.com/" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <header className="homeHeader">
        <div className="homehdrtxt">
          <div>
            <h1>Uniforms, Activewear & Accessoris</h1>
            <h2>
              We Manufacture Custom Sports Uniforms, Activewear and export
              Worldwide
            </h2>
          </div>
        </div>

        {/* <Image src="/images/aam-pipes-slide-a.jpg" alt='ATHLOTIC SPORTS' title='ATHLOTIC SPORTS' fill="true" className='bg-cover' ></Image> */}
        <Swiper
          className="mySwiper h-full w-full"
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <Image
              src="/images/slides/athlotic.png"
              alt="ATHLOTIC SPORTS"
              title="ATHLOTIC SPORTS"
              fill="true"
              className="bg-cover"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/slides/active-wears.png"
              alt="ATHLOTIC SPORTS"
              title="ATHLOTIC SPORTS"
              fill="true"
              className="bg-cover"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/slides/sports-accessories.png"
              alt="ATHLOTIC SPORTS"
              title="ATHLOTIC SPORTS"
              fill="true"
              className="bg-cover"
            ></Image>
          </SwiperSlide>
        </Swiper>
      </header>

      {/* home-bg-aampipes */}

      {/* CUSTOM UNIFORMS BY SPORTS */}
      {/* <section className="mt-10 pb-12 py-10 relative">
        <div
          style={{
            backgroundImage: 'url("/images/athlotic-blue-bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>

          <div className='flex mx-auto py-10 relative'>
            <div className='pr-6 mt-10'>
              <h1 className="text-white font-montserrat text-3xl font-extrabold uppercase leading-tight"> WHY US?</h1>
              <p className="pr-20 mb-6 text-justify text-white shadow-text">We offer low minimum order quantity and the best lead time. We have strict quality control checks to ensure customer satisfaction. Get your sportswear and activewear products manufactured conveniently and quickly. First, get your samples approved, once approved, they will go through the production process.</p>
            </div>
            <div className='flex mx-auto relative'>
              
                <div className="bg-e-global-color-secondary text-left flex-row" data-id="d4b1913" data-element_type="widget" data-widget_type="icon-box.default">
                  <div className="transition-all duration-300 transform transition-transform">
                    <div className="flex text-left items-center">
                      <div className="inline-flex basis-auto">
                        <span className="text-yellow-600 inline-block leading-1 transition-all duration-300 text-gray-700 text-center text-5xl border-yellow-600">
                          <i aria-hidden="true" className="fas fa-bullseye"></i>
                        </span>
                      </div>
                      <div className="elementor-icon-box-content">
                        <p className="elementor-icon-box-title">
                          <span className="font-bold">
                            Quality Focus
                          </span>
                        </p>
                        <p className="elementor-icon-box-description">
                          We aim to provide the best quality as per our customer expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              
            </div>

          </div>


        </div>


      </section> */}
      <section className="mt-10 py-10 pb-12">
        <div className="container mx-auto px-4 relative">
          <div className="sec-heading">
            <h2>CUSTOM UNIFORMS BY SPORTS</h2>
            <p>List of all the Uniforms we Manufacture and Export worldwide!</p>
          </div>

          <div className="search-trend">
            <Link href="/products/soccer">
              <div className="bx">
                <Image
                  src="/images/soocer-uniform-athlotic-sports.jpg"
                  alt="ATHLOTIC SPORTS - Prevent Electrical Shocks"
                  title="Prevent Electrical Shocks"
                  width={250}
                  height={200}
                  className="w-full"
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                />
                <h3>Soccer Uniform</h3>
              </div>
            </Link>
            <Link href="/products/baseball">
              <div className="bx">
                <Image
                  src="/images/baseball-uniforms-athlotic-sport.jpg"
                  alt="ATHLOTIC SPORTS - Self Extinguishing"
                  title="Self Extinguishing"
                  width={250}
                  height={200}
                  className="w-full"
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                />
                <h3>Baseball Uniform</h3>
              </div>
            </Link>
            <Link href="/products/rugby">
              <div className="bx">
                <Image
                  src="/images/rugby-uniforms-athlotic-sport.jpg"
                  alt="ATHLOTIC SPORTS - High Mechanical Strength"
                  title="Custom Rugby Uniforms"
                  width={250}
                  height={200}
                  className="w-full"
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                />
                <h3>Rugby Uniforms</h3>
              </div>
            </Link>
            <Link href="/products/running">
              <div className="bx">
                <Image
                  src="/images/running-uniforms-athlotic-sport.jpg"
                  alt="Athlotic Sports - Custom Running Uniforms"
                  title="Custom Running Uniforms"
                  width={250}
                  height={200}
                  className="w-full"
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                />
                <h3>Running Uniforms</h3>
              </div>
            </Link>
            <Link href="/products/tennis">
              <div className="bx">
                <Image
                  src="/images/tennis-uniforms-athlotic-sport.jpg"
                  alt="Athlotic Custom Tennis Uniform"
                  title="Custom Tennis Uniform"
                  width={250}
                  height={200}
                  className="w-full"
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                />
                <h3>Tennis Uniform</h3>
              </div>
            </Link>
            <Link href="/products/vollleyball">
              <div className="bx">
                <Image
                  src="/images/volleyball-uniforms-athlotic-sport.jpg"
                  alt="Athlotic Sports - Volleyball Uniform"
                  title="Long Service Life"
                  width={250}
                  height={200}
                  className="w-full"
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                />
                <h3>Volleyball Uniform</h3>
              </div>
            </Link>

            <Link href="/products/cycling">
              <div className="bx">
                <Image
                  src="/images/cycling-uniforms-athlotic-sport.jpg"
                  alt="Athlotic Sports - Cycling Uniform"
                  title="Concrete Tight"
                  width={250}
                  height={200}
                  className="w-full"
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                />
                <h3>Cycling Uniform</h3>
              </div>
            </Link>
            <Link href="/products/basketball">
              <div className="bx">
                <Image
                  src="/images/basketball-uniform-athlotic-sport.jpg"
                  alt="Athlotic Sports - Basketball Uniform"
                  title="Basketball Uniform"
                  width={250}
                  height={200}
                  className="w-full"
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                />
                <h3>Basketball Uniform</h3>
              </div>
            </Link>
            <Link href="/products/caps">
              <div className="bx">
                <Image
                  src="/images/hunting-uniform-athlotic-sport.jpg"
                  alt="Athlotic Sports - Hunting Uniform"
                  title="Maintenance Free"
                  width={250}
                  height={200}
                  className="w-full"
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                />
                <h3>Caps</h3>
              </div>
            </Link>
            <Link href="/products/icehockey">
              <div className="bx">
                <Image
                  src="/images/athletic-uniform-athlotic-sport.jpg"
                  alt="Athlotic Sports - Athlete Uniform"
                  title="Non-Magnetic"
                  width={250}
                  height={200}
                  className="w-full"
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                />
                <h3>Ice-Hockey Uniform</h3>
              </div>
            </Link>
            <Link href="/products/cricket">
              <div className="bx">
                <Image
                  src="/images/cricket-uniform-athlotic-sport.jpg"
                  alt="Athlotic Sports - Custom Cricket Uniform"
                  title="Cricket Uniform"
                  width={250}
                  height={200}
                  className="w-full"
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                />
                <h3>Cricket Uniform</h3>
              </div>
            </Link>
            <Link href="/products/sportsbag">
              <div className="bx">
                <Image
                  src="/images/sports-bags-athlotic-sports.jpg"
                  alt="Athlotic Sports - Custom Sports Bags"
                  title="Save Installation Cost"
                  width={250}
                  height={200}
                  className="w-full"
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
                <h3>Sports Bags</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Standard Quality is Our Foremost Priority */}
      <section className=" h-auto bg-no-repeat bg-fixed relative bg-cover py-10 pb-5 ">
        <div className="container mx-auto h-full max-w-5xl px-4 flex justify-center items-center text-center relative">
          <div>
            <h2
              className="md:text-5xl text-3xl font-bold text-slate-800"
              title="Standard Quality is Our Foremost Priority"
              style={{ textShadow: "0px 1px 2px rgba(0,0,0,.2)" }}
            >
              Standard Quality is Our{" "}
              <span className="relative whitespace-nowrap text-blue-700">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative">Foremost Priority</span>
              </span>
            </h2>
            <p className="md:text-lg  text-slate-700 mt-3">
              Our top priority is to ensure that our customers are happy and
              satisfied, which is why all of our goods are high quality. Hence,
              we devote all of our efforts to manufacturing quality standard
              goods.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="py-10 pb-8 bg-cover w-full h-auto">
          <Swiper spaceBetween={0} slidesPerView={1} navigation>
            <SwiperSlide>
              <div
                style={{
                  backgroundImage: 'url("/images/slides/bluePlainbg.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="elementor-widget-container pt-12 transition duration-300 border border-transparent rounded shadow transform transition-transform">
                  <h2 className="text-white font-montserrat font-extrabold md:text-4xl text-xl text-center uppercase leading-relaxed  text-shadow-md elementor-size-default">
                    SPORTSWEAR CATEGORIES
                  </h2>
                </div>

                <div className="py-8 pb-4 flex flex-wrap gap-2">
                  <div className="xl:hidden lg:hidden flex">
                    <MdArrowForwardIos onClick={prevSlide}>
                      Previous
                    </MdArrowForwardIos>
                    <div className="slider">{sliderItems[currentSlide]}</div>
                    <MdArrowBackIos onClick={nextSlide}>Next</MdArrowBackIos>
                  </div>
                  <Link href="/products/football">
                    <div className="px-6">
                      <Image
                        src="/images/logos/AmericanFootball.png"
                        alt="AF logo"
                        className="logo"
                        width={60}
                        height={60}
                      />
                      <h2 className="text-center text-white font-montserrat font-semibold">
                        Amercian <br></br> Football
                      </h2>
                    </div>
                  </Link>
                  <Link href="/products/baseball">
                    <div className="px-6">
                      <Image
                        src="/images/logos/Baseball.png"
                        alt="Baseball logo"
                        className="logo"
                        width={60}
                        height={60}
                      />
                      <h2 className="text-center text-white font-montserrat font-semibold">
                        Baseball
                      </h2>
                    </div>
                  </Link>
                  <Link href="/products/basketball">
                    <div className="px-6">
                      <Image
                        src="/images/logos/Basketball.png"
                        alt="Basketball logo"
                        className="logo"
                        width={72}
                        height={60}
                      />
                      <h2 className="text-center text-white font-montserrat font-semibold">
                        Basketball
                      </h2>
                    </div>
                  </Link>
                  <Link href="/products/soccer">
                    <div className="px-6">
                      <Image
                        src="/images/logos/Soccer.png"
                        alt="Soccer logo"
                        className="logo"
                        width={60}
                        height={60}
                      />
                      <h2 className="text-center text-white font-montserrat font-semibold">
                        Soccer
                      </h2>
                    </div>
                  </Link>
                  <Link href="/products/rugby">
                    <div className="px-6">
                      <Image
                        src="/images/logos/Rugby.png"
                        alt="Rugby logo"
                        className="logo"
                        width={60}
                        height={60}
                      />
                      <h2 className="text-center text-white font-montserrat font-semibold">
                        Rugby
                      </h2>
                    </div>
                  </Link>
                  <Link href="/products/icehockey">
                    <div className="px-6">
                      <Image
                        src="/images/logos/Icehockey.png"
                        alt="Icehockey logo"
                        className="logo"
                        width={47}
                        height={60}
                      />
                      <h2 className="text-center text-white font-montserrat font-semibold">
                        Ice hockey
                      </h2>
                    </div>
                  </Link>
                  <Link href="/products/golf">
                    <div className="px-6">
                      <Image
                        src="/images/logos/Golf.png"
                        alt="Golf logo"
                        className="logo"
                        width={65}
                        height={60}
                      />
                      <h2 className="text-center text-white font-montserrat font-semibold">
                        Golf
                      </h2>
                    </div>
                  </Link>
                  <Link href="/products/tennis">
                    <div className="px-6">
                      <Image
                        src="/images/logos/Tennis.png"
                        alt="Tennis logo"
                        className="logo"
                        width={42}
                        height={60}
                      />
                      <h2 className="text-center text-white font-montserrat font-semibold">
                        Tennis
                      </h2>
                    </div>
                  </Link>
                  <Link href="/products/cycling">
                    <div className="px-6">
                      <Image
                        src="/images/logos/Cycling.png"
                        alt="Cycling logo"
                        className="logo"
                        width={70}
                        height={60}
                      />
                      <h2 className="text-center text-white font-montserrat font-semibold">
                        Cycling{" "}
                      </h2>
                    </div>
                  </Link>
                  <Link href="/products/cricket"></Link>
                  <div className="px-6">
                    <Image
                      src="/images/logos/Cricket.png"
                      alt="Cricket logo"
                      className="logo"
                      width={37}
                      height={60}
                    />
                    <h2 className="text-center text-white font-montserrat font-semibold">
                      Cricket
                    </h2>
                  </div>
                </div>
                <div className="elementor-widget-container transition duration-300 border border-transparent rounded shadow transform transition-transform">
                  <h2 className="text-white font-montserrat font-extrabold md:text-4xl text-xl text-center uppercase leading-relaxed  text-shadow-md elementor-size-default">
                    ACTIVEWEAR CATEGORIES
                  </h2>
                </div>
                <div className="py-12 pb-8 flex flex-wrap gap-2">
                  <div className="xl:hidden lg:hidden">
                    <MdArrowForwardIos onClick={prevSlide}></MdArrowForwardIos>
                    <div className="slider">{sliderItems[currentSlide]}</div>
                    <MdArrowBackIos onClick={nextSlide}></MdArrowBackIos>
                  </div>
                  <Link href="/products/hoodies">
                    <div className="px-7">
                      <Image
                        src="/images/logos/Hoodies.png"
                        alt="Hoodies logo"
                        className="logo"
                        width={70}
                        height={75}
                      />
                      <h2 className="text-center text-white font-montserrat font-semibold">
                        Hoodies
                      </h2>
                    </div>
                  </Link>
                
                  <Link href="/products/medical"></Link>
                  <div className="px-7 cursor-pointer">
                    <Image
                      src="/images/logos/SportsBra.png"
                      alt="medical logo"
                      className="logo"
                      width={70}
                      height={48}
                    />
                    <h2 className="text-center text-white font-montserrat font-semibold">
                      Medical <br></br> Wear
                    </h2>
                  </div>
                  <Link href="/products/martialarts">
                    <div className="px-7">
                      <Image
                        src="/images/logos/MartialandArts.png"
                        alt="Martial-arts logo"
                        className="logo"
                        width={70}
                        height={70}
                      />
                      <h2 className="text-center text-white font-montserrat font-semibold">
                        Martial <br></br>& Arts
                      </h2>
                    </div>
                  </Link>
                  
                  <Link href="/products/socks">
                    <div className="px-7">
                      <Image
                        src="/images/logos/Socks.png"
                        alt="Socks logo"
                        className="logo"
                        width={70}
                        height={80}
                      />
                      <h2 className="text-center text-white font-montserrat font-semibold">
                        Socks
                      </h2>
                    </div>
                  </Link>
                  <Link href="/products/tracksuits">
                    <div className="px-7">
                      <Image
                        src="/images/logos/T-shirt.png"
                        alt="Track suits logo"
                        className="logo"
                        width={85}
                        height={60}
                      />
                      <h2 className="text-center text-white font-montserrat font-semibold">
                        Track Suits
                      </h2>
                    </div>
                  </Link>
                  <Link href="/products/caps">
                    <div className="px-7">
                      <Image
                        src="/images/logos/caps.png"
                        alt="Caps logo"
                        className="logo"
                        width={87}
                        height={100}
                      />
                      <h2 className="text-center text-white font-montserrat font-semibold">
                        Caps
                      </h2>
                    </div>
                  </Link>
                  <Link href="/products/shorts">
                    <div className="px-7">
                      <Image
                        src="/images/logos/shorts.png"
                        alt="Shorts logo"
                        className="logo"
                        width={80}
                        height={70}
                      />
                      <h2 className="text-center text-white font-montserrat font-semibold">
                        Shorts{" "}
                      </h2>
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="py-10 pb-8 ">
        <div className="container mx-auto px-4 ">
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-3  text-center">
            <div className="bx-item-c h-auto group">
              <div className="txt-cnt ">
                <div className="flex justify-center items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h2 className="group-hover:bg-gradient-to-t from-blue-400 via-transparent">
                  Why Prefer Us{" "}
                </h2>
                <p>
                  Our mission is not only to sell products but also have
                  believed in making a positive impact on society and the
                  environment.
                </p>
              </div>
            </div>

            <div className="bx-item-c h-auto group">
              <div className="flex flex-col overflow-hidden rounded-lg">
                <div className="txt-cnt">
                  <div className="flex justify-center items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                  <h2 className="group-hover:bg-gradient-to-t from-blue-400 via-transparent">
                    Why People Value Us{" "}
                  </h2>
                  <p>
                    We work hard to comprehend the client’s goal, and after we
                    take pride in exceeding their expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bx-item-c h-auto group">
              <div className="flex flex-col overflow-hidden rounded-lg">
                <div className="txt-cnt">
                  <div className="flex justify-center items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                  <h2 className="group-hover:bg-gradient-to-t from-blue-400 via-transparent">
                    Why We Are Best{" "}
                  </h2>
                  <p>
                    We accomplish our clients’ goals by delivering high-quality
                    goods and meeting our promises and deadlines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-5 pb-2 ">
        <div className="sec-heading">
          <h2>Our Products</h2>
          <p>At Athlotic Sports we are offering following products</p>
        </div>

        <div className="container mx-auto px-4 ">
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-4  text-center">
            <Link href="/products/rugby" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/athlotic-logo.png"
                  alt="ATHLOTIC SPORTS"
                  className="w-12 mx-auto"
                  width={48}
                  height={48}
                />

                <h3>Rugby Uniform</h3>
                <p>
                  We Manufacture Rugby uniforms that are designed to be durable
                  and functional.
                </p>

                <Image
                  src="/images/rugby-uniform-athlotic-sport.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="rounded-lg mt-4"
                  width={400}
                  height={200}
                />
              </div>
            </Link>

            <Link href="/products/baseball" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/athlotic-logo.png"
                  alt="ATHLOTIC SPORTS"
                  className="w-12 mx-auto"
                  width={48}
                  height={48}
                />
                <h3>Baseball Uniform</h3>
                <p>
                  Crafting Excellence: Manufacturers of High-Quality Baseball
                  Uniforms
                </p>
                <Image
                  src="/images/baseball-uniform-athlotic-sports.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="rounded-lg mt-3"
                  width={400}
                  height={200}
                />
              </div>
            </Link>

            <Link href="/products/basketball" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/athlotic-logo.png"
                  alt="ATHLOTIC SPORTS"
                  className="w-12 mx-auto"
                  width={48}
                  height={48}
                />
                <h3>Basketball Uniform </h3>
                <p>
                  The Premier Manufacturers of High-Quality Basketball Uniforms
                </p>
                <Image
                  src="/images/basketball-uniform-athlotic-sports-pakistan.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="rounded-lg mt-3"
                  width={400}
                  height={200}
                />
              </div>
            </Link>

            <Link href="/products/cycling" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/athlotic-logo.png"
                  alt="ATHLOTIC SPORTS"
                  className="w-12 mx-auto"
                  width={48}
                  height={48}
                />
                <h3>Cycling Uniform</h3>
                <p>
                  Pioneering Performance: Crafting Top-Tier High-Quality Cycling
                  Uniforms.
                </p>
                <Image
                  src="/images/cycling-uniform-athlotic-sports-pakistan.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="rounded-lg mt-3"
                  width={400}
                  height={200}
                />
              </div>
            </Link>
          </div>
          <div className=" flex justify-center items-center mt-10">
            <Link
              href="/products"
              className="border border-slate-600 text-slate-700  rounded-full px-5 py-2 hover:bg-blue-400 hover:border-blue-400   hover:text-white transition duration-300 font-medium"
            >
              View all Products
            </Link>
          </div>
        </div>
      </section>
      <section
        className="py-14 pb-14 bg-no-repeat bg-cover bg-fixed "
      >
        <div className="sec-heading">
          <h2 style={{ color: "black" }}>About our Production</h2>
          <p style={{ color: "grey" }}>
            We produce high quality Uniforms, Activewears and Accessories.
          </p>
        </div>

        <div className="container mx-auto px-4 ">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 text-center">
            <div className="bx-item-bb h-auto">
              <div className="flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>

                <h2 title="ATHLOTIC SPORTS - Quality Control">
                  Quality Control
                </h2>
                <p>
                  The quality of our products and solutions is strictly
                  controlled.
                </p>
              </div>
            </div>

            <div className="bx-item-bb h-auto">
              <div className="flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth=".8"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>

                <h2 title="ATHLOTIC SPORTS - Powerful Equipment">
                  Powerful Equipment{" "}
                </h2>
                <p>Our factory has powerful product manufacturing equipment.</p>
              </div>
            </div>
            <div className="bx-item-bb h-auto">
              <div className="flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <h2 title="ATHLOTIC SPORTS - Professional Team">
                  Professional Team{" "}
                </h2>
                <p>
                  Our professional team is aimed to deliver the best results.
                </p>
              </div>
            </div>

            <div className="bx-item-bb h-auto">
              <div className="flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                  />
                </svg>
                <h2 title="ATHLOTIC SPORTS - Quality Materials">
                  Quality Materials
                </h2>
                <p>
                  We use top quality materials during our manufacturing process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 pb-5 ">
        <div className="sec-heading">
          <h2>Standards</h2>
          <p>Standards we achieve against Our Quality</p>
        </div>

        <div className="container mx-auto px-4 ">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-4 gap-y-16 max-w-3xl mx-auto sm:divide-x mt-14 sm:mt-24   text-center">
            <div className="bx-item-bbb h-auto">
              <div>
                <Image
                  src="/images/aam-pipes-iso-9001.png"
                  alt="ATHLOTIC SPORTS ISO - 9001"
                  className="md:h-48 h-32 w-auto md:-mt-28 -mt-16"
                  title="ATHLOTIC SPORTS ISO - 9001"
                  width={190}
                  height={150}
                />

                <h3>ISO - 9001 </h3>
                <p>Quality</p>
              </div>
            </div>

            <div className="bx-item-bbb h-auto">
              <div>
                <Image
                  src="/images/aam-pipes-iso-14001.png"
                  alt="ATHLOTIC SPORTS ISO - 14001"
                  className="md:h-48 h-32 w-auto md:-mt-28 -mt-16"
                  title="ATHLOTIC SPORTS ISO - 14001"
                  width={190}
                  height={150}
                />

                <h3>ISO - 14001 </h3>
                <p>Envoirnment</p>
              </div>
            </div>
            <div className="bx-item-bbb h-auto">
              <div>
                <Image
                  src="/images/aam-pipes-iso-45001.png"
                  alt="ATHLOTIC SPORTS ISO - 45001"
                  className="md:h-48 h-32 w-auto md:-mt-28 -mt-16"
                  title="ATHLOTIC SPORTS ISO - 45001"
                  width={190}
                  height={150}
                />
                <h3>ISO - 45001 </h3>
                <p>Health & Safety</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog section */}
      <section className="py-10 ">
        <div className="sec-heading">
          <h2>Blog & Updates</h2>
          <p>Blog and updates related to Sports </p>
        </div>
        <div className="container mx-auto px-4 ">
          <div className="mt-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 xl:grid-cols-4 lg:max-w-none">
            {content.posts.slice(0, 4).map((post, index) => {
              if (post.category != "attractions") {
                return (
                  <div
                    key={post.slug + "_" + index}
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
                          <img
                            className="h-10 w-10 rounded-full"
                            src={post.authorpic}
                            alt="Najam Awan Image"
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
                );
              }
            })}
          </div>

          <div className=" flex justify-center items-center mt-10">
            <Link
              href="/blog"
              className="border border-slate-600 text-slate-700  rounded-full px-5 py-2 hover:bg-blue-400 hover:border-blue-400   hover:text-white transition duration-300 font-medium"
            >
              View all Blog & Updates
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 ">
        <div className="sec-heading">
          <h2>Frequently Asked Questions</h2>
          <p>
            Answers of frequently asked questions related to ATHLOTIC SPORTS{" "}
          </p>
        </div>
        <div className="container mx-auto px-4 ">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-8">
            <div className="bg-transparent w-full mx-auto">
              <dl>
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-3">
                    {({ open }) => (
                      <>
                        <dt className="text-lg">
                          <Disclosure.Button
                            className="w-full sm:px-6 sm:py-4 px-3 py-2  border border-slate-300
      bg-gradient-to-br from-white via-slate-100 to-zinc-200 text-gray-700 rounded-lg text-base sm:text-xl font-medium shadow-lg 
      text-left  flex justify-between items-start "
                          >
                            <span className="font-medium text-gray-900">
                              {faq.question}
                            </span>
                            <span className="ml-6 h-7 flex items-center">
                              <ChevronDownIcon
                                className={`h-6 w-6 transform ${
                                  open ? "-rotate-180" : "rotate-0"
                                }`}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel
                          as="dd"
                          className="transition-all p-5 duration-700 text-sm sm:text-base text-gray-600"
                        >
                          <p className="text-base text-gray-800">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
            <div className="bg-transparent w-full mx-auto">
              <dl>
                {faqsb.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-3">
                    {({ open }) => (
                      <>
                        <dt className="text-lg">
                          <Disclosure.Button
                            className="w-full sm:px-6 sm:py-4 px-3 py-2  border border-slate-300
      bg-gradient-to-br from-white via-slate-100 to-zinc-200 text-gray-700 rounded-lg text-base sm:text-xl font-medium shadow-lg 
      text-left  flex justify-between items-start "
                          >
                            <span className="font-medium text-gray-900">
                              {faq.question}
                            </span>
                            <span className="ml-6 h-7 flex items-center">
                              <ChevronDownIcon
                                className={`h-6 w-6 transform ${
                                  open ? "-rotate-180" : "rotate-0"
                                }`}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel
                          as="dd"
                          className="transition-all p-5 duration-700 text-sm sm:text-base text-gray-600"
                        >
                          <p className="text-base text-gray-800">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
