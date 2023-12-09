"use client";
import React from "react";
import Image from "next/image";

const foooterList = [
  {
    id: 1,
    title: (
      <>
        <div className="">
          <p>ZEROTIER</p>
        </div>
      </>
    ),
    subtitle: (
      <>
        <div className="flex">
          <p>Securely Connecting The World's Devices.</p>
        </div>
      </>
    ),
    svgs: (
      <>
        <div >
          <p className="flex flex-row space-x-8 " >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2 15.74h-4v-3.52H8v3.52H4V8.26h8.16v3.52H14v-3.52h3.04L14.9 5.36a7.06 7.06 0 0 0 1.26-.72l2.62 6.48h3.52z"></path>
            </svg>
          </p>
        </div>
      </>
    ),

    note: (
      <>
        <>
          <div className="">
            <p className="inline -mt-96  bg-black ">© 2023 ZeroTier, Inc. All rights reserved.</p>
          </div>
        </>
      </>
    ),
  },

  {
    id: 2,
    title: (
      <>
        <div>
          <p>GET STARTED</p>
        </div>
      </>
    ),
    subtitle: (
      <>
        <div>
          <p>
            Download
            <br />
            GitHub
            <br />
            SDK
            <br />
            Partner
            <br />
          </p>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: (
      <>
        <div>
          <p>SUPPORT</p>
        </div>
      </>
    ),
    subtitle: (
      <>
        <div>
          <p>
            Documentation
            <br />
            Knowledge Base
            <br />
            Community
            <br />
            Getting Started
            <br />
          </p>
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: (
      <>
        <div>
          <p>COMPANY</p>
        </div>
      </>
    ),
    subtitle: (
      <>
        <div>
          <p>
            Contact
            <br />
            About Us
            <br />
            Careers
            <br />
            Blog
            <br />
            Media Kit
            <br />
          </p>
        </div>
      </>
    ),
    note: (
      <>
       
          <div>
            <p className="-mt-8 mb-8 ">Terms Privacy Policy</p>
          </div>
        
      </>
    ),
  },
];
function Footers() {
  return (
    <>
  <div className="bg-black ">
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-11/12 bg-black mx-auto">
      {foooterList.map((item, index) => (
        <div key={index} className="ml-8 mt-8 bg-black">
          <div className="text-white ">
            <h1 className="text-xl font-bold text-center -mt-20">{item.title}</h1>
            <h1 className="text-lg py-2 text-center ">{item.subtitle}</h1>
          </div>
          <div className="text-white bg-black">
            <h1 className="mt-8 text-center ml-4 py-8">{item.svgs}</h1>
            <h1 className="text-white inline text-center text-lg">{item.note}</h1>
          </div>
        </div>
      ))}
    </div>
  </div>
</>

  );
}

export default Footers;
