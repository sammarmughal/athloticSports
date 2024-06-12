import { useRouter } from "next/router";
import Sidebar from "../component/sidebar";
import Link from "next/link";
import User_Nav from "../component/user-nav";
import { useState, useEffect } from "react";
import Swal from "sweetalert2"; // Import SweetAlert
import axios from "axios";
import withAuth from "../../../components/withAuth";

const Profile = () => {
  const router = useRouter();
  const [username, setUsername] = useState(null);
  const [formPopupName, setFormPopupName] = useState(false);
  const [formPopupEmail, setFormPopupEmail] = useState(false);
  const [formPopupAddress, setFormPopupAddress] = useState(false);
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [shipping_address, setShippingAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [editname, setEditName] = useState("");
  const [editemail, setEditEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [shippingAddressError, setShippingAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [provinceError, setProvinceError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      fetchUserData(storedUsername);
    } else {
      console.error("Username not found in local storage");
    }
  }, []);

  const fetchUserData = async (username) => {
    try {
      console.log(username);
      const response = await axios.get(
        `/api/user/getProfile?username=${username}`
      );
      setUser(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
      setShippingAddress(response.data.shipping_address);
      setCity(response.data.city);
      setProvince(response.data.province);
      setZipCode(response.data.zip_code);
      setPhone(response.data.phone);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handlePopupName = () => {
    setFormPopupName(!formPopupName);
    setNameError(""); // Clear any previous errors when opening the popup
  };

  const handlePopupEmail = () => {
    setFormPopupEmail(!formPopupEmail);
    setEmailError(""); // Clear any previous errors when opening the popup
  };

  const handlePopupAddress = () => {
    setFormPopupAddress(!formPopupAddress);
  };

  const handleNameChange = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setNameError("Name is required");
      return;
    }

    try {
      const response = await axios.put(`/api/user/update-name`, {
        username,
        name: name,
      });
      if (response.status === 200) {
        setFormPopupName(false);
        setUser({ ...user, name: name });
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Name has been updated successfully!",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error updating name:", error);
    }
  };

  const handleEmailChange = async (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      setEmailError("Invalid email address");
      return;
    }

    try {
      const response = await axios.put(`/api/user/update-email`, {
        username,
        email: email,
      });
      if (response.status === 200) {
        setFormPopupEmail(false);
        setUser({ ...user, email: email });
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Email has been updated successfully!",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error updating email:", error);
    }
  };

  const handleAddressChange = async (e) => {
    e.preventDefault();

    // Validation
    let isValid = true;
    if (!shipping_address.trim()) {
      setShippingAddressError("Shipping address is required");
      isValid = false;
    }
    if (!city.trim()) {
      setCityError("City is required");
      isValid = false;
    }
    if (!province.trim()) {
      setProvinceError("Province is required");
      isValid = false;
    }
    if (!zip_code.trim()) {
      setZipCodeError("Zip code is required");
      isValid = false;
    }
    if (!phone.trim()) {
      setPhoneError("Phone number is required");
      isValid = false;
    }

    if (!isValid) {
      // If form is not valid, don't submit
      return;
    }

    try {
      const response = await axios.put(`/api/user/update-address`, {
        username,
        shipping_address,
        city,
        province,
        zip_code,
        phone,
      });
      if (response.status === 200) {
        setFormPopupAddress(false);
        setUser({ ...user, shipping_address, city, province, zip_code, phone });
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Address has been updated successfully!",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
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
                </div>
                <span className="text-gray-600"></span>
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
                      id="name"
                      className="border-1 rounded-r px-4 py-2 w-full"
                      type="text"
                      value={user.name || ""}
                    />
                    <button
                      onClick={handlePopupName}
                      className="ml-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div className="pb-6">
                  <label
                    htmlFor="email"
                    className="font-semibold mt-5 text-gray-700 block pb-1"
                  >
                    Email
                  </label>
                  <div className="flex">
                    <input
                      disabled
                      id="email"
                      className="border-1 rounded-r px-4 py-2 w-full"
                      type="text"
                      value={user.email || ""}
                    />
                    <button
                      onClick={handlePopupEmail}
                      className="ml-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {formPopupName && (
              <div className="fixed inset-0 mt-36 z-40">
                <div className="w-full md:w-[40%] bg-white md:max-w-full z-40 mx-auto">
                  <div className="p-6 border border-gray-300 sm:rounded-md">
                    <div className="flex justify-between">
                      <span className="text-xl font-semibold block">
                        Edit Name
                      </span>
                      <svg
                        onClick={handlePopupName}
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
                    <form onSubmit={handleNameChange}>
                      <label className="block mb-6">
                        <span className="text-gray-700">Name</span>
                        <input
                          name="name"
                          type="text"
                          className="w-full input-field border rounded p-2"
                          placeholder="Enter Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </label>
                      {nameError && (
                        <p className="text-red-500 text-sm mb-4">{nameError}</p>
                      )}
                      <div className="mb-6 w-full flex justify-end">
                        <button
                          type="submit"
                          onClick={handleNameChange}
                          className="py-3 px-6 btn-action rounded-xl text-white font-semibold bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
            {formPopupEmail && (
              <div className="fixed inset-0 mt-36 z-40">
                <div className="w-full md:w-[40%] bg-white md:max-w-full z-40 mx-auto">
                  <div className="p-6 border border-gray-300 sm:rounded-md">
                    <div className="flex justify-between">
                      <span className="text-xl font-semibold block">
                        Edit Email
                      </span>
                      <svg
                        onClick={handlePopupEmail}
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
                    <form onSubmit={handleEmailChange}>
                      <label className="block mb-6">
                        <span className="text-gray-700">Email</span>
                        <input
                          name="email"
                          type="email"
                          className="w-full input-field border rounded p-2"
                          placeholder="Enter Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </label>
                      {emailError && (
                        <p className="text-red-500 text-sm mb-4">
                          {emailError}
                        </p>
                      )}
                      <div className="mb-6 w-full flex justify-end">
                        <button
                          type="submit"
                          onClick={handleEmailChange}
                          className="py-3 px-6 btn-action rounded-xl text-white font-semibold bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
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
          <div className="w-full relative">
            <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md mt-10">
              <div className="dashboard-address-item shipping pr-16">
                <div className="dashboard-mod-title text-gray-700 text-base mb-4 h-20 leading-20">
                  Address <span>|</span>{" "}
                  <a
                    className="cursor-pointer ml-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
                    onClick={handlePopupAddress}
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
                  {user.shipping_address}
                </div>
                <div className="dashboard-address-detail text-base text-gray-700 mb-5">
                  {user.city}
                </div>
                <div className="dashboard-address-detail text-base text-gray-700 mb-5">
                  {user.province}
                </div>
                <div className="dashboard-address-detail text-base text-gray-700 mb-5">
                  {user.zip_code}
                </div>
                <div className="dashboard-address-detail text-base text-gray-700 mb-5">
                  {user.phone}
                </div>
              </div>
            </div>
            {formPopupAddress && (
              <div className="fixed inset-0 mt-36 z-40 overflow-y-auto">
                <div className="w-full md:w-[40%] bg-white md:max-w-full z-40 mx-auto">
                  <div className="p-6 border border-gray-300 sm:rounded-md">
                    <div className="flex justify-between">
                      <span className="text-xl font-semibold block">
                        Edit Address
                      </span>
                      <svg
                        onClick={handlePopupAddress}
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
                        <span className="text-gray-700">Shipping Address</span>
                        <textarea
                          name="shipping_address"
                          type="text"
                          rows="2"
                          className={`w-full input-field ${
                            shippingAddressError ? "border-red-500" : ""
                          }`}
                          placeholder="Enter Your Address"
                          value={shipping_address}
                          onChange={(e) => {
                            setShippingAddress(e.target.value);
                            setShippingAddressError(""); // Clear validation error when user starts typing
                          }}
                        />
                        {shippingAddressError && (
                          <p className="text-red-500 text-sm mb-4">
                            {shippingAddressError}
                          </p>
                        )}
                      </label>
                      <label className="block mb-6">
                        <span className="text-gray-700">City</span>
                        <input
                          name="city"
                          type="text"
                          className={`w-full input-field ${
                            cityError ? "border-red-500" : ""
                          }`}
                          placeholder="Enter Your City"
                          value={city}
                          onChange={(e) => {
                            setCity(e.target.value);
                            setCityError(""); // Clear validation error when user starts typing
                          }}
                        />
                        {cityError && (
                          <p className="text-red-500 text-sm mb-4">
                            {cityError}
                          </p>
                        )}
                      </label>
                      <label className="block mb-6">
                        <span className="text-gray-700">Province</span>
                        <input
                          name="province"
                          type="text"
                          className={`w-full input-field ${
                            provinceError ? "border-red-500" : ""
                          }`}
                          placeholder="Enter Your Province"
                          value={province}
                          onChange={(e) => {
                            setProvince(e.target.value);
                            setProvinceError(""); // Clear validation error when user starts typing
                          }}
                        />
                        {provinceError && (
                          <p className="text-red-500 text-sm mb-4">
                            {provinceError}
                          </p>
                        )}
                      </label>
                      <label className="block mb-6">
                        <span className="text-gray-700">Zip Code</span>
                        <input
                          name="zip_code"
                          type="text"
                          className={`w-full input-field ${
                            zipCodeError ? "border-red-500" : ""
                          }`}
                          placeholder="Enter Your Zip Code"
                          value={zip_code}
                          onChange={(e) => {
                            setZipCode(e.target.value);
                            setZipCodeError(""); // Clear validation error when user starts typing
                          }}
                        />
                        {zipCodeError && (
                          <p className="text-red-500 text-sm mb-4">
                            {zipCodeError}
                          </p>
                        )}
                      </label>
                      <label className="block mb-6">
                        <span className="text-gray-700">Phone</span>
                        <input
                          name="phone"
                          type="text"
                          className={`w-full input-field ${
                            phoneError ? "border-red-500" : ""
                          }`}
                          placeholder="Enter Your Contact Number"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            setPhoneError(""); // Clear validation error when user starts typing
                          }}
                        />
                        {phoneError && (
                          <p className="text-red-500 text-sm mb-4">
                            {phoneError}
                          </p>
                        )}
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
            {/* {formPopupAddress && (
              <div className="fixed inset-0 mt-36 z-40 overflow-y-auto">
                <div className="w-full md:w-[40%] bg-white md:max-w-full z-40 mx-auto">
                  <div className="p-6 border border-gray-300 sm:rounded-md">
                    <div className="flex justify-between">
                      <span className="text-xl font-semibold block">
                        Edit Address
                      </span>
                      <svg
                        onClick={handlePopupAddress}
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
                        <span className="text-gray-700">Shipping Address</span>
                        <textarea
                          name="shipping_address"
                          type="text"
                          rows="2"
                          className="w-full input-field"
                          placeholder="Enter Your Address"
                          value={shipping_address}
                          onChange={(e) => setShippingAddress(e.target.value)}
                        />
                      </label>
                      <label className="block mb-6">
                        <span className="text-gray-700">City</span>
                        <input
                          name="city"
                          type="text"
                          className="w-full input-field"
                          placeholder="Enter Your City"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </label>
                      <label className="block mb-6">
                        <span className="text-gray-700">Province</span>
                        <input
                          name="province"
                          type="text"
                          className="w-full input-field"
                          placeholder="Enter Your Province"
                          value={province}
                          onChange={(e) => setProvince(e.target.value)}
                        />
                      </label>
                      <label className="block mb-6">
                        <span className="text-gray-700">Zip Code</span>
                        <input
                          name="zip_code"
                          type="text"
                          className="w-full input-field"
                          placeholder="Enter Your Zip Code"
                          value={zip_code}
                          onChange={(e) => setZipCode(e.target.value)}
                        />
                      </label>
                      <label className="block mb-6">
                        <span className="text-gray-700">Phone</span>
                        <input
                          name="phone"
                          type="text"
                          className="w-full input-field"
                          placeholder="Enter Your Contact Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
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
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(Profile, ["user"]);
