import React, { useState, useEffect } from "react";
import Sidebar from "../component/sidebar";
import User_nav from "../component/user-nav";
import Link from "next/link";
import withAuth from '../../../components/withAuth';

const UserDashboard = () => {
  const [cancelledOrders, setCancelledOrders] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const fetchCancelledOrders = async () => {
      try {
        const response = await fetch("/api/orders/getOrders");
        if (!response.ok) {
          throw new Error("Failed to fetch orders.");
        }
        const data = await response.json();
        const filteredOrders = data.orders.filter(order => order.status === 'Cancelled');
        setCancelledOrders(filteredOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false); // Set loading state to false once data fetching is done
      }
    };

    fetchCancelledOrders();
  }, []);

  const handleViewOrderItems = (orderItems) => {
    alert(`Order Items:\n${orderItems.join("\n")}`);
  };

  if (loading) {
    return <p>Loading...</p>; // Display loading indicator while fetching data
  }

  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <User_nav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="mt-4 mx-4">
            <div>
              <h1 className="my-4 text-xl text-slate-600 font-semibold">
                My Cancellations
              </h1>
            </div>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                      <th className="px-4 py-3">Product Name</th>
                      <th className="px-4 py-3">Amount</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y">
                    {cancelledOrders.map((order) => (
                      <tr key={order.orderId} className="bg-gray-50 hover:bg-gray-100 text-gray-700">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src={order.imageUrl}
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">{order.userName}</p>
                              <p className="text-xs text-gray-600">{order.userRole}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">{order.amount}</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full">
                            {order.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">{order.date}</td>
                        <td className="px-4 py-3 text-sm">
                          <button
                            onClick={() => handleViewOrderItems(order.orderItems)}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(UserDashboard, ["user"]);
