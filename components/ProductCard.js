import Link from "next/link";
import React from "react";
import { useDispatch } from 'react-redux';
import { increment } from '../components/store/cartSlice';
export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(increment());
  };
  return (
    <div className="flex flex-col gap-2">
      <div key={product.id} className="group relative">
        <Link href={`/product/${product.id}`} className="cursor-pointer">
          <div className="w-full min-h-90 rounded-lg border aspect-w-1 aspect-h-1 shadow    overflow-hidden group-hover:opacity-75 group-hover:-translate-y-2 transition-all duration-300 lg:h-60 lg:aspect-none">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="w-full h-full cursor-pointer object-center object-contain hover:object-scale-down lg:w-full lg:h-full"
            />

          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                <div>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </div>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.details}</p>
            </div>
          </div>
        </Link>
        <p className="text-sm mt-2 text-stone-500">{product.features}</p>
      </div>
      <div className="flex flex-col flex-wrap md:flex-row justify-between items-center text-gray-900">
        <p className="font-bold text-lg"> PKR 2,000 </p>
        <Link href="#"><button className="add-cart mx-1" onClick={addToCart}> Add to Cart</button></Link>
      </div>
    </div>
  );
}