import Reac, { useState } from "react";
import Head from "next/head";
import MainHeader from "../components/mainheader";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Link from "next/link";

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        username: '',
        age: '',
        gender: '',
      });
    
      const [errors, setErrors] = useState({});
      const [show, setShow] = useState(false);
    
      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
          ...formData,
          [id]: value,
        });
      };
    
      const validateForm = () => {
        let formErrors = {};
        if (!formData.fullName) {
          formErrors.fullName = 'Full Name is required';
        }
    
        if (!formData.email) {
          formErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          formErrors.email = 'Invalid Email';
        }
    
        if (!formData.password) {
          formErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
          formErrors.password = 'Password must be at least 6 characters long';
        } else if (!/(?=.*[0-9])(?=.*[a-zA-Z])/.test(formData.password)) {
          formErrors.password = 'Password must contain both letters and numbers';
        }
    
        if (!formData.username) {
          formErrors.username = 'Username is required';
        }
    
        if (!formData.age) {
          formErrors.age = 'Age is required';
        } else if (isNaN(formData.age) || formData.age <= 0) {
          formErrors.age = 'Invalid Age';
        }
    
        if (!formData.gender) {
          formErrors.gender = 'Gender is required';
        }
    
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          // Handle form submission
          console.log('Form submitted', formData);
        }
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
        <title>SignUp</title>
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
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        ></link>
        <link rel="canonical" href="https://athlotic.com/contact-us" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>
      <MainHeader pageHeading="SIGN UP" pageImg="" />

      <div className=" w-[70%] mx-auto my-20">
        <div className="login-title py-8 px-6 flex sm:flex-row flex-col items-center justify-between">
          <h3 className="text-center lg:text-3xl sm:text-2xl text-xl mb-4 font-semibold">
            Create your Athlotic Sportswear Account.
          </h3>
          <div className="login-other float-right text-gray-600">
            <span>
              Already member?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Login
              </Link>{" "}
              here.
            </span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl">
           <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-sm text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Please enter your first and last name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs sm:text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            {errors.fullName && (
              <div className="flex items-center justify-end mt-1">
                <span className="text-red-500 text-xs">{errors.fullName}</span>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-600 mb-1">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Please enter your Email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs sm:text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            {errors.email && (
              <div className="flex items-center justify-end mt-1">
                <span className="text-red-500 text-xs">{errors.email}</span>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm text-gray-600 mb-1">
              Password
            </label>
            <div className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs sm:text-base text-gray-700 flex justify-between">
              <input
                type={show ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Minimum 6 characters with number and letter"
                className="w-full placeholder-gray-400 focus:outline-none"
              />
              <button type="button" className="block" onClick={() => setShow(!show)}>
                {show ? (
                  <div><i className="fas fa-eye text-lg"></i></div>
                ) : (
                  <div><i className="fas fa-eye-slash text-lg"></i></div>
                )}
              </button>
            </div>
            {errors.password && (
              <div className="flex items-center justify-end mt-1">
                <span className="text-red-500 text-xs">{errors.password}</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm text-gray-600 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Please enter your username"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs sm:text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            {errors.username && (
              <div className="flex items-center justify-end mt-1">
                <span className="text-red-500 text-xs">{errors.username}</span>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="age" className="text-sm text-gray-600 mb-1">
              Age
            </label>
            <input
              type="number"
              id="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Enter your age"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs sm:text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            {errors.age && (
              <div className="flex items-center justify-end mt-1">
                <span className="text-red-500 text-xs">{errors.age}</span>
              </div>
            )}
          </div>
          <div className="flex flex-col mb-5 mt-2">
            <label htmlFor="gender" className="text-sm text-gray-600 mb-1">
              Gender
            </label>
            <select
              id="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs sm:text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select a Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
            {errors.gender && (
              <div className="flex items-center justify-end mt-1">
                <span className="text-red-500 text-xs">{errors.gender}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-6 w-[50%] mx-auto">
        <button
          type="submit"
          className="w-full mx-auto justify-center py-3 btn-action rounded-full text-white font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          SIGNUP
        </button>
      </div>
    </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
