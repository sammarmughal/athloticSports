import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import withAuth from "../components/withAuth";
import axios from "axios";
import MainHeader from "../components/mainheader";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Link from "next/link";

const initialOptions = {
  "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  currency: "USD",
};
const CheckoutPage = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [totalShipping, setTotalShipping] = useState(0);
  const [total, setTotal] = useState(0);
  const [username, setUsername] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    shipping_address: "",
    city: "",
    province: "",
    zip_code: "",
    phone: "",
  });
  const [isVisible, setIsVisible] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState('type2'); 
  const router = useRouter();
  useEffect(() => {
    const paypalScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AVagQDrpSiWLTEPxT3TmDjLQ2a0LiK-kKuA5n_lBIFaFgq9KMKi5EhPfmre69te6Ou_suu84AUoUFQL-";
      script.type = "text/javascript";
      script.async = true;
      script.onload = () => setScriptLoaded(true);

      document.body.appendChild(script);
    };
    paypalScript();
  }, []);

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.id);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (router.query.cart) {
      const cartData = JSON.parse(router.query.cart);
      const calculatedSubTotal = cartData
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2);
      const totalQuantity = cartData.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const baseShipping = 300.99;
      const additionalShippingPerItem = 120;
      const calculatedTotalShipping =
        baseShipping +
        (totalQuantity > 1
          ? (totalQuantity - 1) * additionalShippingPerItem
          : 0);
      const calculatedTotal = (
        parseFloat(calculatedSubTotal) + calculatedTotalShipping
      ).toFixed(2);
      setTotal(calculatedTotal);
    }
  }, [router.query.cart]);
  const addDonationInDB = async (name, amount) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_ENDPOINT}/api/donations/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            amount,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (router.query.cart) {
      const cartData = JSON.parse(router.query.cart);
      setCart(cartData);

      const calculatedSubTotal = cartData
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2);
      setSubTotal(calculatedSubTotal);

      const totalQuantity = cartData.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const baseShipping = 120;
      const additionalShippingPerItem = 120;
      const calculatedTotalShipping =
        baseShipping +
        (totalQuantity > 1
          ? (totalQuantity - 1) * additionalShippingPerItem
          : 0);
      setTotalShipping(calculatedTotalShipping.toFixed(2));

      const calculatedTotal = (
        parseFloat(calculatedSubTotal) + calculatedTotalShipping
      ).toFixed(2);
      setTotal(calculatedTotal);
    }
  }, [router.query.cart]);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
    if (storedUsername) {
      fetchUserDetails(storedUsername);
    } else {
      console.error("Username not found in local storage");
    }
  }, []);

  const fetchUserDetails = async (username) => {
    try {
      const response = await axios.get(
        `/api/user/getProfile?username=${username}`
      );
      const userData = response.data;
      setUserDetails({
        name: userData.name,
        email: userData.email,
        shipping_address: userData.shipping_address,
        city: userData.city,
        province: userData.province,
        zip_code: userData.zip_code,
        phone: userData.phone,
      });
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
  
  const initialOptions = {
    "client-id":
      "AVagQDrpSiWLTEPxT3TmDjLQ2a0LiK-kKuA5n_lBIFaFgq9KMKi5EhPfmre69te6Ou_suu84AUoUFQL-",
    currency: "USD",
    "disable-funding": "credit,card",
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
        <title>Checkout</title>
        <meta
          name="title"
          content="Contact Athlotic Sports | Sports items Manufacturer Pakistan"
        />
        <meta
          name="description"
          content="Get in touch with Athlotic Sports, a leading manufacturer of Sport Uniforms and Accessories. Contact us today for reliable and efficient solutions!"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Sardar Imran" />
        <meta
          itemProp="name"
          content="Contact Athlotic Sports | Sports items Manufacturer Pakistan"
        />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Contact Athlotic Sports | Sports items Manufacturer Pakistan"
        />
        <meta
          name="twitter:description"
          content="Get in touch with Athlotic Sports, a leading manufacturer of Sport Uniforms and Accessories. Contact us today for reliable and efficient solutions!"
        />

        <meta
          property="og:title"
          content="Contact Athlotic Sports | Sports items Manufacturer Pakistan"
        />
        <meta property="og:type" content="article" />

        <meta
          property="og:description"
          content="Get in touch with Athlotic Sports, a leading manufacturer of Sport Uniforms and Accessories. Contact us today for reliable and efficient solutions!"
        />
        <meta property="og:locale" content="en" />
        <link rel="canonical" href="https://athlotic.com/contact-us" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>
      <MainHeader pageHeading="CHECKOUT" pageImg="checkout2.png" />
      <div className="sm:grid sm:grid-cols-3 flex flex-col-reverse bg-indigo-50">
        <div className="py-10 lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12">
          {isVisible && (
            <div className="mt-6 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
              <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                <div className="text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 sm:w-5 h-6 sm:h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-sm font-medium ml-3">Checkout</div>
              </div>
              <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
                Complete your shipping and payment details below.
              </div>
              <div
                className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer"
                onClick={handleClose}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            </div>
          )}
          <div className="rounded-md">
            <form id="payment-form" method="POST" action="">
              <section>
                <div className="flex flex-row justify-between items-center mb-4">
                  <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                    Shipping & Billing Information
                  </h2>

                  <Link href={`/user-dashboard/${username}/profile`}>
                    <button className="btn-action my-3 px-4 py-2 rounded-full text-white focus:ring focus:outline-none mx-auto flex justify-center text-sm font-semibold">
                      Click to Edit or Add Address
                    </button>
                  </Link>
                </div>

                <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right text-lg font-bold px-2">
                      Name
                    </span>
                    <input
                      name="name"
                      className="focus:outline-none px-3"
                      placeholder="Try Odinsson"
                      required
                      value={userDetails.name}
                      readOnly
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right text-lg font-bold px-2">
                      Email
                    </span>
                    <input
                      name="email"
                      className="focus:outline-none w-full px-3"
                      placeholder="try@example.com"
                      required
                      value={userDetails.email}
                      readOnly
                    />
                  </label>
                  <label className="flex border-b border-gray-200 w-full h-12 py-3 items-center">
                    <span className="text-right text-lg font-bold px-2">
                      Address
                    </span>
                    <input
                      name="shipping_address"
                      className="focus:outline-none w-full px-3"
                      placeholder="10 Street XYZ 654"
                      required
                      value={userDetails.shipping_address}
                      readOnly
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right text-lg font-bold px-2">
                      City
                    </span>
                    <input
                      name="city"
                      className="focus:outline-none px-3"
                      placeholder="San Francisco"
                      required
                      value={userDetails.city}
                      readOnly
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right text-lg font-bold px-2">
                      State
                    </span>
                    <input
                      name="province"
                      className="focus:outline-none px-3"
                      placeholder="CA"
                      required
                      value={userDetails.province}
                      readOnly
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right text-lg font-bold px-2">
                      ZIP Code
                    </span>
                    <input
                      name="zip_code"
                      className="focus:outline-none px-3"
                      placeholder="98603"
                      required
                      value={userDetails.zip_code}
                      readOnly
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right text-lg font-bold px-2">
                      Phone
                    </span>
                    <input
                      name="phone"
                      className="focus:outline-none px-3"
                      placeholder="98603"
                      required
                      value={userDetails.phone}
                      readOnly
                    />
                  </label>
                </fieldset>
              </section>
            </form>
            <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 ml-1 mt-6 mb-2">
              Payment
            </h2>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
              <div className="w-full p-5">
                <label
                  htmlFor="type2"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-500"
                    name="type"
                    id="type2"
                    checked={selectedPayment === "type2"}
                    onChange={handlePaymentChange}
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                    width="80"
                    className="ml-3"
                  />
                </label>
                <label
                  htmlFor="type3"
                  className="flex gap-3 items-center cursor-pointer my-5"
                >
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-500"
                    name="type"
                    id="type3"
                    checked={selectedPayment === "type3"}
                    onChange={handlePaymentChange}
                  />
                  <p className="text-gray-600 font-semibold text-lg">
                    Cash On Delivery (COD)
                  </p>
                </label>
              </div>
              <button className="btn-action my-5 px-4 py-3 rounded-full text-white focus:ring focus:outline-none w-[90%] mx-auto flex justify-center text-xl font-semibold transition-colors">
                Order Now
              </button>
              <div className="w-full mx-auto justify-center">
                {scriptLoaded ? (
                  <PayPalScriptProvider options={initialOptions}>
                    <PayPalButtons
                      style={{ layout: "vertical" }}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: total.toString(), // Total amount to be paid
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                          const payerName = details.payer.name.given_name;
                          addDonationInDB(payerName, total);
                          alert(`Transaction completed by ${payerName}`);
                        });
                      }}
                      onError={(err) => {
                        console.error("PayPal Checkout onError", err);
                      }}
                    />
                  </PayPalScriptProvider>
                ) : (
                  <span>Loading...</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:my-16 sm:mr-12 mx-12 bg-white block mx-auto">
          <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
            Order Summary
          </h1>
          {cart.map((product) => (
            <div
              key={product.sku_id}
              className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
            >
              <img
                src={product.image_url}
                alt={product.image_alt}
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    {product.product_name}
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">
                    {product.category} Size: {product.size}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">PKR {product.price}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="px-8 border-b">
            <div className="flex justify-between py-4 text-gray-600">
              <span>Subtotal</span>
              <span className="font-semibold text-blue-600">
                PKR {subTotal}
              </span>
            </div>
            <div className="flex justify-between py-4 text-gray-600">
              <span>Shipping</span>
              <span className="font-semibold text-blue-600">
                PKR {totalShipping}
              </span>
            </div>
          </div>
          <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
            <span>Total</span>
            <span>PKR {total}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(CheckoutPage, ["user"]);
