import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';


function Admin_Nav() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
      });

      if (response.ok) {
        // Show the success popup
        Swal.fire({
          icon: 'success',
          title: 'Logged out successfully',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Redirect to login page after the popup is closed
          router.push('/login');
        });
      } else {
        // Show an error popup
        Swal.fire({
          icon: 'error',
          title: 'Logout failed',
          text: 'Please try again later',
        });
      }
    } catch (error) {
      console.error('An error occurred during logout:', error);
      // Show an error popup
      Swal.fire({
        icon: 'error',
        title: 'An error occurred',
        text: 'Please try again later',
      });
    }
  };
  return (
    <>
      <div className="fixed w-full flex items-center justify-between h-14 text-white bg-blue-800 z-10">
        <div className="flex items-center justify-start md:justify-center pl-3 w-28 md:w-64 h-14 border-none">
        <Link href="/">
            <Image
              src="/images/logo-athlotic2.png"
              alt="Athlotic Sports GUJRANWALA"
              className="backHome w-40  cursor-pointer"
              width={240}
              height={128}
              title="Athlotic Sports GUJRANWALA"
            />
          </Link>
        </div>
        <div className="flex justify-between items-center h-14 bg-blue-800 header-right">
          <img
            className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
            src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
            alt="Avatar"
          />
          <span className="hidden md:block">ADMIN</span>
          {/* <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
            <button className="outline-none focus:outline-none">
              <svg
                className="w-5 text-gray-600 h-5 cursor-pointer"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
            />
          </div> */}
          <ul className="flex items-center">
            <li>
              <div className="block w-px h-6 mx-3 bg-gray-400"></div>
            </li>
            <li>
              <button
                className="flex items-center mr-4 hover:text-blue-100"
                onClick={handleLogout}
              >
                <span className="inline-flex mr-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                </span>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Admin_Nav;
