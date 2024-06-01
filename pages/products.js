import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import { NextSeo } from "next-seo";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

export default function productsPage() {
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
        <title>Athlotic Sports Products | Sports Uniform Supplier</title>
        <meta
          name="title"
          content="Athlotic Sports Products | Sports Uniform Supplier"
        />
        <meta
          name="description"
          content="Best and leading Manufacturers / Supplier and Wholeseller of Sports Uniform, Activewears and Accessories in Pakistan. We provide quality products at cheap prices."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Sardar Imran" />
        <meta
          itemProp="name"
          content="Athlotic Sports Products | Sports Uniform Supplier"
        />

        <meta
          name="twitter:title"
          content="Athlotic Sports Products | Sports Uniform Supplier"
        />
        <meta
          name="twitter:description"
          content="Best and leading Manufacturers / Supplier and Wholeseller of Sports Uniform, Activewears and Accessories in Pakistan. We provide quality products at cheap prices."
        />
        <meta name="twitter:image:src" content="#" />
        <meta
          property="og:title"
          content="Athlotic Sports Products | Sports Uniform Supplier"
        />
        <meta property="og:type" content="article" />

        <meta
          property="og:description"
          content="Best and leading Manufacturers / Supplier and Wholeseller of Sports Uniform, Activewears and Accessories in Pakistan. We provide quality products at cheap prices."
        />
        <meta property="og:locale" content="en" />
        <meta itemProp="image" content="#" />

        <link rel="canonical" href="https://athlotic.com/products" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader pageHeading="OUR PRODUCT RANGE" />

      <section className="main-sec">
        <div className="container mx-auto px-4 mt-10">
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-4  text-center">
            <Link href="/products/rugby" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/rugby-uniform-athlotic-sport.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="mx-auto flex justify-center rounded-lg mt-4 mb-3"
                  width={400}
                  height={200}
                />

                <h3>Rugby Uniform</h3>
                <p>
                  We Manufacture Rugby uniforms that are designed to be durable
                  and functional.
                </p>
              </div>
            </Link>

            <Link href="/products/baseball" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/baseball-uniform-athlotic-sports.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="mx-auto flex justify-center rounded-lg mt-3"
                  width={400}
                  height={200}
                />

                <h3>Baseball Uniform</h3>
                <p>
                  Crafting Excellence: Manufacturers of High-Quality Baseball
                  Uniforms
                </p>
              </div>
            </Link>

            <Link href="/products/basketball" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/basketball-uniform-athlotic-sports-pakistan.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="mx-auto flex justify-center rounded-lg mt-3"
                  width={400}
                  height={200}
                />

                <h3>Basketball Uniform </h3>
                <p>
                  The Premier Manufacturers of High-Quality Basketball Uniforms
                </p>
              </div>
            </Link>

            <Link href="/products/cycling" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/cycling-uniform-athlotic-sports-pakistan.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="mx-auto flex justify-center rounded-lg mt-3"
                  width={400}
                  height={200}
                />

                <h3>Cycling Uniform</h3>
                <p>
                  Pioneering Performance: Crafting Top-Tier High-Quality Cycling
                  Uniforms.
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-10">
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-4  text-center">
            <Link href="/products/soccer" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/soccer-uniform-athlotic-sport-pakistan.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="mx-auto flex justify-center rounded-lg mt-4 mb-3"
                  width={400}
                  height={200}
                />

                <h3>Soccer Uniform</h3>
                <p>
                  We Manufacture Soccer uniforms that are designed to be durable
                  and functional.
                </p>
              </div>
            </Link>
             <Link href="/products/tracksuits" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/t-shirts-athlotic-sports-pakistan.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="mx-auto flex justify-center rounded-lg mt-4 mb-3"
                  width={400}
                  height={200}
                />

                <h3>Track Suits</h3>
                <p>
                  We Manufacture T Shirts that are designed to be durable and
                  functional.
                </p>
              </div>
            </Link>

            <Link href="/products/cricket" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/cricket-uniform-athlotic-sport-pakistan.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="mx-auto flex justify-center rounded-lg mt-4 mb-3"
                  width={400}
                  height={200}
                />

                <h3>Cricket Uniform</h3>
                <p>
                  We Manufacture Cricket uniforms that are designed to be
                  durable and functional.
                </p>
              </div>
            </Link>

            <Link href="/products/volleyball" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/cheers-uniform-athlotic-sport-pakistan.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="mx-auto flex justify-center rounded-lg mt-4 mb-3"
                  width={400}
                  height={200}
                />

                <h3>Volley Ball Uniform</h3>
                <p>
                  We Manufacture Cheers Uniform that are designed to be durable
                  and functional.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-10">
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-4  text-center">
            <Link href="/products/running" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/running-uniform-athlotic-sport-pakistan.png"
                  alt="ATHLOTIC SPORTS"
                  className="mx-auto flex justify-center rounded-lg mt-4 mb-3"
                  width={400}
                  height={200}
                />

                <h3>Running Uniform</h3>
                <p>
                  We Manufacture Hunting uniforms that are designed to be
                  durable and functional.
                </p>
              </div>
            </Link>

            <Link href="/products/golf" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/golf-uniform-athlotic-sport-pakistan.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="mx-auto flex justify-center rounded-lg mt-4 mb-3"
                  width={300}
                  height={100}
                />

                <h3>Golf Uniform</h3>
                <p>
                  We Manufacture Soccer uniforms that are designed to be durable
                  and functional.
                </p>
              </div>
            </Link>

            <Link href="/products/icehockey" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full pb-6">
                <Image
                  src="/images/ice-hockey-athlotic-sport-pakistan.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="mx-auto flex justify-center rounded-lg mt-4 mb-3"
                  width={400}
                  height={200}
                />

                <h3>Ice Hockey Uniform</h3>
                <p>
                  We Manufacture Cricket uniforms that are designed to be
                  durable and functional.
                </p>
              </div>
            </Link>

            <Link href="/products/shorts" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/shorts-athlotic-sport-pakistan.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="mx-auto flex justify-center rounded-lg mt-4 mb-3"
                  width={300}
                  height={100}
                />

                <h3>Shorts</h3>
                <p>
                  We Manufacture Cheers Uniform that are designed to be durable
                  and functional.
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-10">
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-4  text-center">
            <Link href="/products/gym" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/gym-wear-athlotic-sport-pakistan.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="mx-auto flex justify-center rounded-lg mt-4 mb-3"
                  width={400}
                  height={200}
                />

                <h3>Gym Wear</h3>
                <p>
                  We Manufacture Gym Wear that are designed to be durable and
                  functional.
                </p>
              </div>
            </Link>

            <Link href="/products/hoodies" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/hoodies-athlotic-sports-pakistan.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="mx-auto flex justify-center rounded-lg mt-4 mb-3"
                  width={400}
                  height={200}
                />

                <h3>Hoodies & Joggers</h3>
                <p>
                  We Manufacture Hoodies and Joogers that are designed to be
                  durable and functional.
                </p>
              </div>
            </Link>

            <Link href="/products/martialarts" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/martial-arts-wear-athlotic-sports-pakistan.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="mx-auto flex justify-center rounded-lg mt-4 mb-3"
                  width={400}
                  height={200}
                />

                <h3>Martial Arts Wear</h3>
                <p>
                  We Manufacture Martial Art Wear that are designed to be
                  durable and functional.
                </p>
              </div>
            </Link>

            <Link href="/products/medical" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/medical-wear-athlotic-sports-pakistan.png"
                  alt="ATHLOTIC SPORTS"
                  className="mx-auto flex justify-center rounded-lg mt-4 mb-3"
                  width={400}
                  height={200}
                />

                <h3>Medical Wear</h3>
                <p>
                  We Manufacture Medical Wear that are designed to be durable
                  and functional.
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-10">
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-4  text-center">       
            <Link href="/products/sportsbag" className="bx-item-pro h-auto">
              <div className="flex flex-col w-full">
                <Image
                  src="/images/sports-bags-athlotic-sports-pakistan.jpg"
                  alt="ATHLOTIC SPORTS"
                  className="mx-auto flex justify-center rounded-lg mt-4 mb-3"
                  width={400}
                  height={200}
                />

                <h3>Sport Bags</h3>
                <p>
                  We Manufacture Sport Bags that are designed to be durable and
                  functional.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
