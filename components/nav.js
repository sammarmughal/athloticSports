import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Menu, Dialog, Transition } from "@headlessui/react";
import { XIcon, FireIcon } from "@heroicons/react/outline";
import { BsCart3, BsPerson } from "react-icons/bs";
import { useSelector } from "react-redux";


export default function Nav() {
  const count = useSelector((state) => state.cart.count);
  const router = useRouter();
  const currentRoute = router.pathname;
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <nav className=" w-full bg-transparent  bg-opacity-30 transition-all duration-500 h-24 px-5 flex items-center justify-between  absolute  z-30 group">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo-athlotic2.png"
              alt="Athlotic Sports GUJRANWALA"
              className="backHome sm:w-60 w-48 cursor-pointer"
              width={240}
              height={128}
              title="Athlotic Sports GUJRANWALA"
            />
          </Link>
        </div>
        <ul className="top-links items-center divide-x uppercase divide-slate-400 text-white divide-opacity-70 text-lg hidden font-normal xl:flex whitespace-nowrap ">
          <li>
            <Link href="/" className="hover:text-[#01b8ee] px-3">
              Home
            </Link>{" "}
          </li>

          <li>
            <Menu as="div" className="relative inline-block text-left px-3">
              <div>
                <Menu.Button
                  className={
                    currentRoute.includes("services") ||
                    currentRoute.includes("consultation") ||
                    currentRoute.includes("design")
                      ? "text-[#01b8ee]"
                      : "hover:text-[#01b8ee]"
                  }
                >
                  SPORTS UNIFROM
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 ml-2 inline"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="menuItems origin-center absolute   mt-2 w-[300px] rounded-md shadow-lg bg-white focus:outline-none">
                  <div className="p-5">
                    <Menu.Item>
                      <Link
                        href="/products/rugby"
                        title="Rugby Uniforms Manufacturer"
                      >
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" /> Rugby
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        href="/products/soccer"
                        title="Soccer Uniform Manufacturer"
                      >
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" />{" "}
                        Soccer
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        href="/products/basketball"
                        title="Basketball Uniform"
                      >
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" />{" "}
                        Basketball
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        href="/products/baseball"
                        title="Baseball Uniform Manufacturer"
                      >
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" />{" "}
                        Baseball
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        href="/products/icehockey"
                        title="Ice Hockey Uniform"
                      >
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" /> Ice
                        Hockey
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link
                        href="/products/volleyball"
                        title="Volley Ball Uniform"
                      >
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" />{" "}
                        Volley Ball
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/products/cricket" title="Cricket Uniform">
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" />{" "}
                        Cricket
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        href="/products/football"
                        title="American Football Uniform"
                      >
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" />{" "}
                        American Football
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href="/products/tennis" title="Tennis Uniform">
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" />{" "}
                        Tennis
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href="/products/running" title="Running Uniform">
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" />{" "}
                        Running
                      </Link>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>

          <li>
            <Menu as="div" className="relative inline-block text-left px-3">
              <div>
                <Menu.Button
                  className={
                    currentRoute.includes("services") ||
                    currentRoute.includes("consultation") ||
                    currentRoute.includes("design")
                      ? "text-[#01b8ee]"
                      : "hover:text-[#01b8ee]"
                  }
                >
                  SPORTS WEAR
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 ml-2 inline"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="menuItems origin-center absolute   mt-2 w-[300px] rounded-md shadow-lg bg-white     focus:outline-none">
                  <div className="p-5">
                    <Menu.Item>
                      <Link href="/products/caps" title="Sports Caps and Hats">
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" />
                        Caps Hats
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/products/sportsbag" title="Sports Bag">
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" />
                        Sports Bags
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/products/tracksuits" title="Track Suits">
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" />
                        Track Suits
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/products/gym" title="Gym Wear">
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" />
                        Gym
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/products/medical" title="Medical Wear">
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" />
                        Medical Wear{" "}
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link
                        href="/products/martialarts"
                        title="Martial Arts Wear"
                      >
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" />
                        Martial Arts
                      </Link>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>

          <li>
            <Menu as="div" className="relative inline-block text-left px-3">
              <div>
                <Menu.Button
                  className={
                    currentRoute.includes("services") ||
                    currentRoute.includes("consultation") ||
                    currentRoute.includes("design")
                      ? "text-[#01b8ee]"
                      : "hover:text-[#01b8ee]"
                  }
                >
                  ACCESSORIES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 ml-2 inline"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="menuItems origin-center absolute   mt-2 w-[300px] rounded-md shadow-lg bg-white     focus:outline-none">
                  <div className="p-5">
                    <Menu.Item>
                      <Link href="/products/wintercaps" title="Heat Caps">
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" />
                        Heat Caps
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/products/wintercaps" title="Winter Caps">
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" />
                        Winter Caps
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/products/socks" title="Socks">
                        <FireIcon className="w-5 h-5 inline -mt-1 mr-1" />
                        Socks
                      </Link>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>

          <li>
            <Link
              href="/contact-us"
              className={
                currentRoute === "/contact-us"
                  ? "text-[#01b8ee] px-3"
                  : "hover:text-[#01b8ee] px-3"
              }
            >
              CONTACT US
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4 sm:mr-14">
          <div
            className={
              currentRoute === "/cart"
                ? "text-[#01b8ee] "
                : "hover:text-[#01b8ee]"
            }
          >
            <div className="relative inline-flex items-center text-sm font-semibold leading-5  transition duration-150 ease-in-out">
              <Link href="/cart" className="ml-1">
                  <BsCart3 className="text-gray-200 hover:border-2 rounded-xl hover:border-[#01b8ee] hover:rounded-xl p-1 hover:text-[#01b8ee] w-10 h-10 flex items-center justify-center duration-300" />
                  {typeof window !== "undefined" && count > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                      {count}
                    </span>
                  )}
              </Link>
            </div>
          </div>
          <Link
            href="/login"
            className={
              currentRoute === "/login"
                ? "text-[#01b8ee]"
                : "hover:text-[#01b8ee]"
            }
          >
            <BsPerson className="text-gray-200 hover:border-2 rounded-xl hover:border-[#01b8ee] hover:rounded-xl p-1 hover:text-[#01b8ee]  w-10 h-10 flex items-center justify-center duration-300" />{" "}
          </Link>
          <button
            type="button"
            aria-label="Mobile Menu"
            title="Mobile Menu"
            onClick={handleToggle}
            className="sm:mt-3 mt-2  mr-3 flex h-8 w-8 items-center justify-center xl:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-slate-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </button>
        </div>
      </nav>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden z-50"
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-2xl font-bold text-gray-900">
                        Athlotic Sports
                      </Dialog.Title>
                    </div>
                    <div className="mt-6 relative flex-1 px-4 sm:px-4">
                      {/* ////////////////////// */}

                      <ul className="1top-links items-center divide-y uppercase divide-slate-400 text-slate-700 divide-opacity-70 text-sm  font-bold   whitespace-nowrap">
                        <li className="py-3">
                          <Link
                            href="/"
                            onClick={handleToggle}
                            className="hover:text-[#01b8ee] py-2"
                          >
                            Home
                          </Link>{" "}
                        </li>
                        <li className="py-3">
                          SPORTS UNIFORM
                          <Link
                            onClick={handleToggle}
                            href="/products/rugby"
                            title="Rugby Uniform"
                            className="block mt-2 ml-4 text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 inline -mt-1 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Rugby
                          </Link>
                          <Link
                            onClick={handleToggle}
                            href="/products/soccer"
                            title="Soccer Uniform"
                            className="block mt-2 ml-4 text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 inline -mt-1 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Soccer
                          </Link>
                          <Link
                            onClick={handleToggle}
                            href="/products/basketball"
                            title="Basketball Uniform"
                            className="block mt-2 ml-4 text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 inline -mt-1 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Basketball
                          </Link>
                          <Link
                            onClick={handleToggle}
                            href="/products/baseball"
                            title="Baseball Uniform"
                            className="block mt-2 ml-4 text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 inline -mt-1 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Baseball
                          </Link>
                          <Link
                            onClick={handleToggle}
                            href="/products/ice-hockey"
                            title="Ice Hockey Uniform"
                            className="block mt-2 ml-4 text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 inline -mt-1 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Ice Hockey
                          </Link>
                          <Link
                            onClick={handleToggle}
                            href="/products/volleyball"
                            title="Volley Ball Uniform"
                            className="block mt-2 ml-4 text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 inline -mt-1 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Volley Ball
                          </Link>
                          <Link
                            onClick={handleToggle}
                            href="/products/crickEt"
                            title="Cricket Uniform"
                            className="block mt-2 ml-4 text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 inline -mt-1 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Cricket
                          </Link>
                          {/* <Link onClick={handleToggle} href="#" title="Athletic Uniform" className="block mt-2 ml-4 text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline -mt-1 mr-1">
                              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
                            Athletic
                          </Link> */}
                          <Link
                            onClick={handleToggle}
                            href="/products/football"
                            title="American Football Uniform"
                            className="block mt-2 ml-4 text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 inline -mt-1 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            American Football
                          </Link>
                          {/* <Link onClick={handleToggle} href="#" title="Netball Uniform" className="block mt-2 ml-4 text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline -mt-1 mr-1">
                              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
                            Netball
                          </Link> */}
                          <Link
                            onClick={handleToggle}
                            href="/products/tennis"
                            title="Tennis Uniform"
                            className="block mt-2 ml-4 text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 inline -mt-1 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Tennis
                          </Link>
                          {/* <Link onClick={handleToggle} href="#" title="Softball Uniform" className="block mt-2 ml-4 text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline -mt-1 mr-1">
                              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
                            Softball
                          </Link> */}
                          <Link
                            onClick={handleToggle}
                            href="/products/running"
                            title="Running Uniform"
                            className="block mt-2 ml-4 text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 inline -mt-1 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Running
                          </Link>
                          {/* <Link onClick={handleToggle} href="#" title="Australian Football League Uniform" className="block mt-2 ml-4 text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline -mt-1 mr-1">
                              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
                            AFL
                          </Link> */}
                        </li>
                        <li className="py-3">
                          SPORTS WEAR
                          <Link
                            onClick={handleToggle}
                            href="/products/caps"
                            title="Sports Caps and Hats"
                            className="block mt-2 ml-4 text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 inline -mt-1 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Caps Hats
                          </Link>
                          <Link
                            onClick={handleToggle}
                            href="/products/sportsbag"
                            title="Sports Promotional Products"
                            className="block mt-2 ml-4 text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 inline -mt-1 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Sports Bag{" "}
                          </Link>
                          <Link
                            onClick={handleToggle}
                            href="/products/tracksuits"
                            title="Track Suits"
                            className="block mt-2 ml-4 text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 inline -mt-1 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Track Suits
                          </Link>
                          <Link
                            onClick={handleToggle}
                            href="/products/gym"
                            title="Gym Wear"
                            className="block mt-2 ml-4 text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 inline -mt-1 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Gym
                          </Link>
                          {/* <Link onClick={handleToggle}
                            href="#"
                            title="Yoga Wear"
                            className="block mt-2 ml-4 text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline -mt-1 mr-1">
                              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                            Yoga
                          </Link> */}
                          <Link
                            onClick={handleToggle}
                            href="/products/martialarts"
                            title="Martial Arts Wear"
                            className="block mt-2 ml-4 text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 inline -mt-1 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Martial Arts
                          </Link>
                          {/* <Link onClick={handleToggle}
                            href="#"
                            title="Fitness Wear"
                            className="block mt-2 ml-4 text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline -mt-1 mr-1">
                              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                            Fitness
                          </Link> */}
                        </li>

                        <li className="py-3">
                          <Link
                            href="/"
                            onClick={handleToggle}
                            className="hover:text-[#01b8ee] py-2"
                          >
                            SCHOOL UNIFORMS
                          </Link>{" "}
                        </li>

                        <li className="py-3">
                          ACCESSORIES
                          <Link
                            onClick={handleToggle}
                            href="/products/wintercaps"
                            title="Heat Caps"
                            className="block mt-2 ml-4 text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 inline -mt-1 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Heat Caps
                          </Link>
                          <Link
                            onClick={handleToggle}
                            href="/products/wintercaps"
                            title="Winter Caps"
                            className="block mt-2 ml-4 text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 inline -mt-1 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Winter Caps
                          </Link>
                          <Link
                            onClick={handleToggle}
                            href="/products/socks"
                            title="Socks"
                            className="block mt-2 ml-4 text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 inline -mt-1 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Socks
                          </Link>
                        </li>

                        <li className="py-3">
                          <Link
                            href="/"
                            onClick={handleToggle}
                            className="hover:text-[#01b8ee] py-2"
                          >
                            CONTACT US
                          </Link>{" "}
                        </li>
                      </ul>

                      <div className="mt-4 flex justify-center items-center">
                        <div>
                          <div>
                            {" "}
                            <a
                              href="tel:+923024411817"
                              title="Call"
                              className="tooltip font-bold text-xl mt-5 block hover:text-amber-400"
                            >
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 inline mr-0 -mt-1"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                                />
                              </svg>
                              +923024411817
                            </a>
                          </div>
                          {/* 
                          <div className="gap-x-2  panel-social relative top-0 items-center justify-center">
                            <a
                              href="mailto:info@athlotic.com"
                              title="Email"
                              className="emailit tooltip group fill-white bg-black border-black"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-auto fill-white"
                              >
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                              </svg>
                            </a>

                            <a
                              href="http://facebook.com/athloticsports"
                              title="Athlotic Sports on Facebook"
                              className="facebook tooltip group fill-white bg-[#4267B2] border-[#4267B2]"
                            >
                              <svg
                                className="w-6 h-auto fill-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                {" "}
                                <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005 C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996 C17.465,9.521,17.001,9,16.403,9z" />
                              </svg>
                            </a>

                            <a
                              href="http://instagram.com/athloticsports"
                              title="Athlotic Sports on Instagram"
                              className="instagram tooltip group bg-[#405DE6] border-[#405DE6]"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-auto fill-white"
                                viewBox="0 0 30 30"
                              >
                                {" "}
                                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                              </svg>
                            </a>
                    
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
