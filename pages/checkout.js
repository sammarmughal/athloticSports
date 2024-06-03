import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import MainHeader from "../components/mainheader";
import { PayPalButton } from "react-paypal-button-v2";


const CheckoutPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
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
  const addDonationInDB = async (name, amount) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_ENDPOINT}/api/donations/`,
        {
          method: "POST",
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
  
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [totalShipping, setTotalShipping] = useState(0);
  const [total, setTotal] = useState(0);

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
      const baseShipping = 300.99;
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
        <meta
          itemProp="image"
          content="https://aampipes.pk/_next/image?url=%2Fimages%2Faam-pipes-logo.png&w=128&q=75"
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
          name="twitter:image:src"
          content="https://aampipes.pk/_next/image?url=%2Fimages%2Faam-pipes-logo.png&w=128&q=75"
        />
        <meta
          property="og:title"
          content="Contact Athlotic Sports | Sports items Manufacturer Pakistan"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://aampipes.pk/_next/image?url=%2Fimages%2Faam-pipes-logo.png&w=128&q=75"
        />
        <meta
          property="og:description"
          content="Get in touch with Athlotic Sports, a leading manufacturer of Sport Uniforms and Accessories. Contact us today for reliable and efficient solutions!"
        />
        <meta property="og:locale" content="en" />
        <meta
          itemProp="image"
          content="https://aampipes.pk/_next/image?url=%2Fimages%2Faam-pipes-logo.png&w=128&q=75"
        />

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
            <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
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
          <div className="rounded-md">
            <form id="payment-form" method="POST" action="">
              <section>
                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                  Shipping & Billing Information
                </h2>
                <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Name</span>
                    <input
                      name="name"
                      className="focus:outline-none px-3"
                      placeholder="Try Odinsson"
                      required
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Email</span>
                    <input
                      name="email"
                      type="email"
                      className="focus:outline-none px-3"
                      placeholder="try@example.com"
                      required=""
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 pr-8 items-center">
                    <span className="text-right px-2">Address</span>
                    <input
                      name="address"
                      className="focus:outline-none w-full px-3"
                      placeholder="10 Street XYZ 654"
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">City</span>
                    <input
                      name="city"
                      className="focus:outline-none px-3"
                      placeholder="Lahore"
                    />
                  </label>
                  <label className="inline-flex w-2/4 border-gray-200 py-3">
                    <span className="text-right px-2">State</span>
                    <input
                      name="state"
                      className="focus:outline-none px-3"
                      placeholder="CA"
                    />
                  </label>
                  <label className="xl:w-1/4 xl:inline-flex py-3 items-center flex xl:border-none border-t border-gray-200 py-3">
                    <span className="text-right px-2 xl:px-0 xl:text-none">
                      ZIP
                    </span>
                    <input
                      name="postal_code"
                      className="focus:outline-none px-3"
                      placeholder="98603"
                    />
                  </label>
                </fieldset>
              </section>
            </form>
            <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 ml-1 mt-6 mb-2">
              Payment
            </h2>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
              {/* <div className="w-full p-5 border-b border-gray-200">
                <div className="mb-5">
                  <label
                    for="type1"
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 text-indigo-500"
                      name="type"
                      id="type1"
                    />
                    <img
                      src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                      className="h-6 ml-3"
                    />
                  </label>
                </div>
                <div>
                  <div className="mb-3">
                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                      Name on card
                    </label>
                    <div>
                      <input
                        className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="John Smith"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                      Card number
                    </label>
                    <div>
                      <input
                        className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="0000 0000 0000 0000"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="mb-3 -mx-2 flex items-end">
                    <div className="px-2 w-1/4">
                      <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                        Expiration date
                      </label>
                      <div>
                        <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                          <option value="01">01 - January</option>
                          <option value="02">02 - February</option>
                          <option value="03">03 - March</option>
                          <option value="04">04 - April</option>
                          <option value="05">05 - May</option>
                          <option value="06">06 - June</option>
                          <option value="07">07 - July</option>
                          <option value="08">08 - August</option>
                          <option value="09">09 - September</option>
                          <option value="10">10 - October</option>
                          <option value="11">11 - November</option>
                          <option value="12">12 - December</option>
                        </select>
                      </div>
                    </div>
                    <div className="px-2 w-1/4">
                      <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                      </select>
                    </div>
                    <div className="px-2 w-1/4">
                      <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                        Security code
                      </label>
                      <div>
                        <input
                          className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                          placeholder="000"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="w-full p-5">
                <label for="type2" className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-500"
                    name="type"
                    id="type2"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                    width="80"
                    className="ml-3"
                  />
                </label>
                <label
                  for="type3"
                  className="flex gap-3 items-center cursor-pointer my-5"
                >
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-500 "
                    name="type"
                    id="type3"
                  />
                  <p className="text-gray-600 font-semibold text-lg">
                    Cash On Delivery (COD)
                  </p>
                </label>
              </div>
              <button className="btn-action my-5 px-4 py-3 rounded-full text-white focus:ring focus:outline-none w-[90%] mx-auto flex justify-center text-xl font-semibold transition-colors">
                Order Now
              </button>
              {scriptLoaded ? (
                <PayPalButton
                  amount={total}
                  onSuccess={(details, data) => {
                    //save the transaction
                    // console.log(details);
                    addDonationInDB(details.payer.name.given_name);
                  }}
                />
              ) : (
                <span>Loading...</span>
              )}{" "}
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:my-16 sm:mr-12 mx-12  bg-white block mx-auto">
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
                    {product.category}
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

export default CheckoutPage;
//client id paypal
//AeFJ0aek4IyfSJ-wA-B_O_MAKkMFvk-wRQANsl1mVwbg1A0AuK2vSjekswaBDaLuY3fa72decdgxTP-i
