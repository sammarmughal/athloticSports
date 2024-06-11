import Sidebar from "../component/sidebar";
import Link from "next/link";
import User_Nav from "../component/user-nav";
import withAuth from "../../../components/withAuth";

const Orders = ({ orders }) => {
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
                      <th className="px-4 py-3">Product Name</th>
                      <th className="px-4 py-3">Amount</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y">
                    {orders.map(order => (
                      <tr key={order.id} className="bg-gray-50 hover:bg-gray-100 text-gray-700">
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
                              <p className="font-semibold">{order.product_name}</p>
                              <p className="text-xs text-gray-600">{order.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">${order.total_amount.toFixed(2)}</td>
                        <td className="px-4 py-3 text-xs">
                          <span className={`px-2 py-1 font-semibold leading-tight rounded-full ${
                            order.status === 'Pending' ? 'text-yellow-700 bg-yellow-100' :
                            order.status === 'Delivered' ? 'text-gray-700 bg-gray-100' :
                            order.status === 'Approved' ? 'text-green-700 bg-green-100' :
                            order.status === 'Denied' ? 'text-red-700 bg-red-100' : ''
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">{new Date(order.date).toLocaleDateString()}</td>
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

export default withAuth(Orders, ["user"]);
