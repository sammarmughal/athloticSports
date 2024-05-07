import Sidebar from "./component/sidebar";
import Link from "next/link";
import User_Nav from "./component/user-nav";
const Profile = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black ">
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
                    className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
                  >
                    Edit
                  </a>
                </div>
                <span className="text-gray-600">
                  This information is secret so be careful
                </span>
                <div className="w-full p-8 mx-2 flex justify-center">
                  <img
                    id="showImage"
                    className="max-w-xs w-32 items-center border"
                    src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <div className="pb-6">
                  <label
                    htmlFor="name"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Name
                  </label>
                  <div className="flex">
                    <input
                      disabled
                      id="username"
                      className="border-1 rounded-r px-4 py-2 w-full"
                      type="text"
                      value="Jane Name"
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
                    value="example@example.com"
                  />
                  <span className="text-gray-600 pt-4 block opacity-70">
                    Personal login information of your account
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md mt-10">
            <div className="dashboard-address-item shipping pr-16">
              <div className="dashboard-mod-title text-gray-700 text-base mb-4 h-20 leading-20">
                Address Book <span>|</span>{" "}
                <a href="/address#/book" data-spm="dprofile_edit">
                  EDIT
                </a>
              </div>
              <div className="dashboard-address-default mb-15 text-sm text-gray-600">
                DEFAULT DELIVERY ADDRESS
              </div>
              <div className="dashboard-address-username text-base text-gray-700 mb-10 font-semibold">
                Sammar Mahmood
              </div>
              <div className="dashboard-address-detail text-base text-gray-700 mb-5">
                Gill road Akram colony near Jamia masjid saddiqua house no 5 ,
                Gujranwala
              </div>
              <div className="dashboard-address-detail text-base text-gray-700 mb-5">
                Punjab - Gujranwala - City Area - Gill Road
              </div>
              <div className="dashboard-address-phone text-base text-gray-700">
                (+92) 3174696178
              </div>
            </div>
            <div className="dashboard-address-item w-1/2 h-full inline-block vertical-align-top box-border overflow-y-auto">
              <div className="dashboard-mod-title text-gray-700 text-base mb-4 h-20 leading-20">
                Address Book <span>|</span>{" "}
                <a data-spm="dprofile_edit" href="/address#/book">
                  EDIT
                </a>
              </div>
              <div className="dashboard-address-default mb-15 text-sm text-gray-600">
                DEFAULT BILLING ADDRESS
              </div>
              <div className="dashboard-address-username text-base text-gray-700 mb-10 font-semibold">
                Sammar Mahmood
              </div>
              <div className="dashboard-address-detail text-base text-gray-700 mb-5">
                Gill road Akram colony near Jamia masjid saddiqua house no 5 ,
                Gujranwala
              </div>
              <div className="dashboard-address-detail text-base text-gray-700 mb-5">
                Punjab - Gujranwala - City Area - Gill Road
              </div>
              <div className="dashboard-address-phone text-base text-gray-700">
                (+92) 3174696178
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;