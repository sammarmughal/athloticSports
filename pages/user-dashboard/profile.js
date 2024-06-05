import Sidebar from "./component/sidebar";
import Link from "next/link";
import User_Nav from "./component/user-nav";
import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [formPopup, setFormPopup] = useState(false);
  const [user, setUser] = useState({});
  const [address, setAddress] = useState("");

  const username = 'your-unique-username'; // Replace with the actual username

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/user?username=${username}`);
        setUser(response.data);
        setAddress(response.data.address);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const handlePopup = () => {
    setFormPopup(!formPopup);
  };

  const handleAddressChange = async (e) => {
    e.preventDefault();
    try {
      // Send updated address to the server
      const response = await axios.put(`/api/user/address`, {
        username: user.username,
        address,
      });
      if (response.status === 200) {
        setFormPopup(false);
        setUser({ ...user, address });
      }
    } catch (error) {
      console.error("Error updating address:", error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <User_Nav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="block md:flex">
            <div className="w-full md:w-3/5 p-4 sm:p-6 lg:ml-4 lg:p-8 bg-white shadow-md">
              <div>
                <div className="flex justify-between">
                  <span className="text-xl font-semibold block">
                    User Profile
                  </span>
                  <a
                    href="#"
                    className="mb-2 -mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
                  >
                    Edit
                  </a>
                </div>
                <span className="text-gray-600">
                </span>
                </div>
              <div className="">
                <div className="pb-6">
                  <label
                    htmlFor="name"
                    className="font-semibold mt-5 text-gray-700 block pb-1"
                  >
                    Name
                  </label>
                  <div className="flex">
                    <input
                      disabled
                      id="username"
                      className="border-1 rounded-r px-4 py-2 w-full"
                      type="text"
                      value={user.username || ""}
                    />
                  </div>
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="about"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Email
                  </label>
                  <input
                    disabled
                    id="email"
                    className="border-1 rounded-r px-4 py-2 w-full"
                    type="email"
                    value={user.email || ""}
                  />
                  <span className="text-gray-600 pt-4 block opacity-70">
                    Personal login information of your account
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative">
            <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md mt-10">
              <div className="dashboard-address-item shipping pr-16">
                <div className="dashboard-mod-title text-gray-700 text-base mb-4 h-20 leading-20">
                  Address Book <span>|</span>{" "}
                  <a
                    className="hover:text-blue-500 cursor-pointer"
                    onClick={handlePopup}
                    data-spm="dprofile_edit"
                  >
                    EDIT
                  </a>
                </div>
                <div className="dashboard-address-default mb-15 text-sm text-gray-600">
                  DEFAULT DELIVERY ADDRESS
                </div>
                <div className="dashboard-address-username text-base text-gray-700 mb-10 font-semibold">
                  {user.username}
                </div>
                <div className="dashboard-address-detail text-base text-gray-700 mb-5">
                  {user.address}
                </div>
              </div>
            </div>
            {formPopup && (
              <div className="fixed inset-0 mt-36 z-40">
                <div className="w-full md:w-[40%] bg-white md:max-w-full z-40 mx-auto">
                  <div className="p-6 border border-gray-300 sm:rounded-md">
                    <div className="flex justify-between">
                      <span className="text-xl font-semibold block">
                        Edit Address
                      </span>
                      <svg
                        onClick={handlePopup}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <form onSubmit={handleAddressChange}>
                      <label className="block mb-6">
                        <span className="text-gray-700">Address</span>
                        <textarea
                          name="address"
                          type="text"
                          rows="5"
                          className="w-full input-field"
                          placeholder="Enter Your Address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </label>
                      <div className="mb-6 w-full flex justify-end">
                        <button
                          type="submit"
                          className="py-3 px-6 btn-action rounded-xl text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
