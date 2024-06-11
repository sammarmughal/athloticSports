import React, { useState } from "react";
import Sidebar from "../component/sidebar";
import Admin_Nav from "../component/admin-nav";
import Link from "next/link";
import withAuth from '../../../components/withAuth';


const AdminPortal = () => {
  const [activePanel, setActivePanel] = useState("No orders");
  const [selectedOption, setSelectedOption] = useState(null);
  const [dropdown, setDropdown] = useState(false);
  const [status, setStatus] = useState("Pending"); // Add this line

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  const handleSetActivePanel = (option) => {
    setSelectedOption(option);
    setActivePanel(option); // Update the active panel to the selected option
    setStatus(option); // Update the status to the selected option
    setDropdown(false); // Close the dropdown after selecting an option
  };
  
  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black ">
        <Admin_Nav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
            <div className="bg-blue-500  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <svg
                  width="30"
                  height="30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="stroke-current text-blue-800 transform transition-transform duration-500 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <div className="text-right">
                <p className="text-2xl">1,257</p>
                <p>Visitors</p>
              </div>
            </div>
            <div className="bg-blue-500  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <svg
                  width="30"
                  height="30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="stroke-current text-blue-800 transform transition-transform duration-500 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  ></path>
                </svg>
              </div>
              <div className="text-right">
                <p className="text-2xl">557</p>
                <p>Orders</p>
              </div>
            </div>
            <div className="bg-blue-500  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <svg
                  width="30"
                  height="30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="stroke-current text-blue-800 transform transition-transform duration-500 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
              </div>
              <div className="text-right">
                <p className="text-2xl">$11,257</p>
                <p>Sales</p>
              </div>
            </div>
            <div className="bg-blue-500  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <svg
                  width="30"
                  height="30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="stroke-current text-blue-800 transform transition-transform duration-500 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="text-right">
                <p className="text-2xl">$75,257</p>
                <p>Balances</p>
              </div>
            </div>
          </div>
          <div className="mt-4 mx-4">
            <div className="flex justify-between">
              <h1 className="my-4 text-xl text-slate-600 font-semibold">
                Orders
              </h1>
              <div className="flex items-end justify-end">
                <div className="relative inline-block text-left mb-3">
                  <button
                    onClick={handleDropdown}
                    className="inline-flex justify-center w-full px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                  >
                    Status
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2 -mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {dropdown && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    >
                      <div
                        className="py-2 p-2"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="dropdown-button"
                      >
                        <a
                          className="flex block rounded-md my-2 px-4 py-2 panel-btn text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                          role="menuitem"
                          onClick={() => handleSetActivePanel("My Pending Orders")}
                        >
                          Pending (<span>0</span>)
                        </a>
                        <a
                          className="flex block panel-btn my-2 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                          role="menuitem"
                          onClick={() =>
                            handleSetActivePanel("Ready To Shipped Orders")
                          }
                        >
                          Ready To Ship (<span>0</span>)
                        </a>
                        <a
                          className="flex block panel-btn rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                          role="menuitem"
                          onClick={() => handleSetActivePanel("Shipped Orders")}
                        >
                          Shipped (<span>0</span>)
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {activePanel === "My Pending Orders" && (
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b  bg-gray-50 ">
                        <th className="px-4 py-3">Client</th>
                        <th className="px-4 py-3">Amount</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y">
                      <tr className="bg-gray-50  hover:bg-gray-10 text-gray-700">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Jolina Angelie</p>
                              <p className="text-xs text-gray-600">
                                Unemployed
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">$369.75</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full">
                            {" "}
                            Pending{" "}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">23-03-2021</td>
                      </tr>
                      <tr className="bg-gray-50  hover:bg-gray-100 text-gray-700">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Dave Li</p>
                              <p className="text-xs text-gray-600">
                                Influencer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">$775.45</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full">
                            {" "}
                            Pending{" "}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">09-02-2021</td>
                      </tr>
                      <tr className="bg-gray-50  hover:bg-gray-100 text-gray-700">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Rulia Joberts</p>
                              <p className="text-xs text-gray-600">Actress</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">$1276.75</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full">
                            {" "}
                            Pending{" "}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">17-04-2021</td>
                      </tr>
                      <tr className="bg-gray-50  hover:bg-gray-100 text-gray-700">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Hitney Wouston</p>
                              <p className="text-xs text-gray-600">Singer</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">$863.45</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full">
                            {" "}
                            Pending{" "}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">11-01-2021</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {activePanel === "Ready To Shipped Orders" && (
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b  bg-gray-50 ">
                        <th className="px-4 py-3">Client</th>
                        <th className="px-4 py-3">Amount</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y">
                      <tr className="bg-gray-50  hover:bg-gray-10 text-gray-700">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Jolina Angelie</p>
                              <p className="text-xs text-gray-600">
                                Unemployed
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">$369.75</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                            {" "}
                            Approved{" "}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">23-03-2021</td>
                      </tr>
                      <tr className="bg-gray-50  hover:bg-gray-100 text-gray-700">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Dave Li</p>
                              <p className="text-xs text-gray-600">
                                Influencer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">$775.45</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                            {" "}
                            Approved{" "}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">09-02-2021</td>
                      </tr>
                      <tr className="bg-gray-50  hover:bg-gray-100 text-gray-700">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Rulia Joberts</p>
                              <p className="text-xs text-gray-600">Actress</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">$1276.75</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                            {" "}
                            Approved{" "}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">17-04-2021</td>
                      </tr>
                      <tr className="bg-gray-50  hover:bg-gray-100 text-gray-700">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Hitney Wouston</p>
                              <p className="text-xs text-gray-600">Singer</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">$863.45</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                            {" "}
                            Approved{" "}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">11-01-2021</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {activePanel === "Shipped Orders" && (
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b  bg-gray-50 ">
                        <th className="px-4 py-3">Client</th>
                        <th className="px-4 py-3">Amount</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y">
                      <tr className="bg-gray-50  hover:bg-gray-10 text-gray-700">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Jolina Angelie</p>
                              <p className="text-xs text-gray-600">
                                Unemployed
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">$369.75</td>
                        <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full">
                            {" "}
                            Shipped{" "}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">23-03-2021</td>
                      </tr>
                      <tr className="bg-gray-50  hover:bg-gray-100 text-gray-700">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Dave Li</p>
                              <p className="text-xs text-gray-600">
                                Influencer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">$775.45</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full">
                            {" "}
                            Shipped{" "}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">09-02-2021</td>
                      </tr>
                      <tr className="bg-gray-50  hover:bg-gray-100 text-gray-700">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Rulia Joberts</p>
                              <p className="text-xs text-gray-600">Actress</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">$1276.75</td>
                        <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full">
                            {" "}
                            Shipped{" "}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">17-04-2021</td>
                      </tr>
                      <tr className="bg-gray-50  hover:bg-gray-100 text-gray-700">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Hitney Wouston</p>
                              <p className="text-xs text-gray-600">Singer</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">$863.45</td>
                        <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full">
                            {" "}
                            Shipped{" "}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">11-01-2021</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminPortal;
// export default withAuth(AdminPortal, ["admin"]);