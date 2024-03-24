import React, { useState } from 'react';
import Head from 'next/head';
import MainHeader from "../components/mainheader";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Link from 'next/link';

const LoginForm = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta content='width=device-width, initial-scale=1.0, maximum-scale=5, shrink-to-fit=no' name='viewport' />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="generator" content="Getsol Inc." />
                <title>Login</title>
                <meta name="title" content="Contact Athlotic Sports | Sports items Manufacturer Pakistan" />
                <meta name="description" content="Get in touch with Athlotic Sports, a leading manufacturer of Sport Uniforms and Accessories. Contact us today for reliable and efficient solutions!" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="1 days" />
                <meta name="author" content="Sardar Imran" />
                <meta itemProp="name" content="Contact Athlotic Sports | Sports items Manufacturer Pakistan" />
                <meta itemProp="image" content="https://aampipes.pk/_next/image?url=%2Fimages%2Faam-pipes-logo.png&w=128&q=75" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Contact Athlotic Sports | Sports items Manufacturer Pakistan" />
                <meta name="twitter:description" content="Get in touch with Athlotic Sports, a leading manufacturer of Sport Uniforms and Accessories. Contact us today for reliable and efficient solutions!" />
                <meta name="twitter:image:src" content="https://aampipes.pk/_next/image?url=%2Fimages%2Faam-pipes-logo.png&w=128&q=75" />
                <meta property="og:title" content="Contact Athlotic Sports | Sports items Manufacturer Pakistan" />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://aampipes.pk/_next/image?url=%2Fimages%2Faam-pipes-logo.png&w=128&q=75" />
                <meta property="og:description" content="Get in touch with Athlotic Sports, a leading manufacturer of Sport Uniforms and Accessories. Contact us today for reliable and efficient solutions!" />
                <meta property="og:locale" content="en" />
                <meta itemProp="image" content="https://aampipes.pk/_next/image?url=%2Fimages%2Faam-pipes-logo.png&w=128&q=75" />
                <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
                <link rel="canonical" href="https://athlotic.com/contact-us" />
                <link rel="preconnect" href="//www.google-analytics.com" as="script" />
                <meta name="google" content="notranslate" />
            </Head>
            <MainHeader pageHeading="LOGIN" pageImg="" />

            <div className=" w-[70%] mx-auto my-20">
                <div className="login-title py-8 sm:px-6 flex sm:flex-row flex-col items-center justify-between">
                    <h3 className="text-center lg:text-3xl sm:text-2xl text-xl mb-4 font-semibold">Welcome to Athlotic Sportswear! Please login.</h3>
                    <div className="login-other float-right text-gray-600">
                        <span>New member? <Link href="/signup" className="text-blue-600 hover:underline">Register</Link> here.</span>
                    </div>
                </div>
                <div className='bg-white sm:p-6 p-3'>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className='flex flex-col gap-4'>
                                <div className="flex flex-col">
                                    <label htmlFor="loginInput" className="text-sm text-gray-600 mb-1">Phone Number or Email</label>
                                    <input type="text" id="loginInput" placeholder="Please enter your Phone Number or Email" className="w-full border border-gray-300 rounded-md px-3 py-2 sm:text-base text-xs text-gray-700 placeholder-gray-400  focus:outline-none focus:border-blue-500 focus:outline-none" />
                                    <div className="flex items-center justify-end mt-1">
                                        <span className="text-red-500 text-xs"></span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="passwordInput" className="text-sm text-gray-600 mb-1">Password</label>
                                    <div className='w-full border border-gray-300 rounded-md px-3 py-2 sm:text-base text-xs text-gray-700 flex justify-between'>
                                        <input
                                            type={show ? 'text' : 'password'}
                                            placeholder="Please Enter Your Password"
                                            className="placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:outline-none"
                                        />
                                        <button className="block" onClick={() => setShow(!show)}>
                                            {show ? (
                                                <div><i className="fas fa-eye text-lg"></i></div>
                                            ) : (
                                                <div><i className="fas fa-eye-slash text-lg"></i></div>
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <div className="text-right mt-2">
                                    <Link href="/forgetpassword" className="text-xs text-blue-600">Reset Your Password</Link>
                                </div>
                            </div>
                            <div>
                                <div className="">
                                    <button type="submit" className="w-full py-3 btn-action rounded-full text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">LOGIN</button>
                                </div>
                                <div className="flex flex-col gap-4 justify-center items-center mt-6">
                                    <span className="mr-2">Or, login with</span>
                                    <button className="px-4 py-2 bg-blue-800 w-full rounded-full flex justify-center items-center gap-3 text-white font-semibold rounded hover:bg-blue-900 focus:outline-none focus:bg-blue-900"><FaFacebookF className='w-5 h-5 text-white' /> Facebook</button>
                                    <button className="px-4 py-2 bg-red-600 w-full rounded-full flex justify-center items-center gap-3 text-white font-semibold rounded hover:bg-red-700 focus:outline-none focus:bg-red-700"> <FaGoogle className='w-5 h-5 text-white' />Google</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginForm;