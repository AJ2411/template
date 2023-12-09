"use client";
import React from "react";
import tier from "@/assets/Images/tier.png";
import Image from "next/image";
import Img from "@/assets/Images/homepage.jpg";
function Navbar() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-screen bg-red-500 navbarbg"
        // style={{ backgroundImage: "url('/assets/Images/homepage.jpg')" }}
        // style={{ backgroundImage: Img}}
      >
        <nav className=" py-10 border-gray-200 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse -ml-20"
            >
              <Image src={tier} alt="logo" width={40} height={40} />
              <div className="mr-4">
                <h1 className="text-white text-3xl letter-spacing-wider">
                  ZEROTIER
                </h1>
              </div>
            </a>
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-dropdown"
            >
              <ul className=" flex flex-col font-medium p-4 md:p-0 mt-4 border mr-10 py-20 border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-xl  md:p-0 text-white hover:text-yellow-500 "
                  >
                    Features
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-xl md:p-0  text-white hover:text-yellow-500"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-xl  md:p-0  text-white hover:text-yellow-500"
                  >
                    Download
                  </a>
                </li>

                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className=" bg-transparent text-xl flex items-center justify-between w-full py-2 px-3   md:p-0 text-white hover:text-yellow-500"
                  >
                    Company{" "}
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {/* <!-- Dropdown menu --> */}
                  <div
                    id="dropdownNavbar"
                    className="bg-transparent z-10 hidden font-normal divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="bg-transparent py-2 text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                          href="#"
                          className=" bg-black block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Conatct
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Careers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Media Kit
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className=" text-xl flex items-center justify-between w-full py-2 px-3   md:p-0 text-white hover:text-yellow-500"
                  >
                    Support{" "}
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {/* <!-- Dropdown menu --> */}
                  <div
                    id="dropdownNavbar"
                    className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Knowledge Base
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Community
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Getting Started
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-end h-16 -mr-28 ">
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-xl md:p-0 mt-2 text-white hover:text-yellow-500"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    class="text-black bg-yellow-500 hover:text-yellow-500 focus:outline-none focus:ring-4   hover:bg-black font-medium rounded-full text-lg px-7 py-2 text-center me-2 mb-2 hover:focus:ring-yellow-500 border  hover:border-yellow-500"
                  >
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 text-white p-8">
          <div className="flex items-center justify-center">
            <div className="max-w-screen-md">
              <div className="z-20">
                <h1 className="text-6xl font-bold mb-4 mx-2  ">
                  Securely connect any
                  <br />
                  device, anywhere.
                </h1>
                <div className="text-2xl mb-4 mx-4 my-4">
                  ZeroTier lets you build modern, secure multi-point
                  <br />
                  virtualized networks of almost any type. From robust
                  <br />
                  peer-to-peer networking to multi-cloud mesh
                  <br />
                  infrastructure, we enable global connectivity with the
                  <br /> simplicity of a local network.
                </div>

                <div className="mb-4 mt-8 ">
                  <ul className="flex space-x-4 ">
                    <button
                      type="button"
                      className="text-black bg-yellow-500 hover:text-yellow-500 focus:outline-none focus:ring-4   hover:bg-black font-medium rounded-full text-lg px-7 py-2 text-center me-2 mb-2 hover:focus:ring-yellow-500 border  hover:border-yellow-500"
                    >
                      Get Zero Tier
                    </button>
                    <li>
                      <button
                        type="button"
                        className=" text-xl hover:text-yellow-500    hover:bg-black font-medium rounded-full  px-5 py-2 text-center me-2 mb-2 text-white "
                      >
                        Learn more ›{" "}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>

          </div>
          </div>

      <div className="  flex justify-center items-center pb-1" style={{ fontSize: 'var(--_1hrp33e15)' }}>
      <p className="mt-10 text-xl text-justify  text-white">
        🔔 NEW!{' '}
        <a href="https://www.zerotier.com/blog/introducing-zerotier-webhooks/?utm_source=HPztchooks" className="text-white underline hover:text-yellow-500 ">
          ZeroTier Webhooks
        </a>{' '}
        - Current Release:{' '}
        <a href="https://www.zerotier.com/download/?utm_source=HPd" className="text-white underline hover:text-yellow-500">
          Download ZeroTier 1.12.2
        </a>
      </p>
    </div>
        </div>
    </>
  );
}

export default Navbar;
