import { useDispatch } from "react-redux";
import { addToCart } from "./store/cartSlice";
import React, { useState } from "react";
import Link from "next/link";

export default function CartButton({ product }) {
  const [selectedSize, setSelectedSize] = useState("m");
  const dispatch = useDispatch();

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, size: selectedSize }));
    setFormPopup(false); 
  };
  return (
    <>
      <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200 w-[90%] mx-auto">
        <div className="space-x-2 flex text-sm">
          {["xs", "s", "m", "l", "xl"].map((size) => (
            <label key={size}>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value={size}
                checked={selectedSize === size}
                onChange={handleSizeChange}
              />
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white ${
                  selectedSize === size
                    ? "font-semibold bg-slate-900 text-white"
                    : ""
                }`}
              >
                {size.toUpperCase()}
              </div>
            </label>
          ))}
        </div>
      </div>
      <Link href="/cart">
        <button
          onClick={handleAddToCart}
          className="w-[90%] flex justify-center mx-auto py-1 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none  cursor-pointer mb-8"
        >
          Add to Cart
        </button>
      </Link>
    </>
  );
}
