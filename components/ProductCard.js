import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./store/cartSlice";
export default function ProductCard({ product }) {
  const [formPopup, setFormPopup] = useState(false);
  const [selectedSize, setSelectedSize] = useState("m");
  const dispatch = useDispatch();
  const handlePopup = () => {
    setFormPopup(!formPopup);
  };
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  const formatPrice = (price) => {
    return price.toString().endsWith(".00")
      ? price.toString().slice(0, -3)
      : price;
  };
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  return (
    <div className="flex flex-col gap-2">
      <div key={product.id} className="group relative">
        <Link href={`/product/${product.sku_id}`} className="cursor-pointer">
          <div className="w-full min-h-90 rounded-lg border aspect-w-1 aspect-h-1 shadow    overflow-hidden group-hover:opacity-75 group-hover:-translate-y-2 transition-all duration-300 lg:h-60 lg:aspect-none">
            <Image
              src={product.image_url}
              alt={product.image_alt}
              height={400}
              width={400}
              className="w-full h-full cursor-pointer object-center object-contain hover:object-scale-down lg:w-full lg:h-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                <div>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.product_name}
                </div>
              </h3>
              {/* <p className="mt-1 text-sm text-gray-500">{product.sku_id}</p> */}
            </div>
          </div>
        </Link>
        <p className="text-sm mt-2 text-stone-500">High Quality Wear</p>
      </div>
      <div className="flex flex-col flex-wrap md:flex-row justify-between items-center text-gray-900">
        <p className="font-bold text-lg">PKR {formatPrice(product.price)}</p>
        <Link href="#">
          <button className="add-cart mx-1" onClick={handlePopup}>
            {" "}
            Add to Cart
          </button>
        </Link>
      </div>
      {formPopup && (
        <div className="fixed inset-0 mt-36 z-40">
          <div className="w-full md:w-[40%] bg-white md:max-w-full z-40 mx-auto">
            <div className="p-6 border border-gray-300 sm:rounded-md">
              <div className="flex justify-between">
                <span className="text-xl font-semibold block">
                {product.product_name}
                </span>
                <svg
                  onClick={handlePopup}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <form>
              <div className="space-x-2 flex text-sm">
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="xs"
                    checked={selectedSize === "xs"}
                    onChange={handleSizeChange}
                  />
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white ${
                      selectedSize === "xs"
                        ? "font-semibold bg-slate-900 text-white"
                        : ""
                    }`}
                  >
                    XS
                  </div>
                </label>
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="s"
                    checked={selectedSize === "s"}
                    onChange={handleSizeChange}
                  />
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center  hover:bg-slate-900 hover:text-white text-slate-700 ${
                      selectedSize === "s"
                        ? "font-semibold bg-slate-900 text-white"
                        : ""
                    }`}
                  >
                    S
                  </div>
                </label>
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="m"
                    checked={selectedSize === "m"}
                    onChange={handleSizeChange}
                  />
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center  hover:bg-slate-900 hover:text-white text-slate-700 ${
                      selectedSize === "m"
                        ? "font-semibold bg-slate-900 text-white"
                        : ""
                    }`}
                  >
                    M
                  </div>
                </label>
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="l"
                    checked={selectedSize === "l"}
                    onChange={handleSizeChange}
                  />
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center  hover:bg-slate-900 hover:text-white text-slate-700 ${
                      selectedSize === "l"
                        ? "font-semibold bg-slate-900 text-white"
                        : ""
                    }`}
                  >
                    L
                  </div>
                </label>
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="xl"
                    checked={selectedSize === "xl"}
                    onChange={handleSizeChange}
                  />
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center  hover:bg-slate-900 hover:text-white text-slate-700 ${
                      selectedSize === "xl"
                        ? "font-semibold bg-slate-900 text-white"
                        : ""
                    }`}
                  >
                    XL
                  </div>
                </label>
              </div>
                <div className="mb-6 w-full flex justify-end">
                  <Link onClick={handlePopup} href="#">
                    <button className="add-cart mx-1" onClick={handleAddToCart}>
                      {" "}
                      Add to Cart
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
