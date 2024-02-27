 
import { useState, useEffect } from "react";
import Head from "next/head";
import Cart from "./cartone";
 import Image from "next/image";
import {
  PlusIcon,
  DocumentIcon,
  ShareIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
  
const ProductTable = ({
  items,
  selectedCategory,
  selectedSize,
  selectedQuality,
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
  console.log(selectedQuality);
  const filteredItems = items.filter(
    (item) =>
      (!selectedCategory || item.category === selectedCategory) &&
      (!selectedSize || item.size === selectedSize) &&
      (!selectedQuality || item.quality === selectedQuality)
  );

  const handleAddToCart = (item) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingCartItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== itemToRemove.id));
  };

  const increaseQuantity = (itemToIncrease) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemToIncrease.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (itemToDecrease) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemToDecrease.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  ////////

  // const generatePDF = async () => {
  //   const response = await fetch('/api/generate-pdf', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       html: '<h1>AAMPIPES</h1><p>AAMPIPES</p>',
  //     }),
  //   });

  //   const blob = await response.blob();
  //   const url = URL.createObjectURL(blob);
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = 'generated.pdf';
  //   link.click();
  //   URL.revokeObjectURL(url);
  // };

  const handlePrintAsPDF = () => {
    window.print();
  };

   
/////////////
  return (
    <div>
      <Head>
        <style>
          {`
             @media print {
            header,footer,.sec-footer,nav,.filtersall,#productq,.ptable,.dbutton,.removebtn   {
              display:none !important;
            }
          }
            
            
          `}
        </style>
      </Head>

      <Image
        className="h-[100px] w-[400px] mx-auto hidden print:flex "
        src="/images/logo-aampipes.png"
        alt="AAM PIPES"
        width={448}  
        height={107}
      />

      <div className="mt-8 flex flex-col ptable">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Size
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredItems.map((item, index) => (
                    <tr
                      key={item.id}
                      className={index % 2 === 0 ? undefined : "bg-gray-50"}
                    >
                      <td className=" py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-16 w-16 flex-shrink-0">
                            <img
                              className="h-16 w-16 rounded-full border border-slate-300"
                              src="./images/aam-pipes-logo.png"
                              alt="AAM PIPES"
                            />
                          </div>
                          <div className="ml-4">
                            <Link
                              href="#"
                              className="font-bold text-gray-900 hover:text-blue-500 "
                            >
                              {item.category}
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className=" px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">{item.size + '"'}</div>
                      </td>
                      <td className=" px-3 py-4 text-sm text-gray-500">
                        <span
                          className={`${
                            item.quality ? "" : ""
                          }  inline-flex  rounded-full  px-4 py-1 text-xs font-semibold leading-5 text-indigo-800`}
                        >
                          {item.quality !== "-" && <> {item.quality} </>}
                        </span>
                      </td>
                      <td className="px-3 py-4 text-sm text-black font-semibold">
                        Rs. {item.price}
                      </td>
                      <td className="relative py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button
                          title="Add to Quotation"
                          className="bg-gradient-to-t from-green-500 to-green-600 hover:-translate-y-1 shadow duration-300 transition flex hover:bg-green-600 rounded-md px-3 py-2 text-white"
                          onClick={() => handleAddToCart(item)}
                        >
                          <PlusIcon className="w-4 h-4 mt-1 mr-2 text-white " />
                          Add
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl text-center mt-8 font-bold">Selected Products</h2>

      <div id="divToConvert" className="bg-blue-100 rounded-lg mt-4 p-5">
        {cartItems.length > 0 ? (
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ) : (
          <p className="text-center py-10">
            <ShoppingCartIcon className="w-8 h-8 mb-3 mx-auto text-slate-400" />{" "}
            Your cart is empty
          </p>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="flex justify-center items-center    gap-x-2  mx-auto mt-5">
          <div className="lg:flex   lg:gap-x-4 space-y-3 lg:space-y-0 w-full lg:w-full text-center">
            {/* onClick={generatePDF} */}
            <button
              onClick={handlePrintAsPDF}
              className="bg-red-500 dbutton hover:bg-red-600 w-auto mx-auto   text-white font-semibold text-base px-10 py-2 rounded-md "
            >
              <DocumentIcon className="w-5 inline mr-2 -mt-1" /> Download PDF
              Quotation{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
