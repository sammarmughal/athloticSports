import React, { useState } from 'react';
import Head from 'next/head';
import MainHeader from "../components/mainheader";
import Link from 'next/link';

const ForgetPassword = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta content='width=device-width, initial-scale=1.0, maximum-scale=5, shrink-to-fit=no' name='viewport' />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="generator" content="Getsol Inc." />
                <title>Forget Password</title>
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
            <MainHeader pageHeading="FORGET PASSWORD" pageImg="Forget Password" />

            <div className=" w-[70%] mx-auto my-20">
                 <div className="w-full lg:w-1/2 bg-white mx-auto sm:p-5">
                    <div className="px-8 mb-4 text-center">
                        <h3 className="pt-4 mb-2 sm:text-2xl text-xl">Forgot Your Password?</h3>
                        <p className="mb-4 sm:text-sm text-xs text-gray-700">
                            We get it, stuff happens. Just enter your email address below and we'll send you a
                            link to reset your password!
                        </p>
                    </div>
                    <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded  appearance-none focus:outline-none  placeholder-gray-400 focus:border-blue-500"
                                id="email"
                                type="email"
                                placeholder="Enter Email Address..."
                            />
                        </div>
                        <div className="mb-6 text-center">
                            <button
                                className="w-full px-4 py-2 font-bold text-white focus:outline-none focus:shadow-outline btn-action"
                                type="button"
                            >
                                Reset Password
                            </button>
                        </div>
                        <hr className="mb-6 border-t" />
                        <div className="text-center">
                            <Link href="/signup" className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                                Create an Account!
                            </Link>
                        </div>
                        <div className="text-center">
                            <Link href="/login" className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                                Already have an account? Login!
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ForgetPassword;