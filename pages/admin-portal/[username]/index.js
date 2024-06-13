import React, { useEffect, useState } from "react";
import Sidebar from "../component/sidebar";
import Admin_Nav from "../component/admin-nav";
import axios from 'axios';

const AdminPortal = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderItems, setOrderItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Pending');
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/orders/getOrders');
      setOrders(response.data.orders);
      setTotalOrders(response.data.totalOrders);
      setTotalAmount(response.data.totalAmount);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const fetchOrderItems = async (orderId) => {
    try {
      const response = await axios.get(`/api/orders/${orderId}/items`);
      setOrderItems(response.data);
      setSelectedOrder(orders.find(order => order.order_id === orderId));
      setModalOpen(true);
    } catch (error) {
      console.error('Error fetching order items:', error);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      await axios.put(`/api/orders/${orderId}`, { status: newStatus });
      fetchOrders();
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  const handleApproveOrder = (orderId) => {
    updateOrderStatus(orderId, 'Ready to Ship');
  };

  const handleCancelOrder = (orderId) => {
    updateOrderStatus(orderId, 'Cancelled');
  };

  const handleShippedOrder = (orderId) => {
    updateOrderStatus(orderId, 'Shipped');
  };

  const closeModal = () => {
    setModalOpen(false);
    setOrderItems([]);
    setSelectedOrder(null);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    setDropdownOpen(false);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black ">
        <Admin_Nav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 p-4 gap-10">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-xl font-semibold text-gray-700">Total Orders</h2>
              <p className="text-2xl">{totalOrders}</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-xl font-semibold text-gray-700">Total Amount</h2>
              <p className="text-2xl">${totalAmount}</p>
            </div>
          </div>
          <div className="mt-4 mx-4">
            <div className="flex justify-between items-center">
              <h1 className="my-4 text-xl text-slate-600 font-semibold">Orders</h1>
              <div className="relative inline-block text-left mb-3">
                <button
                  onClick={handleDropdownToggle}
                  className="inline-flex justify-center w-full px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                >
                  {selectedStatus} <span className="ml-1">&#9662;</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <button onClick={() => handleStatusSelect('Pending')} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                        Pending
                      </button>
                      <button onClick={() => handleStatusSelect('Ready to Ship')} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                        Ready to Ship
                      </button>
                      <button onClick={() => handleStatusSelect('Shipped')} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                        Shipped
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Orders table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shipping Address</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders && orders.map((order) => (
                    <tr key={order.order_id} className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.order_id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.username}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : order.status === 'Ready to Ship' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.total_amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.shipping_address}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button onClick={() => fetchOrderItems(order.order_id)} className="text-indigo-600 hover:text-indigo-900 mr-2">View</button>
                        {order.status === 'Pending' && (
                          <>
                            <button onClick={() => handleCancelOrder(order.order_id)} className="text-red-600 hover:text-red-900">Cancel</button>
                            <button onClick={() => handleApproveOrder(order.order_id)} className="text-green-600 hover:text-green-900 ml-2">Approve</button>
                          </>
                        )}
                        {order.status === 'Ready to Ship' && (
                          <button onClick={() => handleShippedOrder(order.order_id)} className="text-blue-600 hover:text-blue-900">Shipped</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Modal to display order items */}
            {modalOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                <div className="bg-white p-4 w-96 rounded-md">
                  <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600">Close</button>
                  <h2 className="text-xl font-semibold mb-2">Order Items</h2>
                  <ul>
                    {orderItems.map((item) => (
                      <ul>
                      <li key={item.item_id}>
                        {item.quantity} x {item.product_name}
                      </li>
                      <li> </li>
                      </ul>
                    ))}
                  </ul>
                  {selectedOrder?.status === 'Pending' && (
                    <div>
                      <button onClick={() => handleCancelOrder(selectedOrder.order_id)} className="bg-red-500 text-white px-3 py-1 rounded-md">Cancel Order</button>
                      <button onClick={() => handleApproveOrder(selectedOrder.order_id)} className="bg-green-500 text-white px-3 py-1 rounded-md ml-2">Approve Order</button>
                    </div>
                  )}
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
