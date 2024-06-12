import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import withAuth from '../components/withAuth';
import MainHeader from "../components/mainheader";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID, // This will use the public client ID
  currency: "USD",
};

const CheckoutPage = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [totalShipping, setTotalShipping] = useState(0);
  const [total, setTotal] = useState(0);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    shipping_address: "",
    city: "",
    province: "",
    zip_code: "",
    phone: "",
  });

  const router = useRouter();

  useEffect(() => {
    const paypalScript = () => {
      const script = document.createElement("script");
      script.src = "https://www.paypal.com/sdk/js?client-id=AVagQDrpSiWLTEPxT3TmDjLQ2a0LiK-kKuA5n_lBIFaFgq9KMKi5EhPfmre69te6Ou_suu84AUoUFQL-";
      script.type = "text/javascript";
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    };
    paypalScript();
  }, []);

  useEffect(() => {
    if (router.query.cart) {
      const cartData = JSON.parse(router.query.cart);
      const calculatedSubTotal = cartData.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
      const totalQuantity = cartData.reduce((total, item) => total + item.quantity, 0);
      const baseShipping = 300.99;
      const additionalShippingPerItem = 120;
      const calculatedTotalShipping = baseShipping + (totalQuantity > 1 ? (totalQuantity - 1) * additionalShippingPerItem : 0);
      const calculatedTotal = (parseFloat(calculatedSubTotal) + calculatedTotalShipping).toFixed(2);
      setTotal(calculatedTotal);
    }
  }, [router.query.cart]);

  const addDonationInDB = async (name, amount) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_ENDPOINT}/api/donations/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, amount }),
      });
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

      const calculatedSubTotal = cartData.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
      setSubTotal(calculatedSubTotal);

      const totalQuantity = cartData.reduce((total, item) => total + item.quantity, 0);
      const baseShipping = 300.99;
      const additionalShippingPerItem = 120;
      const calculatedTotalShipping = baseShipping + (totalQuantity > 1 ? (totalQuantity - 1) * additionalShippingPerItem : 0);
      setTotalShipping(calculatedTotalShipping.toFixed(2));

      const calculatedTotal = (parseFloat(calculatedSubTotal) + calculatedTotalShipping).toFixed(2);
      setTotal(calculatedTotal);
    }
  }, [router.query.cart]);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      fetchUserDetails(storedUsername);
    } else {
      console.error("Username not found in local storage");
    }
  }, []);

  const fetchUserDetails = async (username) => {
    try {
      const response = await axios.get(`/api/user/getProfile?username=${username}`);
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

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=5, shrink-to-fit=no" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="generator" content="Getsol Inc." />
        <title>Checkout</title>
        <meta name="title" content="Contact Athlotic Sports | Sports items Manufacturer Pakistan" />
        <meta name="description" content="Get in touch with Athlotic Sports, a leading manufacturer of Sport Uniforms and Accessories. Contact us today for reliable and efficient solutions!" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Sardar Imran" />
        <meta itemProp="name" content="Contact Athlotic Sports | Sports items Manufacturer Pakistan" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Athlotic Sports | Sports items Manufacturer Pakistan" />
        <meta name="twitter:description" content="Get in touch with Athlotic Sports, a leading manufacturer of Sport Uniforms and Accessories. Contact us today for reliable and efficient solutions!" />
        <meta property="og:title" content="Contact Athlotic Sports | Sports items Manufacturer Pakistan" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Get in touch with Athlotic Sports, a leading manufacturer of Sport Uniforms and Accessories. Contact us today for reliable and efficient solutions!" />
        <meta property="og:locale" content="en" />
        <link rel="canonical" href="https://athlotic.com/contact-us" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>
      <MainHeader pageHeading="CHECKOUT" pageImg="checkout2.png" />

      <div className="sm:grid sm:grid-cols-3 flex flex-col-reverse bg-indigo-50">
        <div className="py-10 lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12">
          <div className="mt-6 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
            <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
              <div className="text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm font-medium ml-3">Checkout</div>
            </div>
            <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
              Complete your shipping and payment details below.
            </div>
            <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
          </div>
          <div className="rounded-md">
            <form id="payment-form" method="POST" action="">
              <section>
                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Shipping & Billing Information</h2>
                <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Name</span>
                    <input name="name" className="focus:outline-none px-3" placeholder="Try Odinsson" required value={userDetails.name} readOnly />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Email</span>
                    <input name="email" className="focus:outline-none px-3" placeholder="try@example.com" required value={userDetails.email} readOnly />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Address</span>
                    <input name="shipping_address" className="focus:outline-none px-3" placeholder="10 Street XYZ 654" required value={userDetails.shipping_address} readOnly />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">City</span>
                    <input name="city" className="focus:outline-none px-3" placeholder="San Francisco" required value={userDetails.city} readOnly />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">State/Province</span>
                    <input name="province" className="focus:outline-none px-3" placeholder="CA" required value={userDetails.province} readOnly />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">ZIP/Postal Code</span>
                    <input name="zip_code" className="focus:outline-none px-3" placeholder="98603" required value={userDetails.zip_code} readOnly />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Phone</span>
                    <input name="phone" className="focus:outline-none px-3" placeholder="98603" required value={userDetails.phone} readOnly />
                  </label>
                </fieldset>
              </section>
            </form>
          </div>
        </div>
        <div className="py-10 lg:col-span-1 col-span-3 bg-indigo-50 px-12">
          <div>
            <h1 className="py-4 text-xl font-semibold">Order Summary</h1>
            <ul className="py-4 space-y-6">
              {cart.map((item, index) => (
                <li key={index} className="grid grid-cols-6 gap-2 border-b-1">
                  <div className="col-span-1 self-center">
                    <img src={item.image_url} alt={item.name} className="rounded w-full" />
                  </div>
                  <div className="flex flex-col col-span-3 pt-2">
                    <span className="text-gray-600 text-md font-semi-bold">{item.name}</span>
                    <span className="text-gray-400 text-sm inline-block pt-2">{item.size} / {item.color}</span>
                  </div>
                  <div className="col-span-2 pt-3">
                    <div className="flex items-center space-x-2 text-sm justify-between">
                      <span className="text-gray-400">Qty: {item.quantity}</span>
                      <span className="text-indigo-600 font-semibold inline-block">{(item.price * item.quantity).toFixed(2)} USD</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t mb-2">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Subtotal</span>
                <span>${subTotal}</span>
              </div>
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Shipping</span>
                <span>${totalShipping}</span>
              </div>
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: total,
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    const name = details.payer.name.given_name;
                    alert("Transaction completed by " + name);
                    addDonationInDB(name, total);
                  });
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(CheckoutPage);
