import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Swal from "sweetalert2";
import MainHeader from "../components/mainheader";

const SignupForm = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "", 
    email: "",
    password: "",
    username: "",
    age: "",
    gender: "",
    security_answer: "",
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const validateForm = () => {
    const formErrors = {};
    
    // Regular expression for a valid username (lowercase letters, digits, underscores, hyphens)
    const usernameRegex = /^[a-z0-9_-]+$/;
  
    if (!formData.name) formErrors.name = "Full Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    
    // Username validation
    if (!formData.username) {
      formErrors.username = "Username is required";
    } else if (!usernameRegex.test(formData.username)) {
      formErrors.username = "Username can only contain lowercase letters, digits, underscores, and hyphens";
    }
    
    if (!formData.age) formErrors.age = "Age is required";
    if (!formData.gender) formErrors.gender = "Gender is required";
    if (!formData.security_answer) formErrors.security_answer = "Childhood Name is required";
  
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: "Signup Successful",
          text: "You will be redirected to the login page.",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
          willClose: () => {
            router.push("/login");
          },
        });
      } else {
        const errorData = await response.json();
        if (response.status === 409) {
          Swal.fire({
            title: "Signup Failed",
            text: errorData.message,
            icon: "error",
          });
          setErrors({ email: errorData.message });
        } else {
          Swal.fire({
            title: "Signup Failed",
            text: "Error registering user. Please try again.",
            icon: "error",
          });
          setErrors({ general: "Error registering user. Please try again." });
        }
      }
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
      <MainHeader pageHeading="Welcome to Athlotic Sportswear! Please sign up." />
      <div className="sm:w-[40%] w-[90%] mx-auto my-20">
        <div className="signup-title py-8 sm:px-6 flex sm:flex-row flex-col items-center justify-between">
          <h3 className="text-center lg:text-3xl sm:text-2xl text-xl mb-4 font-semibold">
            Sign Up
          </h3>
          <div className="signup-other float-right text-gray-600">
            <span>
              Already a member?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Login
              </Link>{' '}
              here.
            </span>
          </div>
        </div>
        <div className="mx-auto bg-white sm:p-6 p-3">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm text-gray-600 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Please enter your full name"
                    className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded appearance-none focus:outline-none placeholder-gray-400 focus:border-blue-500`}
                  />
                  {errors.name && (
                    <div className="flex items-center justify-end mt-1">
                      <span className="text-red-500 text-xs">
                        {errors.name}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm text-gray-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Please enter your email"
                    className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded appearance-none focus:outline-none placeholder-gray-400 focus:border-blue-500`}
                  />
                  {errors.email && (
                    <div className="flex items-center justify-end mt-1">
                      <span className="text-red-500 text-xs">
                        {errors.email}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="text-sm text-gray-600 mb-1"
                  >
                    Password
                  </label>
                  <div className="w-full border border-gray-300 rounded-md px-3 py-2 sm:text-base text-xs text-gray-700 flex justify-between">
                    <input
                      type="password"
                      id="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Please enter your password"
                      className={`w-full placeholder-gray-400 focus:outline-none ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                     <button
                      type="button"
                      className="block"
                      onClick={() => setShow(!show)}
                    >
                      {show ? (
                        <div>
                          <i className="fas fa-eye text-lg"></i>
                        </div>
                      ) : (
                        <div>
                          <i className="fas fa-eye-slash text-lg"></i>
                        </div>
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <div className="flex items-center justify-end mt-1">
                      <span className="text-red-500 text-xs">
                        {errors.password}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="username"
                    className="text-sm text-gray-600 mb-1"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Please enter your username"
                    className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                      errors.username ? "border-red-500" : "border-gray-300"
                    } rounded appearance-none focus:outline-none placeholder-gray-400 focus:border-blue-500`}
                  />
                  {errors.username && (
                    <div className="flex items-center justify-end mt-1">
                      <span className="text-red-500 text-xs">
                        {errors.username}
                      </span>
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
                    placeholder="Please enter your age"
                    className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                      errors.age ? "border-red-500" : "border-gray-300"
                    } rounded appearance-none focus:outline-none placeholder-gray-400 focus:border-blue-500`}
                  />
                  {errors.age && (
                    <div className="flex items-center justify-end mt-1">
                      <span className="text-red-500 text-xs">{errors.age}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="gender"
                    className="text-sm text-gray-600 mb-1"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                      errors.gender ? "border-red-500" : "border-gray-300"
                    } rounded appearance-none focus:outline-none placeholder-gray-400 focus:border-blue-500`}
                  >
                    <option value="">Select a Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="others">Others</option>
                  </select>
                  {errors.gender && (
                    <div className="flex items-center justify-end mt-1">
                      <span className="text-red-500 text-xs">
                        {errors.gender}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="security_answer"
                    className="block mb-2 text-sm font-bold text-gray-700"
                  >
                     <br></br><strong>REMEMBER THIS AS THIS WILL BE USED TO RESET YOUR PASSWORD IF YOU FORGET IT !</strong><br></br>What was your Childhood Nickname? 
                  </label>
                  <input
                    className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                      errors.security_answer
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded appearance-none focus:outline-none placeholder-gray-400 focus:border-blue-500`}
                    id="security_answer"
                    type="text"
                    value={formData.security_answer}
                    onChange={handleInputChange}
                    placeholder="Enter Your Childhood Name"
                  />
                  {errors.security_answer && (
                    <div className="flex items-center justify-end mt-1">
                      <span className="text-red-500 text-xs">
                        {errors.security_answer}
                      </span>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-3 btn-action rounded-full text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  SIGN UP
                </button>
                {errors.general && (
                  <div className="text-red-500 mt-2 text-sm text-center">
                    {errors.general}
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
