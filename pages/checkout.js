import React, { useState, useEffect } from "react";
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
  components: "buttons"
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
  const [selectedPayment, setSelectedPayment] = useState('cod');
  const router = useRouter();

  useEffect(() => {
    const paypalScript = () => {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`;
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
      const baseShipping = 0;
      const additionalShippingPerItem = 120;
      const calculatedTotalShipping =
        baseShipping +
        (totalQuantity > 1
          ? (totalQuantity - 1) * additionalShippingPerItem
          : 0);
      const calculatedTotal = (
        parseFloat(calculatedSubTotal) + calculatedTotalShipping
      ).toFixed(2);
      setSubTotal(calculatedSubTotal);
      setTotalShipping(calculatedTotalShipping.toFixed(2));
      setTotal(calculatedTotal);
      setCart(cartData);
    }
  }, [router.query.cart]);

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

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      fetchUserDetails(storedUsername);
    } else {
      console.error("Username not found in local storage");
    }
  }, []);

  const createOrder = async () => {
    try {
      if (cart.length === 0) {
        alert("Cart is empty. Please add items to proceed with the order.");
        return;
      }

      // Map cart items to the required order_items structure
      const orderItems = cart.map(item => ({
        sku_id: item.sku_id,
        quantity: item.quantity,
        unit_price: item.price,
        size: item.size,
        subtotal: item.price * item.quantity,
        image_url: item.image_url,
        product_name: item.product_name,
      }));

      const orderDetails = {
        username,
        total_amount: total,
        shipping_address: `${userDetails.shipping_address}, ${userDetails.city}, ${userDetails.zip_code}, ${userDetails.province}`,
        phone: userDetails.phone,
        order_items: orderItems // Ensure order_items is an array of objects
      };

      const response = await axios.post('/api/orders/create', orderDetails);

      console.log(response)

      if (response) {
        alert("Order placed successfully");
        router.push('/user-dashboard/${username}/order');
      } else {
        alert("Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred while placing the order. Please try again later.");
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
          {isVisible && (
            <div className="mt-6 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
              <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                <div className="text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C6.476 2 2 6.477 2 12s4.477 10 10 10c2.112 0 4.145-.652 5.847-1.887c.466-.328 1.111-.196 1.437.272c.326.467.196 1.112-.272 1.438A11.958 11.958 0 0 1 12 22C5.935 22 1 17.065 1 11S5.935 0 12 0s11 4.935 11 11c0 2.282-.682 4.387-1.887 6.153c-.323.477-.97.609-1.437.272c-.467-.324-.598-.97-.272-1.437A9.961 9.961 0 0 0 21 11c0-5.523-4.477-10-10-10zm1 9V5a1 1 0 1 0-2 0v7c0 .552.447 1 1 1h5a1 1 0 1 0 0-2h-4z"></path>
                  </svg>
                </div>
                <div className="text-sm font-medium ml-3">Checkout Process</div>
              </div>
              <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Please select a payment method.</div>
              <button onClick={handleClose} className="absolute sm:relative sm:ml-auto sm:pl-10 right-2 top-2 sm:top-auto sm:right-auto">
                <svg className="w-4 h-4 text-gray-400 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          <div className="bg-white rounded-md">
            <div>
              <div className="p-4 flex justify-between">
                <h2 className="text-lg font-medium text-gray-700">Shipping Information</h2>
                <Link href={`/user-dashboard/${username}/profile`}>
                  EDIT
                </Link>
              </div>
              <div className="grid grid-cols-6 gap-6 p-4">
                {[
                  { label: "Name", value: userDetails.name },
                  { label: "Email Address", value: userDetails.email },
                  { label: "Shipping Address", value: userDetails.shipping_address },
                  { label: "City", value: userDetails.city },
                  { label: "Province", value: userDetails.province },
                  { label: "Zip Code", value: userDetails.zip_code },
                  { label: "Phone", value: userDetails.phone }
                ].map((field, index) => (
                  <div key={index} className={`col-span-6 sm:col-span-${index < 2 ? 3 : 6}`}>
                    <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                    <div className="mt-1">{field.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md">
            <div className="p-4 flex justify-between">  
              <h2 className="text-lg font-medium text-gray-700">Order Summary</h2>
            </div>
            <div className="grid grid-cols-6 gap-6 p-4">
              {cart.map((item, index) => {
                return (
                  <div key={index} className="col-span-6 flex items-center">
                    <img src={item.image_url} alt={item.name} className="w-16 h-16 object-cover" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-700">{item.name}</div>
                      <div className="text-sm text-gray-500">Size: {item.size}</div>
                      <div className="text-sm text-gray-500">Quantity: {item.quantity}</div>
                      <div className="text-sm text-gray-500">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-white rounded-md">
            <div className="p-4 flex justify-between">
              <h2 className="text-lg font-medium text-gray-700">Payment Method</h2>
            </div>
            <div className="p-4 flex flex-col">
              <div className="flex items-center mb-4">
                <input type="radio" id="cod" name="payment-method" className="mr-2" checked={selectedPayment === 'cod'} onChange={handlePaymentChange} />
                <label htmlFor="cod" className="text-gray-700">Cash on Delivery</label>
              </div>
              <div className="flex items-center mb-4">
                <input type="radio" id="paypal" name="payment-method" className="mr-2" checked={selectedPayment === 'paypal'} onChange={handlePaymentChange} />
                <label htmlFor="paypal" className="text-gray-700">PayPal</label>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md">
            <div className="p-4 flex justify-between">
              <h2 className="text-lg font-medium text-gray-700">Order Total</h2>
              <div className="text-lg font-medium text-gray-700">${total}</div>
            </div>
          </div>

          <div className="bg-white rounded-md">
            <div className="p-4 flex justify-between">
              {selectedPayment === 'cod' ? (
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-md" onClick={createOrder}>Order Now</button>
              ) : (
                scriptLoaded && (
                  <PayPalScriptProvider options={initialOptions}>
                    <PayPalButtons style={{ layout: "vertical" }} createOrder={(data, actions) => actions.order.create({
                      purchase_units: [{
                        amount: {
                          value: total,
                        },
                      }],
                    })} onApprove={(data, actions) => actions.order.capture().then(details => {
                      alert(`Transaction completed by ${details.payer.name.given_name}`);
                      createOrder();
                    })} />
                  </PayPalScriptProvider>
                )
              )}
            </div>
          </div>

        </div>
        <div className="sm:px-4 sm:py-10 py-10 sm:col-span-1 col-span-3">
          <div className="px-4 lg:px-8 py-10 bg-gray-100 bg-opacity-50 rounded-md">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Order Summary</h2>
            <div className="text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>Subtotal</span>
                <span>${subTotal}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>Shipping</span>
                <span>${totalShipping}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>Total</span>
                <span className="font-medium text-gray-900">${total}</span>
              </div>
            </div>
            <div className="mt-6">
              {selectedPayment === 'paypal' && scriptLoaded && (
                <PayPalScriptProvider options={initialOptions}>
                  <PayPalButtons style={{ layout: "vertical" }} createOrder={(data, actions) => actions.order.create({
                    purchase_units: [{
                      amount: {
                        value: total,
                      },
                    }],
                  })} onApprove={(data, actions) => actions.order.capture().then(details => {
                    alert(`Transaction completed by ${details.payer.name.given_name}`);
                    createOrder();
                  })} />
                </PayPalScriptProvider>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(CheckoutPage, ['user']);

