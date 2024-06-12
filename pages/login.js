import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Swal from "sweetalert2";
import Head from "next/head";
import MainHeader from "../components/mainheader";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    loginInput: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.loginInput)
      formErrors.loginInput = "Email/Username is required";
    else if (/[A-Z]/.test(formData.loginInput)) {
      formErrors.loginInput = "Username must not contain uppercase letters";
    }
    if (!formData.password) formErrors.password = "Password is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("accessToken", data.token);
          localStorage.setItem("username", formData.loginInput); // Store the username
          localStorage.setItem("role", data.role);

          Swal.fire({
            title: "Login Successful",
            text: "You will be redirected shortly",
            icon: "success",
            timer: 2000,
            timerProgressBar: true,
            
            willClose: () => {
              const username = formData.loginInput;
              if (data.role === "user") {
                router.push(`/user-dashboard/${username}/profile`);
              } else if (data.role === "admin") {
                router.push(`/admin-portal/${username}`);
              }
            },
          });
        } else {
          Swal.fire({
            title: "Login Failed",
            text: "Please check your credentials and try again",
            icon: "error",
          });
        }
      } catch (error) {
        console.error("Login error:", error);
        Swal.fire({
          title: "Login Error",
          text: "An unexpected error occurred. Please try again later.",
          icon: "error",
        });
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
        <title>Login</title>
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
      <MainHeader pageHeading="Welcome to Athlotic Sportswear! Please login." />
      <div className="sm:w-[40%] w-[90%] mx-auto my-20">
        <div className="login-title py-8 sm:px-6 flex sm:flex-row flex-col items-center justify-between">
          <h3 className="text-center lg:text-3xl sm:text-2xl text-xl mb-4 font-semibold">
            Login
          </h3>
          <div className="login-other float-right text-gray-600">
            <span>
              New member?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Register
              </Link>{" "}
              here.
            </span>
          </div>
        </div>
        <div className="mx-auto bg-white sm:p-6 p-3">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="loginInput"
                    className="text-sm text-gray-600 mb-1"
                  >
                    Email/Username
                  </label>
                  <input
                    type="text"
                    id="loginInput"
                    value={formData.loginInput}
                    onChange={handleInputChange}
                    placeholder="Please enter your Email/Username"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 sm:text-base text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  {errors.loginInput && (
                    <div className="flex items-center text-red-600 text-xs mt-1">
                      <span>{errors.loginInput}</span>
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
                  <input
                    type={show ? "text" : "password"}
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Please enter your password"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 sm:text-base text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  {errors.password && (
                    <div className="flex items-center text-red-600 text-xs mt-1">
                      <span>{errors.password}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="show-password"
                    checked={show}
                    onChange={() => setShow(!show)}
                    className="mr-2"
                  />
                  <label htmlFor="show-password" className="text-sm text-gray-600">
                    Show Password
                  </label>
                </div>
                <div className="text-right mt-2">
                  <Link href="/forgetpassword">
                    <p className="text-xs text-blue-600">Reset Your Password</p>
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 btn-action rounded-full text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
