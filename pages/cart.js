import { useRouter } from "next/router";
import Head from "next/head";
import MainHeader from "../components/mainheader";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../components/store/cartSlice";

export default function CartPage() {
  const router = useRouter();
  const cart = useSelector((state) => state.cart.items); // Correctly access cart items
  const dispatch = useDispatch();

  const handleIncrement = (sku_id, size) => {
    dispatch(incrementQuantity({ sku_id, size }));
  };

  const handleDecrement = (sku_id, size) => {
    dispatch(decrementQuantity({ sku_id, size }));
  };

  const handleRemove = (sku_id, size) => {
    dispatch(removeFromCart({ sku_id, size }));
  };

  const subTotal = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const shippingPerItem = 120; // Assuming a fixed shipping cost per item
  const totalShipping = totalQuantity * shippingPerItem;

  const total = (parseFloat(subTotal) + totalShipping).toFixed(2);

  const handleCheckout = () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      router.push("/login");
    } else {
      const cartData = JSON.stringify(cart);
      router.push({
        pathname: "/checkout",
        query: { cart: cartData },
      });
    }
  };

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <MainHeader pageHeading="CART ITEMS" pageImg="cart.jpg" />
      <div className="bg-gray-100 pt-20">
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cart.map((product) => (
              <div
                key={`${product.sku_id}-${product.size}`}
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <Image
                  src={product.image_url}
                  alt={product.image_alt}
                  className="w-full rounded-lg sm:w-40"
                  width={150}
                  height={160}
                />
                <div className="sm:ml-4 sm:flex mt-2 sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {product.product_name}
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">
                      {product.category} - Size: {product.size}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span
                        onClick={() =>
                          handleDecrement(product.sku_id, product.size)
                        }
                        className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      >
                        {" "}
                        -{" "}
                      </span>
                      <input
                        className="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        value={product.quantity}
                        readOnly
                      />
                      <span
                        onClick={() =>
                          handleIncrement(product.sku_id, product.size)
                        }
                        className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      >
                        {" "}
                        +{" "}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">PKR {product.price}</p>
                      <svg
                        onClick={() => handleRemove(product.sku_id, product.size)}
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
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">PKR {subTotal}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">PKR {totalShipping.toFixed(2)}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div>
                <p className="mb-1 text-lg font-bold">PKR {total}</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="btn-action w-full flex justify-center items-center mx-auto mt-4"
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
