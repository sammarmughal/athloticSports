import React from "react";
import { useState } from "react";
import { DocumentIcon, MinusIcon, PlusIcon, ShareIcon, XIcon } from "@heroicons/react/outline";
 import Image from "next/image";

const Cart = ({
  cartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  return (
     
   <div>
      <div className="mt-8 flex flex-col px-4">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
           
           <table className="min-w-full divide-y divide-gray-300 print:w-full cart">
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
                      Quantity{" "}
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
                  {cartItems.map((item) => (
                    <tr key={item.id} >
                      <td className=" py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-16 w-16 flex-shrink-0">
                             <Image
                              className="h-16 w-16 rounded-full border shadow"
                              src="/images/aam-pipes-logo.png"
                              alt="AAM PIPES" width={24} height={24}
                            /> 
                          </div>
                          <div className="ml-4 space-y-1">
                          <p className="font-bold">  {item.category}  </p>
                           <p className="text-slate-500">  {item.size + '"'} </p> 
                           <p className="text-indigo-600"> {item.quality} </p> 
                          </div>
                        </div>
                      </td>
                      <td className=" px-3 py-4 text-sm text-gray-500  ">
                        <div className="flex gap-x-4">
                          <button
                            onClick={() => decreaseQuantity(item)}
                            className="bg-slate-300 flex print:hidden justify-center items-center   duration-300 transition hover:bg-slate-600 rounded-full h-8 w-8   text-white"
                          >
                            <MinusIcon className="w-5 h-5 text-white " />
                          </button>
                          <span className="font-bold text-black text-lg">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increaseQuantity(item)}
                            className="bg-slate-300 print:hidden flex justify-center items-center   duration-300 transition hover:bg-slate-600 rounded-full h-8 w-8   text-white"
                          >
                            <PlusIcon className="w-5 h-5 text-white " />
                          </button>
                        </div>
                      </td>
                      <td className=" px-3 py-4 text-sm text-black font-bold">
                       Rs. {item.price * item.quantity} 
                      </td>

                      <td className="relative py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button
                          title="Remove from Quotation"
                          className="removebtn bg-gradient-to-t from-red-500 to-red-600 hover:-translate-y-1 shadow duration-300 transition flex hover:bg-red-600 rounded-md px-3 py-2 text-white"
                          onClick={() => removeFromCart(item)}
                        >
                          <XIcon className="w-5 h-5   text-white " />
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={2} />
                    <td className="font-bold text-lg py-2">
                      Total: {totalPrice} 
                    </td>
                    <td />
                  </tr>
                </tbody>
              </table> 
            </div>

            <div className="justify-center items-center hidden    gap-x-2  mx-auto mt-5">
              
             {/* <div className="lg:flex lg:gap-x-4 space-y-3 lg:space-y-0 w-full lg:w-auto"> <div className="bg-red-500 hover:bg-red-600  cursor-pointer text-white font-semibold text-base px-4 py-2 rounded-md ">
              <DocumentIcon className="w-5 inline mr-2 -mt-1"/>  Download PDF Quotation </div>
              
              <button   onClick={handleShareClick} disabled={!isMobileSharingSupported} className="bg-slate-500  hover:bg-slate-600 text-white   font-semibold cursor-pointer text-base px-4 py-2 rounded-md">
              <ShareIcon className="w-5 inline mr-2 -mt-1"/>Share Quotation 
              </button>
</div> */}

              {/* <div className="bg-slate-500  hover:bg-slate-600 text-white w-full lg:w-auto font-semibold cursor-pointer text-base px-4 py-2 rounded-md">
              <DocumentIcon className="w-5 inline mr-2 -mt-1"/>Send Email{" "}
              </div>
              <div className="bg-green-500  hover:bg-green-600 text-white w-full lg:w-auto font-semibold cursor-pointer text-base px-4 py-2 rounded-md">
              <DocumentIcon className="w-5 inline mr-2 -mt-1"/>Send WhatsApp{" "}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
     
  
  );
};

export default Cart;
