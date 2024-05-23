import Sidebar from "./component/sidebar";
import Link from "next/link";
import Admin_Nav from "./component/admin-nav";
import Image from "next/image";
const Profile = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black ">
        <Admin_Nav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="block md:flex mt-10">
            <div className="w-full md:w-3/5 p-4 sm:p-6 lg:ml-4 lg:p-8 bg-white shadow-md">
              <div>
                <div className="flex justify-between">
                  <span className="text-xl font-semibold block">
                    Admin Profile
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
                  <Image
                    id="showImage"
                    className="max-w-xs w-32 items-center border"
                    src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                    alt=""
                    height={auto}
                    width={auto}
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
        </div>
      </div>
    </>
  );
};
export default Profile;
