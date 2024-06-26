import Sidebar from "../component/sidebar";
import Link from "next/link";
import Admin_Nav from "../component/admin-nav";
import withAuth from "../../../components/withAuth";

const Cancellerations = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black ">
        <Admin_Nav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="mt-4 mx-4">
            <div className="flex justify-between">
              <h1 className="my-4 text-xl text-slate-600 font-semibold">
                Cancelled Orders
              </h1>
            </div>
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
                            <p className="text-xs text-gray-600">Unemployed</p>
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
                            <p className="text-xs text-gray-600">Influencer</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$775.45</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                          {" "}
                          Completed{" "}
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
                          Completed{" "}
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
                        <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full">
                          {" "}
                          Expired{" "}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">11-01-2021</td>
                    </tr>
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
export default Cancellerations;
// export default withAuth(Cancellerations, ["admin"]);
