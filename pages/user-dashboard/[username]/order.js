import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Sidebar from "../component/sidebar";
import User_Nav from "../component/user-nav";
import withAuth from "../../../components/withAuth";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserOrders();
  }, []);

  const fetchUserOrders = async () => {
    try {
      const response = await fetch("/api/orders/getUserOrders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: localStorage.getItem("username") }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }

      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Failed to fetch orders", error);
      setError("Failed to fetch orders. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (order) => {
    Swal.fire({
      title: `Order Details - Order ID: ${order.order_id}`,
      html: `
        <p><strong>Status:</strong> ${order.status}</p>
        <p><strong>Total Amount:</strong> $${order.total_amount}</p>
        <p><strong>Shipping Address:</strong> ${order.shipping_address}</p>
        <p><strong>Date:</strong> ${order.date}</p>
        <hr />
        <h2 class="text-xl mt-4">Order Items</h2>
        <ul class="list-disc list-inside">
          ${order.items.map((item) => `<li>${item.quantity} x ${item.product_name}</li>`).join("")}
        </ul>
      `,
      showCancelButton: order.status === "Pending",
      confirmButtonText: "Cancel Order",
      cancelButtonText: "Close",
      preConfirm: () => {
        if (order.status === "Pending") {
          return handleCancelOrder(order.order_id);
        }
      },
    });
  };

  const handleCancelOrder = async (orderId) => {
    try {
      const response = await fetch(`/api/orders/orders/${orderId}`, {
        method: "PUT",
      });

      if (!response.ok) {
        throw new Error("Failed to cancel order");
      }

      Swal.fire("Cancelled!", "Your order has been cancelled.", "success");

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.order_id === orderId ? { ...order, status: "Cancelled" } : order
        )
      );
    } catch (error) {
      console.error("Failed to cancel order", error);
      Swal.fire("Error!", "Failed to cancel order.", "error");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <User_Nav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="mt-4 mx-4">
            <div>
              <h1 className="my-4 text-xl text-slate-600 font-semibold">My Orders</h1>
            </div>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                      <th className="px-4 py-3">Order ID</th>
                      <th className="px-4 py-3">Total Amount</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y">
                    {orders.map((order) => (
                      <tr key={order.order_id} className="bg-gray-50 hover:bg-gray-100 text-gray-700">
                        <td className="px-4 py-3">{order.order_id}</td>
                        <td className="px-4 py-3">${order.total_amount}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 font-semibold leading-tight ${getStatusColor(order.status)} rounded-full`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">{order.date}</td>
                        <td className="px-4 py-3">
                          <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={() => handleViewDetails(order)}
                          >
                            View Details
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

const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "text-yellow-700 bg-yellow-100";
    case "Delivered":
      return "text-gray-700 bg-gray-100";
    case "Approved":
      return "text-green-700 bg-green-100";
    case "Denied":
      return "text-red-700 bg-red-100";
    default:
      return "";
  }
};

export default withAuth(Orders, ["user"]);
