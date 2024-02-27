import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from '../components/mainheader';
import { NextSeo } from 'next-seo';
import { ChevronDownIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import {
  HeartIcon,
  MenuIcon,
  MinusSmIcon,
  PlusSmIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
  XIcon,
  StarIcon,
} from '@heroicons/react/outline'
 

const pages = [
  { name: 'uPVC Pipes', href: '#', current: false },
  { name: 'Item one', href: '#', current: true },
]

const navigation = {
  categories: [
    {
      id: 'upvc',
      name: 'uPVC',
      featured: [
         
      ],
      sections: []
        
    },
    {
      id: 'fittings',
      name: 'Fittings',
      featured: [
        
      ],

  
           
    },
  ],
  pages: [
    { name: 'Ducts', href: '#' },
   
  ],
}
const product = {
  name: 'uPVC Pipes',
  price: '180/Length',
  rating: 0,
  images: [
    {
      id: 1,
      name: 'All Pipes',
      src: '/images/product-item-1.jpg',
       
    },
    {
      id: 2,
      name: 'All Pipes',
      src: '/images/product-item-2.jpg',
      
    },
    {
      id: 3,
      name: 'All Pipes',
      src: '/images/product-item-3.jpg',
      
    },
    
  ],
  colors: [
    { name: 'Off White', bgColor: 'bg-gray-200', selectedColor: 'ring-gray-200' },
     
  ],
  description: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Lorem ipsum dolor sit amet',
        'Ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Color sit amet, consectetur ',
        
      ],
    },   
  ],
}
  

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
} 
   
export default function ProductDetail() {

  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])


  return (
    <>



          {/* seo */}




      <MainHeader pageHeading="PRODUCT DETAIL" />

      <section className="main-sec">
        <div className="content-bx">

        <div className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        <li>
          <div>
            <Link href="/aam-pipes-products" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 h-5 w-5 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </div>

        <div className="bg-white">
       
      <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            
            <Tab.Group as="div" className="flex flex-col-reverse">
              
              <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only">{image.name}</span>
                          <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img src={image.src} alt="" className="w-full h-full object-center object-cover" />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-blue-500' : 'ring-transparent',
                              'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                {product.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">{product.price}</p>
              </div>
 
              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="text-base text-gray-700 space-y-6"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <form className="mt-6">
              
                <div>
                  <h3 className="text-sm text-gray-600">Color</h3>

                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                    <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedColor,
                              active && checked ? 'ring ring-offset-1' : '',
                              !active && checked ? 'ring-2' : '',
                              '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                            )
                          }
                        >
                          <RadioGroup.Label as="p" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.bgColor,
                              'h-8 w-8 border border-black border-opacity-10 rounded-full'
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div className="mt-10 flex sm:flex-col1">
                  <Link href="/contact-us"
                    
                    className="max-w-xs flex-1 bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500 sm:w-full"
                  >
                    Inquire Now
                  </Link>

                   
                </div>
              </form>

               
            </div>
          </div>

           
        </div>
      </main>
 
    </div>
  
        </div>
      </section>
    </>
  );
}